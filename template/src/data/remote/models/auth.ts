import { Location } from './common';

export type SignInParams = {
  phone: string;
  password: string;
  location?: Location;
};

export type SignInResponse = {
  accessToken: string;
  refreshToken: string;
};
