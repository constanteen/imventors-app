import { NextPage } from "next";
import Image from "next/image"

const index: NextPage = () => {
  return (
    <>
      <div>
        <p className="font-bold text-3xl">Profile</p>
      </div>
      <div className="my-8">
        <hr />
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex">
          <div>
            <Image className="rounded-full" src="/images/avatar_placeholder.png" width={100} height={100} alt="profile picture" />
          </div>
        </div>
        <div className="flex flex-1">
          <form className="w-full">
            <div>
              <p>Personal Information</p>
              <hr />
            </div>
            
            <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
              <div className="w-full md:w-1/2 my-5 md:mb-0">
                <label className="profile_formLabel" htmlFor="full-name">
                  Full Name
                </label>
                <input className="profile_formInput" id="full-name" type="text" placeholder="Full Name" />
              </div>
              <div className="w-full md:w-1/2 my-5">
                <label className="profile_formLabel" htmlFor="phone-number">
                  Phone Number
                </label>
                <input className="profile_formInput" id="phone-number" type="text" placeholder="+234 -- -------" />
              </div>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-3">
              <div className="w-full md:w-1/2 my-5 md:mb-0">
                <label className="profile_formLabel" htmlFor="country">
                  Country
                </label>
                <input className="profile_formInput" id="country" type="text" placeholder="Select Country" />
              </div>
              <div className="w-full md:w-1/2 my-5">
                <label className="profile_formLabel" htmlFor="province">
                  State/Province
                </label>
                <input className="profile_formInput" id="province" type="text" placeholder="Select State or Province" />
              </div>
            </div>

            <div>
              <p>Additional Information</p>
              <hr />
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
              <div className="w-full md:w-1/2 my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-name">
                  Company Name (if any)
                </label>
                <input className="profile_formInput" id="company-name" type="text" placeholder="Company Name" />
              </div>
              <div className="w-full md:w-1/2 my-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-email">
                  Company Email (if any)
                </label>
                <input className="profile_formInput" id="company-email" type="email" placeholder="Company Email" />
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
              <div className="w-full md:w-1/2 my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-address">
                  Address
                </label>
                <input className="profile_formInput" id="company-address" type="text" placeholder="Address" />
              </div>
              <div className="w-full md:w-1/2 my-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="head-office">
                  Head Office
                </label>
                <input className="profile_formInput" id="head-office" type="text" placeholder="Office Address" />
              </div>
            </div>
            <div className="w-full my-5">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="hobbies">
                Hobbies
              </label>
              <textarea className="profile_formInput" id="hobbies" rows={5} placeholder="What are your hobbies?" />
            </div>

            <div>
              <p>Social Media Information</p>
              <hr />
            </div>
            <div className="flex gap-0 md:gap-8 flex-wrap md:flex-nowrap mb-0 md:mb-3">
              <div className="w-full md:w-1/3 my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="website">
                  Website URL
                </label>
                <input className="profile_formInput" id="website" type="text" placeholder="https://" />
              </div>
              <div className="w-full md:w-1/3 my-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="facebook-business">
                  Facebook Business
                </label>
                <input className="profile_formInput" id="facebook-business" type="text" placeholder="https://" />
              </div>
              <div className="w-full md:w-1/3 my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="linkedin-id">
                  LinkedIn ID
                </label>
                <input className="profile_formInput" id="linkedin-id" type="text" placeholder="https://" />
              </div>
            </div>
            <button className="w-full bg-primary text-white hover:bg-blue-600 p-3 rounded-lg">Submit Information</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default index; 