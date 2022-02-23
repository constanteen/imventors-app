import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

const index:NextPage = () => {
  return (<div>Redirecting...</div>)
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sess = await getSession(context);

  console.log("server sess", sess);
  if (sess?.role === 7) {
    return {
      redirect: {
        destination: '/dashboard/inventor',
        permanent: false,
      }
    }
  }

  if (sess?.role === 8) {
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