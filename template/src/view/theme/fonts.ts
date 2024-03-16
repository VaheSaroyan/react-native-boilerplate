import { Platform } from 'react-native';

type SupportedFont =
  | 'PoppinsRegular'
  | 'PoppinsMedium'
  | 'PoppinsSemiBold'
  | 'PoppinsBold'
  | 'PoppinsBlack'
  | 'Poppins-Regular'
  | 'Poppins-Medium'
  | 'Poppins-SemiBold'
  | 'Poppins-Bold'
  | 'Poppins-Black';

export const PoppinsRegular: SupportedFont =
  Platform.OS === 'ios' ? 'Poppins-Regular' : 'PoppinsRegular'; // 400
export const PoppinsMedium: SupportedFont =
  Platform.OS === 'ios' ? 'Poppins-Medium' : 'PoppinsMedium'; // 500
export const PoppinsSemiBold: SupportedFont =
  Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'PoppinsSemiBold'; // 600
const PoppinsBold: SupportedFont = Platform.OS === 'ios' ? 'Poppins-Bold' : 'PoppinsBold'; // 700
const PoppinsBlack: SupportedFont = Platform.OS === 'ios' ? 'Poppins-Black' : 'PoppinsBlack'; // 900

export const PoppinsSemiBoldFile = require('~/assets/fonts/PoppinsSemiBold.ttf');

const AppTextFont = {
  PoppinsRegular,
  PoppinsMedium,
  PoppinsSemiBold,
  PoppinsBold,
  PoppinsBlack
};

export type AppFont = keyof typeof AppTextFont;
