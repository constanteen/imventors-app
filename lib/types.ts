export interface ILoginDetails {
  username: string;
  password: string;
}

export interface IRegistrationDetails {
  email_address: string;
  first_name: string;
  last_name: string;
  password: string;
  password2: string;
  country: string;
  phone: string;
  roles?: string;
  username: string;
  confirm_agreement?: boolean;
}

export interface LoggedInUser {
  access_token: string;
  refresh_token: string;
  user: {
    pk: number;
    email: string;
    first_name: string;
    last_name: String;
  }
}

export interface IUserProfile {
  first_name: string;
  last_name: string;
  phone: string;
  country: string;
  state: string;
  company_email: string;
  company_address: string;
  head_office: string;
  hobbies: string;
  website_url: string;
  facebook_business: string;
  linkedin: string;
}

export type InventionDetail = {
	id:number;
	published_date:string,
	description:string,
	invention_name:string,
	image:string,
  image1:string,
  image2:string,
  image3:string,
  image4:string,
  image5:string,
	tag:string,
	industry:string,
}