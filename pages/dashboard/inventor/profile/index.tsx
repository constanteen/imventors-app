import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { inventorsClient } from "../../../../lib/client";
import UsersProfile from "../../../../src/components/General/UsersProfile";

const Index: React.FC<{}> = () => {
  const { register, handleSubmit } = useForm();

  const submit = async(data: any) => {
    console.log(data);
 
  }

  return (
    <UsersProfile register={register} handleSubmit={handleSubmit} submit={submit} />
  );
}

export default Index; 

