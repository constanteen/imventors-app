import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ILoginDetails } from "../../lib/types";

const Login:NextPage = () => {
  const [userDetails, setUserDetails] = useState<ILoginDetails>({email: "", password: ""});
  const [inputErrors, setInputErrors] = useState<ILoginDetails>({email: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);
  const handleTextUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    });
    setInputErrors({email: "", password: ""});
  }

  const checkErrors = ():ILoginDetails => {
    const errors = {} as ILoginDetails;
    if (!userDetails.email || !userDetails.email.includes('@')) errors.email = "Please enter a valid email address";
    if (!userDetails.password || userDetails.password.length < 6) errors.password = "Password is too short";
    return errors;
  }

  const submit = () => {
    const errors = checkErrors();

    if (Object.values(errors).length > 0) {
      setInputErrors(errors);
      return;
    }

    signIn("credentials", {email: userDetails.email, password: userDetails.password, redirect: false})
    .then(response => console.log(response))
    .catch(error => console.error(error.response))
    .finally(() => setIsLoading(false))

    // console.log(userDetails);
  }

  return (
    <main className="flex max-h-screen overflow-hidden">
      <section className="w-full md:w-1/2">
        <div className="pt-3 ml-5 mb-0 hover:text-primary">
          <Link href={"/"}>
            &larr; Back to Homepage
          </Link>
        </div>
        <div className="flex justify-center items-center h-full w-full flex-col mt-10 md:mt-0">
          <div className="flex flex-col w-11/12 sm:w-3/4 lg:w-1/2 h-full md:h-auto items-center">
            <div className="flex w-full justify-between items-end">
              <p className="text-xl font-semibold">Sign In</p>
            </div>
            <div className="w-full my-5 md:mb-0">
              <input 
                name="email"
                className="login_formInput" 
                onChange={(e) => handleTextUpdate(e)} 
                id="email" 
                type="text" 
                placeholder="Email Address" 
                value={userDetails.email}
              />
              <span className="text-red-500 text-xs text-center mt-2">{inputErrors.email}</span>
            </div>
            <div className="w-full my-5 md:mb-0">
              <input 
                className="login_formInput" 
                onChange={(e) => handleTextUpdate(e)}
                id="password"
                type="password" 
                placeholder="Password"
                name="password" 
                value={userDetails.password}
              />
              <span className="text-red-500 text-xs text-center mt-2">{inputErrors.password}</span>
            </div>
            <div className="flex justify-end ml-auto text-sm mb-5 mt-2">
              <p className="text-gray-400 hover:underline cursor-pointer">Forgot Password?</p>
            </div>
            <button onClick={submit} className={`register_button ${isLoading ? 'pointer-events-none' : ''}`}>
              {isLoading ? "Loading..." : "Sign In"}
            </button>
            <div className="my-8 w-full flex items-center justify-center">
              <span className="h-0.5 w-full inline-block bg-gray-200"></span>
              &nbsp;&nbsp;&nbsp;<span className="text-sm flex">Or&nbsp;continue&nbsp;with</span>&nbsp;&nbsp;&nbsp;
              <span className="h-0.5 inline-block w-full bg-gray-200"></span>
            </div>
            <div className="flex justify-around w-full">
              <button className="border py-2 px-7 rounded-xl transition-all hover:scale-105 hover:shadow">
                <i className='bx bxl-google text-2xl' style={{color: '#DB4437'}} />
              </button>
              <button className="border py-2 px-7 rounded-xl transition-all hover:scale-105 hover:shadow">
                <i className='bx bxl-facebook-circle text-2xl' style={{color: '#4267b2'}} />
              </button>
              <button className="border py-2 px-7 rounded-xl transition-all hover:scale-105 hover:shadow">
                <i className='bx bxl-twitter text-2xl' style={{color: '#00acee'}} />
              </button>
            </div>
            <div className="mt-5 w-full">
              <p className="text-center font-bold">Register</p>
              <div className="flex mt-5 justify-between w-full">
                <Link href={'/auth/investor-registration'}>
                  <a className="font-semibold text-primary hover:underline">As an Investor</a>
                </Link>
                <div className="text-gray-400">|</div>
                <Link href={'/auth/inventor-registration'}>
                  <a className="font-semibold text-primary hover:underline">As an Inventor</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-1/2 bg-gray-100 h-screen hidden md:block">
        <div>
          <Image src="/images/login_illustration.svg" height={800} width={800} objectFit="contain" alt="login image" />
        </div>
      </section>
    </main>
  )

}

export default Login;