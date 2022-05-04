import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { inventorsClient } from "../../lib/client";
import Loader from "../../src/components/General/Loader";

const index:NextPage = () => {
  return (<Loader />)
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sess = await getSession(context);
  
  if (sess?.role === "inventor") {
    return {
      redirect: {
        destination: '/dashboard/inventor',
        permanent: false,
      }
    }
  }

  if (sess?.role === "investor") {
    return {
      redirect: {
        destination: '/dashboard/investor',
        permanent: false,
      }
    }
  }
  
  return {
    redirect: {
      destination: '/auth/login',
      permanent: false,
    }, 
  }
}