import { IRegistrationDetails } from "../lib/types";

export const checkErrors = (userDetails: IRegistrationDetails):IRegistrationDetails => {
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