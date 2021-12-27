import { NextPage } from 'next';
import Image from 'next/image';

const index: NextPage = () => {
  return (
    <div>
      <div className="flex bg-gray-100 p-6 rounded-xl justify-around items-center flex-wrap ">
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
        <div >
          <div className="flex items-center bg-white py-2 px-10 justify-between rounded-xl">
            <div className="w-0.5 h-8 bg-yellow-400"></div>
            <div className="ml-10">
              <p className="text-xs">Date Joined</p>
              <p className="font-bold">Oct. 5th, 2020</p>
            </div>
          </div>
        </div>
        <div className="w-0.5 h-16 sm:bg-gray-200 hidden sm:block" />
        <div className="mt-8 md:mt-0">
          <div className="flex items-center bg-white py-2 px-10 justify-between rounded-xl">
            <div className="w-0.5 h-8 bg-blue-400"></div>
            <div className="ml-10">
              <p className="text-xs">Review</p>
              <p>
                <i className='bx bxs-star' style={{color: '#f3ff00'}}  ></i>
                <i className='bx bxs-star' style={{color: '#f3ff00'}}  ></i>
                <i className='bx bxs-star' style={{color: '#f3ff00'}}  ></i>
                <i className='bx bxs-star' style={{color: '#afafa5'}}  ></i>
                <i className='bx bxs-star' style={{color: '#afafa5'}}  ></i>
              </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default index; 