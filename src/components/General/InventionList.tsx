import { ReactElement } from "react";
import Image from "next/image";

export default function InventionList():ReactElement {
  return (
    <div className="border flex rounded-3xl overflow-hidden my-10">
      <div className="relative w-1/2">
        <Image src={"/images/black-car.png"} objectFit='cover' alt="black car" layout="fill"/>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between pt-4 px-10 ml-10 items-center">
          <div className="flex flex-col">
            <p className="text-gray-500">Inventors Name</p>
            <p className="font-extrabold text-2xl">Kolawole Alade</p>
            <p className="text-sm text-gray-500">Published Date: <span className="font-bold text-gray-600">24 Dec, 2020</span></p>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col mr-5 text-gray-500">
              <span className="flex items-center"><i className='bx bxs-heart mr-1' /> 300</span>
              <span className="flex items-center"><i className='bx bx-show mr-1' /> 368</span>
              <span className="flex items-center"><i className='bx bx-link-external mr-1' /> Visit</span>
            </div>
            <div>
              <Image src={'/images/big-head.png'} alt="human" width={100} height={100} />
            </div>
          </div>
        </div>

        <div className="flex p-4 px-10 ml-10">
          <p className="text-gray-500 text-base">It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem  and more recently with desktop... read more
          </p>
        </div>

        <div className="flex rounded-xl justify-around items-center flex-wrap md:flex-nowrap ml-14">
          <Image src="/images/car-1.png" height={400} width={400} className="object-cover" alt="car 1" />
          <Image src="/images/car-2.png" height={400} width={400} className="object-cover" alt="car 2" />
          <Image src="/images/car-3.png" height={400} width={400} className="object-cover" alt="car 3" />
          <Image src="/images/car-4.png" height={400} width={400} className="object-cover" alt="car 4" />
          <Image src="/images/car-5.png" height={400} width={400} className="object-cover" alt="car 5" />
        </div>
      </div>
    </div>
  )
}