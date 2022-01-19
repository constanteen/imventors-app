import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const login:NextPage = () => {

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
              <input className="login_formInput" id="email" type="text" placeholder="Email Address" />
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" id="password" type="password" placeholder="Password" />
            </div>
            <div className="flex justify-end ml-auto text-sm mb-5 mt-2">
              <p className="text-gray-400 hover:underline cursor-pointer">Forgot Password?</p>
            </div>
            <button className="p-3 w-full rounded-xl bg-primary text-white border border-primary hover:text-primary font-semibold hover:bg-white">Sign In</button>
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

export default login;