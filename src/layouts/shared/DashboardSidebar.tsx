import { NextPage } from "next";
import { useRouter } from "next/router";
import InventorSidebar from "./InventorSidebar";
import InvestorSidebar from "./InvestorSidebar";

const DashboardSidebar:NextPage = () => {
  const router = useRouter();

  return (
    <>
     {
       router.pathname.includes('inventor') ? <InventorSidebar /> : <InvestorSidebar />
     }
    </>
  )
}

export default DashboardSidebar;
