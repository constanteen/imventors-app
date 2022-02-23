import { NextPage } from "next";
import { useForm } from "react-hook-form";
import UsersProfile from "../../../../src/components/General/UsersProfile";

const Index: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data: any) => {
    console.log(data);
  }

  return (
    <UsersProfile register={register} handleSubmit={handleSubmit} submit={submit} />
  );
}

export default Index; 