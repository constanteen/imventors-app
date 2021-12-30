import { ReactElement } from "react";
import BigBadge from "../General/BigBadge";
import InventorsProfile from "../profile/InventorsProfile";

export default function AboutInvention():ReactElement {
  return (
    <>
      <InventorsProfile />
      <div className="mt-10 font-semibold text-gray-700 mb-2">
        <p>About Author</p>
      </div>
      <div className="flex bg-gray-100 p-6 rounded-xl justify-around items-center flex-wrap">
        <div className="flex w-full justify-center md:justify-between gap-1 md:gap-5 mb-3 flex-wrap md:flex-nowrap">
          <BigBadge header="From" details="Nigeria" lineColor="bg-yellow-300" />
          <BigBadge header="Date Joined" details="Oct. 5th, 2020" lineColor="bg-yellow-300" />
          <BigBadge header="Assumed Profit" details="$45,000" lineColor="bg-yellow-300" />
          <BigBadge header="Duration" details="3 Years" lineColor="bg-yellow-300" />
        </div>
        <p className="text-sm text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
        </p>
      </div>
    </>
  )
}