import { Dispatch, SetStateAction, useState } from "react";
import { IRegistrationDetails } from "../../lib/types";

export default function useRegister(details: IRegistrationDetails):(IRegistrationDetails | Dispatch<SetStateAction<IRegistrationDetails>>)[] {
  const [userDetails, setUserDetails] = useState<IRegistrationDetails>(details);
  const [inputErrors, setInputErrors] = useState<IRegistrationDetails>({
    email: "", password1: "", password2: "", country: "", first_name: "", last_name: "", phone: "",
  });

  const checkErrors = ():IRegistrationDetails => {
    const errors = {} as IRegistrationDetails;
    if (!userDetails.email || !userDetails.email.includes('@')) errors.email = "Please enter a valid email address";
    if (!userDetails.password1 || userDetails.password1.length < 6) errors.password1 = "Password is too short";
    if (!userDetails.password2 || userDetails.password2.length < 6) errors.password2 = "Password is too short";
    if (userDetails.password1 !== userDetails.password2) {
      errors.password2 = "Password don't match"
      errors.password1 = "Password don't match"
    }
    if (!userDetails.country || !userDetails.country) errors.country = "Enter the name of your resident country";
    if (!userDetails.first_name) errors.first_name = "This field is missing";
    if (!userDetails.last_name) errors.last_name = "This field is missing";
    if (!userDetails.phone) errors.phone = "This field is missing";

    return errors;
  }

  const submit = () => {
    const errors = checkErrors();

    if (Object.values(errors).length > 0) {
      setInputErrors(errors);
      return;
    }

    console.log(userDetails);
  }

  return [userDetails, setUserDetails, inputErrors, setInputErrors];
}