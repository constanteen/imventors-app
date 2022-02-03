export interface ILoginDetails {
  email: string;
  password: string;
}

export interface IRegistrationDetails {
  email: string;
  first_name: string;
  last_name: string;
  password1: string;
  password2: string;
  country: string;
  phone: string;
  roles?: number;
  confirm_agreement?: boolean;
}