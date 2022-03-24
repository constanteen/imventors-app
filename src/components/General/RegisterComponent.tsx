import { ChangeEvent, ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { IRegistrationDetails } from "../../../lib/types";
import { inventorsClient } from "../../../lib/client";
import { checkErrors } from "../../../Utils/checkRegistrationErrors";
import { registrationErrorHandler } from "../../utils/function";
import { useDispatch } from "react-redux";
import { saveRegisteredEmail } from "../../../store/actions/action_creators";
import { useRouter } from "next/router";
import { AxiosError } from "axios";

interface IRegisterRole {
  roleNumber: number;
}

export default function RegisterComponent({ roleNumber }: IRegisterRole):ReactElement {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<IRegistrationDetails>({
    email: "", password1: "", password2: "", country: "", first_name: "", last_name: "", phone: "", roles: roleNumber, confirm_agreement: true,
  });

  const [inputErrors, setInputErrors] = useState<IRegistrationDetails>({
    email: "", password1: "", password2: "", country: "", first_name: "", last_name: "", phone: "",
  });
  const [error, setError] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTextUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    });
    setInputErrors({email: "", password1: "", password2: "", country: "", first_name: "", last_name: "", phone: "",});
  }

  const submit = async() => {
    const errors = checkErrors(userDetails);
    if (Object.values(errors).length > 0) {
      setInputErrors(errors);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await inventorsClient.post("/auth/registration/", userDetails);
      if (response.status === 201 || response.statusText === "Created") {
        dispatch(saveRegisteredEmail(userDetails.email));
        setTimeout(() => router.push('/auth/complete-registration'), 1000);
      }
    } catch(error) {
      if (axios.isAxiosError(error)) {
        const errResp = error as AxiosError;
        // Handle your error type safe here
        setError(registrationErrorHandler(errResp?.response));
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex max-h-screen overflow-x-hidden">
      <section className="w-full md:w-1/2">
        <div className="pt-3 ml-5 mb-0 hover:text-primary">
          <Link href={"/"}>
            &larr; Back to Homepage
          </Link>
        </div>
        <div className="flex justify-center items-center h-full w-full flex-col mt-10 md:mt-0">
          <div className="flex flex-col w-11/12 sm:w-3/4 lg:w-1/2 h-full md:h-auto items-center">
            <div className="flex w-full justify-between items-end">
              <p className="text-xl font-semibold">Create An Inventor Account</p>
              <Link href={'/auth/login'}>
                <a className="font-semibold text-primary">Sign In Here!</a>
              </Link>
            </div>
            <div className="w-full my-5 flex gap-2 md:mb-0">
              <div className="w-1/2">
                <input className="login_formInput" name="first_name" id="first_name" type="text" placeholder="First Name" value={userDetails.first_name} onChange={(e) => handleTextUpdate(e)} />
                <span className="text-red-500 text-xs text-center mt-2">{inputErrors.first_name}</span>
              </div>
              <div className="w-1/2">
                <input className="login_formInput" name="last_name" id="last_name" type="text" placeholder="Last Name" value={userDetails.last_name} onChange={(e) => handleTextUpdate(e)} />
                <span className="text-red-500 text-xs text-center mt-2">{inputErrors.last_name}</span>
              </div>
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" name="email" id="email" type="text" placeholder="Email Address" value={userDetails.email} onChange={(e) => handleTextUpdate(e)} />
              <span className="text-red-500 text-xs text-center mt-2">{inputErrors.email}</span>
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" name="phone" id="phone" type="tel" placeholder="Phone Number" value={userDetails.phone} onChange={(e) => handleTextUpdate(e)}/>
              <span className="text-red-500 text-xs text-center mt-2">{inputErrors.phone}</span>
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" name="country" id="country" type="text" placeholder="Country" value={userDetails.country} onChange={(e) => handleTextUpdate(e)}/>
              <span className="text-red-500 text-xs text-center mt-2">{inputErrors.country}</span>
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" name="password1" id="password" type="password" placeholder="Password" value={userDetails.password1} onChange={(e) => handleTextUpdate(e)}/>
              <span className="text-red-500 text-xs text-center mt-2">{inputErrors.password1}</span>
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" name="password2" id="confirmPassword" type="password" placeholder="Confirm Password" value={userDetails.password2} onChange={(e) => handleTextUpdate(e)}/>
              <span className="text-red-500 text-xs text-center mt-2">{inputErrors.password2}</span>
            </div>
            <button onClick={submit} className={`register_button ${isLoading ? 'pointer-events-none' : ''}`}>
              {isLoading ? "Loading..." : "Create Account"}
            </button>
            <div>
              <ul className="my-3">
                {
                  error && error.map((err, i) => <li className="text-red-500" key={i}>{ err }</li>)
                }
              </ul>
            </div>
            <div className="mt-2 mb-8 w-full flex items-center justify-center">
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
          </div>
        </div>
      </section>
      <section className="w-1/2 bg-gray-100 h-screen hidden md:block">
        <p className="px-32 mt-12 leading-8">
          Do you have an idea and, you need potential investors to sponsor such ideas? Sign up and publish your ideas on this platform.
        </p>
        <div className="flex justify-center">
          <Image src="/images/inventor_register_illustration.svg" height={600} width={700} objectFit="contain" alt="login image" />
        </div>
      </section>
    </main>
  )
}