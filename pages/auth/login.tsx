import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ILoginDetails } from "../../lib/types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type SignInResponse = {
  ok: boolean;
  status: number;
  error: string;
  url: string;
}

const Login:NextPage = () => {
  const router = useRouter();
  const {register, handleSubmit, formState: { errors }} = useForm({defaultValues: {
    username: "",
    password: "",
  }});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (data: ILoginDetails) => {
    setIsLoading(true);
    error.length > 0 && setError("");
    try {
      const response = await signIn("credentials", { ...data, redirect: false }) as unknown as SignInResponse;
      if (response?.status === 401 && response?.ok === false) {
        setError("Invalid login credentials");
      }
      if (response?.status === 200 && response?.ok === true) {
        router.push("/dashboard");
      }
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
          <form className="flex flex-col w-11/12 sm:w-3/4 lg:w-1/2 h-full md:h-auto items-center" onSubmit={handleSubmit(submit)}>
            <div className="flex w-full justify-between items-end">
              <p className="text-xl font-semibold">Sign In</p>
            </div>
              <div className="w-full my-5 md:mb-0">
                <input 
                  {...register("username")}
                  className="login_formInput" 
                  id="username" 
                  type="text" 
                  placeholder="Email Address" 
                />
                <span className="text-red-500 text-xs text-center mt-2">
                  {errors.username?.message}
                </span>
              </div>
              <div className="w-full my-5 md:mb-0">
                <input 
                  {...register("password", {required: true,})}
                  className="login_formInput" 
                  id="password"
                  type="password" 
                  placeholder="Password"
                  name="password" 
                />
                <span className="text-red-500 text-xs text-center mt-2">
                  {errors.password?.type === 'required' && "Password is required"}
                </span>
              </div>
              <div className="flex justify-end ml-auto text-sm mb-5 mt-2">
                <p className="text-gray-400 hover:underline cursor-pointer">Forgot Password?</p>
              </div>
              <div>
                <span className="text-red-700">{error}</span>
              </div>
              <button onClick={handleSubmit(submit)} className={`register_button ${isLoading ? 'pointer-events-none' : ''}`}>
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
          </form>
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