import Image from "next/image";
import { ReactElement } from "react";

export default function Recommendation():ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
     { [1,2,3,4,5,6].map((el) => (
        <div key={el} className="flex flex-col w-full rounded-xl overflow-hidden">
          <Image src="/images/car-6.jpg" width={400} height={400} objectFit="cover" layout="responsive" alt="image" />
          <div className="flex flex-col bg-gray-100 p-5">
            <div className="flex flex-col mb-5">
              <p className="text-xl font-bold text-gray-700">Invention Title</p>
              <p className="text-xs text-gray-500 mt-1"><span>🟡</span> Entertainment</p>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <p className="font-light text-gray-500">From</p>
                <p className="font-bold  text-lg text-gray-700">$12,900.00</p>
              </div>
              <button className="border border-primary p-2 text-sm text-primary hover:bg-primary hover:text-white rounded-xl font-semibold">Invest Now</button>
            </div>
          </div>
        </div>
      )
      )}
    </div>
  )
}