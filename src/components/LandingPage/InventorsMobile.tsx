import Image from "next/image";
import { ReactElement } from "react";

export default function InventorsMobile():ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 relative md:h-96">
      <div className="flex justify-center items-center h-full order-2 md:order-1">
        <div className="px-0 md:px-20">
          <div className="mb-0 lg:mb-0 xl:mb-32">
            <p className="text-2xl lg:text-5xl font-extrabold p-3 lg:pr-16 xl:pr-32">Our Mobile Apps are Coming Soon</p>
          </div>
          <div className="flex">
            <div className="mr-5 p-3 md:p-0">
              <Image src={"/images/apple_store_logo.png"} height={50} width={160} alt="apple store logo" />
            </div>
            <div className="p-3 md:p-0">
              <Image src={"/images/play_store_logo.png"} height={50} width={160} alt="apple store logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:absolute md:right-0 md:bottom-0 order-1 md:order-2">
        <Image src={"/images/mobile_coming_soon.svg"} alt="coming soon mobile logo" width={800} height={500} />
      </div>
    </div>
  )
}