import { NextPage } from "next";
import RegisterComponent from "../../src/components/General/RegisterComponent";

const InvestorRegistration:NextPage = () => {
  return (
    <RegisterComponent role={"investor"} />
  )
}

export default InvestorRegistration;