import { AxiosError } from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { inventorsClient } from "../../lib/client";

interface Props {
  resStatus: string;
}

const EmailVerification:NextPage<Props> = ({resStatus}) => {
  return (
    <div className="grid grid-cols-3 h-screen w-screen">
      <div className="bg-gray-100"></div>
      <div className="flex justify-center items-center">
        <div className="flex items-center flex-col">
          <div>
            {
              resStatus === "verified" ?
              <p className="text-2xl font-bold text-green-500">Email Verified Successfully</p>
              : 
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-red-500">Email Verification Failed</p>
                <p>Please Contact the Admin</p>
              </div>
            }
          </div>
          <div className="mt-4 text-primary">
            <Link href={'/auth/login'}>Go to Login Page</Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100"></div>
    </div>
  )
}

EmailVerification.getInitialProps = async({ req }) => {
  const idUrl = req?.url;
  const id = idUrl?.split("/").pop();
  let resStatus = "";

  try {
    const response = await inventorsClient.post("/auth/registration/verify-email/", { key: id })
    if (response.status === 200 || response.status === 201 ) {
      resStatus = "verified";
    }
  } catch(error) {
    const err = error as AxiosError;
    if (err.response?.status === 404) {
      resStatus = "Not verified"
    }
  }

  return {resStatus}
}


export default EmailVerification;
