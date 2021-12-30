import { ReactElement } from "react";
import Image from "next/image";
import BigBadge from "../General/BigBadge";
import YoutubeEmbed from "../General/YoutubeEmbed";
import InventorsProfile from "../profile/InventorsProfile";

export default function Invention():ReactElement {
  return (
    <div>
      <InventorsProfile /> 
      <div className="mt-10 font-semibold text-gray-700">
        <p>Interested Invention</p>
      </div>
      <div className="flex bg-gray-100 p-6 rounded-xl justify-around items-center flex-wrap mt-3">
        <div>
          <p className="text-xl font-bold text-gray-800">Electric Car by Joshua Adelakun</p>
          <p className="text-normal mt-4 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
          </p>
        </div>
      </div>

      <div className="mt-10 font-semibold text-gray-700">
        <p>Gallery</p>
      </div>
      <div className="flex bg-gray-100 pt-6 rounded-xl justify-around items-center flex-wrap md:flex-nowrap">
        <Image src="/images/car-1.png" height={300} width={400} className="object-cover" alt="car 1" />
        <Image src="/images/car-2.png" height={300} width={400} className="object-cover" alt="car 2" />
        <Image src="/images/car-3.png" height={300} width={400} className="object-cover" alt="car 3" />
        <Image src="/images/car-4.png" height={300} width={400} className="object-cover" alt="car 4" />
        <Image src="/images/car-5.png" height={300} width={400} className="object-cover" alt="car 5" />
      </div>

      <div className="flex bg-gray-100 p-6 rounded-xl justify-around items-center flex-wrap mt-3">
        <YoutubeEmbed />
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
        <div className="w-full md:w-1/2 my-5 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-name">
            Share with friends
          </label>
          <p className="bg-gray-100 p-4 rounded-xl text-sm">
            electric-car-by-joshua
          </p>
        </div>
        <div className="w-full md:w-1/2 my-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-email">
            Invention URL
          </label>
          <p className="bg-gray-100 p-4 rounded-xl text-sm">
            https://inventors.com.ng/invention/electric-car
          </p>
        </div>
      </div>

      <div className="mt-10 font-semibold text-gray-700">
        <p>Brief Details</p>
      </div>
      <div className="flex bg-gray-100 p-6 rounded-xl justify-around items-center flex-wrap mt-3">
        <BigBadge header="Invention Industry" details="Entertainment" lineColor="bg-yellow-600" />
        <BigBadge header="Invention Related Industry" details="Music" lineColor="bg-yellow-600" />
        <BigBadge header="Invention Duration" details="1 Year" lineColor="bg-yellow-600" />
        <BigBadge header="Target Audience" details="Everyone" lineColor="bg-yellow-600" />
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
        <div className="w-full md:w-1/2 my-5 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-name">
            Business Model
          </label>
          <p className="bg-gray-100 p-4 rounded-xl text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
          </p>
        </div>
        <div className="w-full md:w-1/2 my-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-email">
            Revenue Generating Strategy
          </label>
          <p className="bg-gray-100 p-4 rounded-xl text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
          </p>
        </div>
      </div>
      <div className="w-full my-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="hobbies">
          Plans for Expansion
        </label>
        <p className="bg-gray-100 p-4 rounded-xl text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard. ike Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown
        </p>
      </div>
    </div>
  )
}