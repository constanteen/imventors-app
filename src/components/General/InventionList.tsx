import { ReactElement } from "react";
import Image from "next/image";
import { InventionDetail } from "../../../lib/types";
import moment from "moment";
interface InventionListProps{
  invention:InventionDetail
}

 const InventionList:React.FC<InventionListProps> = ({invention})=> {
  const loaderProp =({ src }:any) => {
    return src;
  }
  return (
    <div className="border flex rounded-3xl overflow-hidden my-10">
      <div className="relative w-1/2">
        <Image src={"/images/black-car.png"} objectFit='cover' alt="black car" layout="fill"/>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between pt-4 px-10 ml-10 items-center">
          <div className="flex flex-col">
            <p className="text-gray-500">Inventors Name</p>
            <p className="font-extrabold text-2xl">John Doe</p>
            <p className="text-sm text-gray-500">Published Date: <span className="font-bold text-gray-600">{
            moment(invention.published_date).format('DD MMMM,YYYY')}</span></p>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col mr-5 text-gray-500">
              <span className="flex items-center"><i className='bx bxs-heart mr-1' /> 300</span>
              <span className="flex items-center"><i className='bx bx-show mr-1' /> 368</span>
              <span className="flex items-center"><i className='bx bx-link-external mr-1' /> Visit</span>
            </div>
            <div>
              <Image src={invention.image} loader={loaderProp} alt="human" width={100} height={100} />
            </div>
          </div>
        </div>

        <div className="flex p-4 px-10 ml-10">
          <p className="text-gray-500 text-base">{invention.description}
          </p>
        </div>

        <div className="flex rounded-xl justify-around items-center flex-wrap md:flex-nowrap ml-14">
         {invention.image1 &&  <Image src={invention.image} loader={loaderProp}  height={400} width={400} className="object-cover" alt="car 1" /> }
         {invention.image2 &&  <Image src={invention.image2} loader={loaderProp} height={400} width={400} className="object-cover" alt="car 2" /> }
         {invention.image3 && <Image src={invention.image3} loader={loaderProp}   height={400} width={400} className="object-cover" alt="car 3" />}
         {invention.image4 &&<Image src={invention.image4} loader={loaderProp} height={400} width={400} className="object-cover" alt="car 4" />}
         {invention.image5 &&<Image src={invention.image5} loader={loaderProp}  height={400} width={400} className="object-cover" alt="car 5" />}
        </div>
      </div>
    </div>
  )
}

export default InventionList;