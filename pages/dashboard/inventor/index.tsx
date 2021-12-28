import { NextPage } from "next";
import Image from "next/image";
import DashboardTable from "../../../src/components/tables/DashboardTable";

const index:NextPage = () => {
  return (
    <>
      <div className="flex justify-between items-end">
        <p className="font-bold text-xl md:text-3xl">Dashboard</p>
        <div>
          <p className="text-lg text-gray-600">Welcome,</p>
          <p className="font-semibold text-lg text-gray-700">Samson Samuels</p>
        </div>
      </div>
      <div className="my-8">
        <hr />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
        <div className="dashboard_card">
          <Image src={"/svg/approved.svg"} alt="approved icon" width={70} height={70} />
          <div className="flex justify-between mt-5">
            <p className="flex flex-col text-gray-700"><span>Approved</span> <span>Projects</span></p>
            <p className="text-5xl font-extrabold text-gray-700">20</p>
          </div>
        </div>
        <div className="dashboard_card">
          <Image src={"/svg/pending.svg"} alt="pending icon" width={70} height={70} />
          <div className="flex justify-between mt-5">
            <p className="flex flex-col text-gray-700"><span>Pending</span> <span>Projects</span></p>
            <p className="text-5xl font-extrabold text-gray-700">20</p>
          </div>
        </div>
        <div className="dashboard_card">
          <Image src={"/svg/contract.svg"} alt="contract icon" width={70} height={70} />
          <div className="flex justify-between mt-5">
            <p className="flex flex-col text-gray-700"><span>Signed</span> <span>Contracts</span></p>
            <p className="text-5xl font-extrabold text-gray-700">10</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between font-normal mb-3 text-gray-700">
          <p>Inventions Overview</p>
          <p className="hover:underline cursor-pointer">See All &rsaquo;</p>
        </div>
        <DashboardTable />
      </div>
    </>
  )
}

export default index;