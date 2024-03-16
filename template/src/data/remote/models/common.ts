export type CountryState = {
  name: string;
  code: string;
};

export type City = {
  name: string;
};

export type Address = {
  country?: string;
  state?: string;
  city?: string;
};

export type Pagination = {
  limit: number;
  offset: number;
};

export type BaseUser = {
  id: string;
  firstName: string;
  lastName: string;
};

export type AppHttpErrorMeta = 'refresh-token' | 'client' | 'server' | 'unknown';

export type AppHttpError = {
  message: string;
  code: number;
  meta?: AppHttpErrorMeta;
};

export type Location = {
  lat: number;
  lng: number;
};

export type SocialLinks = {
  discord?: string;
  telegram?: string;
  whatsapp?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tiktok?: string;
  email?: string;
  website?: string;
};

export type Metric = {
  value: string | number;
  unit?: string;
};

export type TimePeriod = 'week' | 'month' | 'year';
