import { ReactElement } from "react";
import Image from "next/image";
import BigBadge from "../General/BigBadge";

export default function InventorsProfile():ReactElement {
  return (
    <>
      <div className="flex bg-gray-100 p-6 rounded-xl justify-around items-center flex-wrap">
        <div className="flex mb-3 md:mb-0 flex-col md:flex-row md:items-center">
          <Image src="/images/big-head.png" width={70} height={70} alt="inventor image" className="object-contain" />
          <div className="ml-3">
            <p className="text-2xl font-bold">Joshua Adelakun</p>
            <div className="text-gray-600 flex mt-3">
              <span className="flex items-center flex-1"><i className='bx bxs-show' /> &nbsp; 200</span>
              <span className="flex items-center md:flex-auto"><i className='bx bxs-heart' /> &nbsp; 300</span>
            </div>
          </div>
        </div>
        <div className="w-0.5 h-16 sm:bg-gray-200 hidden sm:block" />
        <BigBadge header="Date Joined" details="Oct. 5th, 2020" lineColor="bg-yellow-400" />
        <div className="w-0.5 h-16 sm:bg-gray-200 hidden sm:block" />
        <div className="mt-8 md:mt-0">
          <div className="flex items-center bg-white py-2 px-10 justify-between rounded-xl">
            <div className="w-0.5 h-8 bg-blue-400"></div>
            <div className="ml-10">
              <p className="text-xs">Review</p>
              <p>
                <i className='bx bxs-star' style={{color: '#f3ff00'}} />
                <i className='bx bxs-star' style={{color: '#f3ff00'}} />
                <i className='bx bxs-star' style={{color: '#f3ff00'}} />
                <i className='bx bxs-star' style={{color: '#afafa5'}} />
                <i className='bx bxs-star' style={{color: '#afafa5'}} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-100 p-6 rounded-xl justify-around items-center flex-wrap mt-8">
        <div className="flex items-center flex-col md:flex-row">
          <div className="md:mr-10">
            <Image src={'/images/black-car.png'} width={200} height={250} alt="invention" />
          </div>
          <div>
            <BigBadge header="Startup Budget" details="$450,000,000.56" lineColor="bg-orange-400" />
            <BigBadge header="Required amount to start" details="$350,000,000.56" lineColor="bg-green-400" />
            <BigBadge header="Full Amount to complete project" details="$850,000,000.56" lineColor="bg-blue-400" />
          </div>
        </div>
        <div className="w-0.5 h-48 bg-gray-200 hidden sm:block"></div>
        <div>
          <BigBadge header="Startup Budget" details="$450,000,000.56" lineColor="bg-green-200" />
          <BigBadge header="Required amount to start" details="$350,000,000.56" lineColor="bg-green-600" />
          <BigBadge header="Full Amount to complete project" details="$850,000,000.56" lineColor="bg-pink-400" />
        </div>
      </div>
    </>
  )
}