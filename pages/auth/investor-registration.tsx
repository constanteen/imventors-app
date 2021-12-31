import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const InvestorRegistration:NextPage = () => {

  return (
    <main className="flex max-h-screen overflow-hidden">
      <section className="w-full md:w-1/2">
        <div className="flex justify-center items-center h-full w-full flex-col mt-10 md:mt-0">
          <div className="flex flex-col w-11/12 sm:w-3/4 lg:w-1/2 h-full md:h-auto items-center">
            <div className="flex w-full justify-between items-end">
              <p className="text-xl font-semibold">Create An Investor Account</p>
              <Link href={'/auth/login'}>
                <a className="font-semibold text-primary">Sign In Here!</a>
              </Link>
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" id="fullName" type="text" placeholder="Full Name" />
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" id="email" type="text" placeholder="Email Address" />
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" id="phone" type="tel" placeholder="Phone Number" />
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" id="country" type="text" placeholder="Country" />
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" id="password" type="password" placeholder="Password" />
            </div>
            <div className="w-full my-5 md:mb-0">
              <input className="login_formInput" id="confirmPassword" type="password" placeholder="Confirm Password" />
            </div>
            <button className="p-3 mt-5 w-full rounded-xl bg-primary text-white border border-primary hover:text-primary font-semibold hover:bg-white">Create Account</button>
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
          </div>
        </div>
      </section>
      <section className="w-1/2 bg-gray-100 h-screen hidden md:block">
        <p className="px-32 mt-12 leading-8">
          Are you looking for a smart way to invest? Why not invest in our ideas that will regenerate maximum ROI
        </p>
        <div className="flex justify-center">
          <Image src="/images/investor_register_illustration.svg" height={600} width={700} objectFit="contain" alt="login image" />
        </div>
      </section>
    </main>
  )

}

export default InvestorRegistration;