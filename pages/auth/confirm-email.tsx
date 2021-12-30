import { NextPage } from "next";
import Image from "next/image";

const ConfirmEmail:NextPage = () => {

  return (
    <main className="flex">
      <section>
        <div>
          <p>Sign In</p>
          <p>Register Here</p>
        </div>
        <div>
          
        </div>
      </section>
      <section>
        <Image src="/images/login_illustration.svg" layout="fill" alt="login image" />
      </section>
    </main>
  )

}

export default ConfirmEmail;