import { LinearGradientProps } from 'react-native-linear-gradient';

export type ColorsPallete = {
  readonly neutral0: string;
  readonly neutral10: string;
  readonly neutral20: string;
  readonly neutral30: string;
  readonly neutral40: string;
  readonly neutral50: string;
  readonly neutral70: string;
  readonly neutral90: string;
  readonly error10: string;
  readonly error20: string;
  readonly error30: string;
  readonly error50: string;
  readonly error60: string;
  readonly error70: string;
  readonly secondary50: string;
  readonly secondary70: string;
  readonly primary30: string;
  readonly primary40: string;
  readonly primary60: string;
  readonly primary90: string;
  readonly primary95: string;
  readonly white: string;
  readonly white80: string;
  readonly white50: string;
  readonly white40: string;
  readonly white25: string;
  readonly tertiary50: string;
  readonly success: string;
  readonly gradientRed: string;
  readonly gradientPink: string;
  readonly gradientPink2: string;
  readonly gradientPink3: string;
  readonly gradientPink4: string;
  readonly gradientYellow: string;
  readonly gradientYellow2: string;
  readonly gradientYellow3: string;
  readonly gradientOrange: string;
  readonly gradientGrey: string;
  readonly avatarBorder: string;
  readonly primary: string;
  readonly primary2: string;
  readonly black10: string;
  readonly black20: string;
  readonly black30: string;
  readonly black40: string;
  readonly black20_50: string;
  readonly black20_70: string;
  readonly black70: string;
  readonly black50: string;
  readonly gray: string;
  readonly gray2: string;
  readonly darkGray: string;
  readonly nardoGray: string;
  readonly charcoalGray: string;
};

export type AppGradient = Pick<LinearGradientProps, 'colors' | 'useAngle' | 'angle' | 'locations'>;

type GradientPallete = {
  readonly one1: AppGradient;
  readonly one2: AppGradient;
  readonly one3: AppGradient;
  readonly two1: AppGradient;
  readonly two2: AppGradient;
  readonly two3: AppGradient;
  readonly three1: AppGradient;
  readonly three2: AppGradient;
  readonly three3: AppGradient;
  readonly four1: AppGradient;
  readonly four2: AppGradient;
  readonly four3: AppGradient;
  readonly five1: AppGradient;
  readonly six1: AppGradient;
  readonly blacktoGrey1: AppGradient;
  readonly blacktoGrey2: AppGradient;
  readonly dark: AppGradient;
};

export const Colors: ColorsPallete = {
  neutral0: '#000000', // default screen background
  neutral10: '#14022A',
  neutral20: '#2E1E42',
  neutral30: '#483A59',
  neutral40: '#625671',
  neutral50: '#7C7289',
  neutral70: '#B1ABB8',
  neutral90: '#E5E3E7',
  error10: '#330404',
  error20: '#660709',
  error30: '#990B0D',
  error50: '#FF1216',
  error60: '#FF4145',
  error70: '#E41919',
  secondary50: '#FD900C',
  secondary70: '#FEBC6D',
  primary30: '#951152',
  primary40: '#C6166D',
  primary60: '#F949A0',
  primary90: '#FED2E7',
  primary95: '#FEE8F3',
  white: '#FFFFFF',
  white80: '#FFFFFFCC',
  white50: '#FFFFFF80',
  white40: '#FFFFFF66',
  white25: '#FFFFFF40',
  tertiary50: '#00DDC2',
  success: '#19E46B',
  gradientPink: '#F93DF9',
  gradientPink2: '#E110EC',
  gradientPink3: '#F53BFF',
  gradientPink4: '#FF249B',
  gradientRed: '#FF0D29',
  gradientYellow: '#FFDB33',
  gradientYellow2: '#FEB701',
  gradientYellow3: '#FED601',
  gradientOrange: '#FF592D',
  gradientGrey: '#4F5050',
  gray: '#E5E3E759',
  avatarBorder: '#FFFFFF7F',
  primary: '#71548f',
  black10: '#191935',
  black20: '#33334C',
  black20_50: '#33334C80',
  black20_70: '#33334CB3',
  black30: '#4C4C62',
  black40: '#666679',
  black70: '#B3B3BC',
  black50: '#80808F',
  primary2: '#4C4C62DA',
  gray2: '#B3B3B3',
  darkGray: '#808080',
  nardoGray: '#262626',
  charcoalGray: '#999999'
};

export const Gradient: GradientPallete = {
  one1: {
    colors: [Colors.gradientYellow, Colors.gradientRed, Colors.gradientPink],
    useAngle: true,
    angle: 225
  },
  one2: {
    colors: [Colors.gradientYellow, Colors.gradientRed, Colors.gradientPink],
    useAngle: true,
    angle: 270
  },
  one3: {
    colors: [Colors.gradientYellow, Colors.gradientRed, Colors.gradientPink],
    useAngle: true,
    angle: 180
  },
  two1: {
    colors: [Colors.gradientPink, Colors.gradientRed],
    useAngle: true,
    angle: 225,
    locations: [0, 0.75]
  },
  two2: {
    colors: [Colors.gradientRed, Colors.gradientPink],
    useAngle: true,
    angle: 270,
    locations: [0.3, 1]
  },
  two3: {
    colors: [Colors.gradientRed, Colors.gradientPink],
    useAngle: true,
    angle: 180
  },
  three1: {
    colors: [Colors.gradientYellow, Colors.gradientRed],
    useAngle: true,
    angle: 225,
    locations: [0, 0.6]
  },
  three2: {
    colors: [Colors.gradientRed, Colors.gradientYellow],
    useAngle: true,
    angle: 270
  },
  three3: {
    colors: [Colors.gradientRed, Colors.gradientYellow],
    useAngle: true,
    angle: 225,
    locations: [0.35, 1]
  },
  four1: {
    colors: [Colors.gradientYellow2, Colors.gradientPink2],
    useAngle: true,
    angle: 225,
    locations: [0, 0.7]
  },
  four2: {
    colors: [Colors.gradientPink3, Colors.gradientYellow3],
    useAngle: true,
    angle: 270
  },
  four3: {
    colors: [Colors.gradientPink3, Colors.gradientYellow3],
    useAngle: true,
    angle: 180
  },
  five1: {
    colors: [Colors.gradientYellow, Colors.gradientOrange],
    useAngle: true,
    angle: 225,
    locations: [0, 0.65]
  },
  six1: {
    colors: [Colors.gradientPink4, Colors.gradientRed],
    useAngle: true,
    angle: 255,
    locations: [0, 0.75]
  },
  blacktoGrey1: {
    colors: [`${Colors.gradientGrey}00`, Colors.neutral0],
    useAngle: true,
    angle: 180,
    locations: [0.18, 1]
  },
  blacktoGrey2: {
    colors: [`${Colors.gradientGrey}00`, Colors.neutral0],
    useAngle: true,
    angle: 0,
    locations: [0.3, 1]
  },
  dark: {
    colors: ['transparent', '#000'],
    useAngle: true,
    angle: 180,
    locations: [0.5, 1]
  }
};

export const MainGradient3Params = {
  colors: ['#f5c234', '#f6582d', '#f6582d'],
  useAngle: true,
  angle: 210
};
