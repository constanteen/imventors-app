import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { inventorsClient } from "../../lib/client";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { AxiosError } from "axios";

const CompleteRegistration:NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { registeredEmail } = useSelector((state:State) => state.userReducer);
  const [successText, setSuccessText] = useState<string>("");

  const submit = async() => {
    setIsLoading(true);

    try {
      const response = await inventorsClient.post('/auth/registration/resend-email/', {email: registeredEmail});
      if (response.status === 200 || response.statusText === 'OK') {
        setSuccessText("Email Sent Successfully");
      }
    }
    catch(error) {
      const err = error as AxiosError;
      console.error(err.response);
    }
    finally {
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
          <div className="flex flex-col w-11/12 sm:w-3/4 lg:w-1/2 h-full md:h-auto items-center">
            <div className="my-5">
              <p className="text-xl font-semibold">Registration Successful</p>
            </div>
            <div>
              If you did not receive an email please click on the button below and we will send another email to you
            </div>
            <button onClick={submit} className={`register_button ${isLoading ? 'pointer-events-none' : ''}`}>
              {isLoading ? "Loading..." : "Resend Email"}
            </button>
            <p className="mt-3 text-green-500">{successText}</p>
          </div>
          <div className="mt-4 text-primary">
            <Link href={'/auth/login'}>Go to Login Page</Link>
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

export default CompleteRegistration;