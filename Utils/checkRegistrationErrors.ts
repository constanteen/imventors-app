import { IRegistrationDetails } from "../lib/types";

export const checkErrors = (userDetails: IRegistrationDetails):IRegistrationDetails => {
  const errors = {} as IRegistrationDetails;
  if (!userDetails.iv_email || !userDetails.iv_email.includes('@')) errors.iv_email = "Please enter a valid email address";
  if (!userDetails.iv_password || userDetails.iv_password.length < 6) errors.iv_password = "Password is too short";
  // if (!userDetails.password2 || userDetails.password2.length < 6) errors.password2 = "Password is too short";
  // if (userDetails.password1 !== userDetails.password2) {
  //   errors.password2 = "Password don't match"
  //   errors.password1 = "Password don't match"
  // }
  // if (!userDetails.country || !userDetails.country) errors.country = "Enter the name of your resident country";
  if (!userDetails.iv_firstname) errors.iv_firstname = "This field is missing";
  if (!userDetails.iv_lastname) errors.iv_lastname = "This field is missing";
  if (!userDetails.iv_phone) errors.iv_phone = "This field is missing";

  return errors;
}