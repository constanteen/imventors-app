import { ReactElement } from "react";
import Image from "next/image";
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

interface ProfileForm {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  submit: (data: any) => void;
}

export default function UsersProfile({register, handleSubmit, submit}: ProfileForm):ReactElement {
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
          <form className="w-full" onSubmit={handleSubmit(submit)}>
            <div>
              <p>Personal Information</p>
              <hr />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
              <div className="w-full md:w-1/2 my-5 md:mb-0">
                <label className="profile_formLabel" htmlFor="full-name">
                  First Name
                </label>
                <input {...register("first_name")} className="profile_formInput" id="full-name" type="text" placeholder="Full Name" />
              </div>
              <div className="w-full md:w-1/2 my-5">
                <label className="profile_formLabel" htmlFor="last-name">
                  Last Name
                </label>
                <input {...register("last_name")} className="profile_formInput" id="last-name" type="text" placeholder="Full Name" />
              </div>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
              <div className="w-full md:w-1/2 my-5">
                <label className="profile_formLabel" htmlFor="phone-number">
                  Phone Number
                </label>
                <input {...register("phone")} className="profile_formInput" id="phone-number" type="text" placeholder="+234 -- --- ---" />
              </div>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-3">
              <div className="w-full md:w-1/2 my-5 md:mb-0">
                <label className="profile_formLabel" htmlFor="country">
                  Country
                </label>
                <input {...register("country")} className="profile_formInput" id="country" type="text" placeholder="Select Country" />
              </div>
              <div className="w-full md:w-1/2 my-5">
                <label className="profile_formLabel" htmlFor="province">
                  State/Province
                </label>
                <input {...register("state")} className="profile_formInput" id="province" type="text" placeholder="Select State or Province" />
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
                <input {...register("company_name")} className="profile_formInput" id="company-name" type="text" placeholder="Company Name" />
              </div>
              <div className="w-full md:w-1/2 my-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-email">
                  Company Email (if any)
                </label>
                <input {...register("company_email")} className="profile_formInput" id="company-email" type="email" placeholder="Company Email" />
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
              <div className="w-full md:w-1/2 my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-address">
                  Address
                </label>
                <input {...register("company_address")} className="profile_formInput" id="company-address" type="text" placeholder="Address" />
              </div>
              <div className="w-full md:w-1/2 my-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="head-office">
                  Head Office
                </label>
                <input {...register("head_office")} className="profile_formInput" id="head-office" type="text" placeholder="Office Address" />
              </div>
            </div>
            <div className="w-full my-5">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="hobbies">
                Hobbies
              </label>
              <textarea {...register("hobbies")} className="profile_formInput" id="hobbies" rows={5} placeholder="What are your hobbies?" />
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
                <input {...register("website_url")} className="profile_formInput" id="website" type="text" placeholder="https://" />
              </div>
              <div className="w-full md:w-1/3 my-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="facebook-business">
                  Facebook Business
                </label>
                <input {...register("facebook_business")} className="profile_formInput" id="facebook-business" type="text" placeholder="https://" />
              </div>
              <div className="w-full md:w-1/3 my-5 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="linkedin-id">
                  LinkedIn ID
                </label>
                <input {...register("linkedin")} className="profile_formInput" id="linkedin-id" type="text" placeholder="https://" />
              </div>
            </div>
            <button className="w-full bg-primary text-white hover:bg-blue-600 p-3 rounded-lg">Submit Information</button>
          </form>
        </div>
      </div>
    </>
  )
}