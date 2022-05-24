import { NextPage } from "next";
import { useForm } from "react-hook-form";
import UsersProfile from "../../../../src/components/General/UsersProfile";
import {  inventorsClient } from '../../../../lib/client';
const Index: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = async(data: any) => {
    console.log(data);
    const response = await inventorsClient.put('/investor-update/1/')
    console.log(response);
  }

  return (
    <UsersProfile register={register} handleSubmit={handleSubmit} submit={submit} />
  );
}

export default Index; 