import { Platform } from 'react-native';

import { createTheme, useTheme } from '@shopify/restyle';

import { DARK_COLOR_PALETTE } from './colors';
import { PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from './fonts';
/**
 * Theme is created according material UI guidelines. Please refer:
 * https://m3.material.io/styles/color/the-color-system/color-roles#f5ef005c-0aba-4e23-9d46-ffbd386ade94
 */
const darkTheme = createTheme({
  colors: {
    primary: DARK_COLOR_PALETTE.primary[50],
    primaryDark: DARK_COLOR_PALETTE.primary[30],
    onPrimary: DARK_COLOR_PALETTE.primary[100],
    secondary: DARK_COLOR_PALETTE.secondary[50],
    secondaryOrange: DARK_COLOR_PALETTE.gradient.orange,
    onSecondary: DARK_COLOR_PALETTE.secondary[0],
    tertiary: DARK_COLOR_PALETTE.tertiary[50],
    onTertiary: DARK_COLOR_PALETTE.tertiary[100],

    primaryContainer: DARK_COLOR_PALETTE.primary[100],
    onPrimaryContainer: DARK_COLOR_PALETTE.primary[50],
    secondaryContainer: DARK_COLOR_PALETTE.secondary[100],
    onSecondaryContainer: DARK_COLOR_PALETTE.secondary[0],
    tertiaryContainer: DARK_COLOR_PALETTE.tertiary[100],
    onTertiaryContainer: DARK_COLOR_PALETTE.tertiary[50],

    error: DARK_COLOR_PALETTE.error[60],
    onError: DARK_COLOR_PALETTE.error[100],
    errorContainer: DARK_COLOR_PALETTE.error[100],
    onErrorContainer: DARK_COLOR_PALETTE.error[60],

    surface: DARK_COLOR_PALETTE.neutral[0],
    onSurface: DARK_COLOR_PALETTE.neutral[100],
    onSurfaceVariant: DARK_COLOR_PALETTE.neutral[60],
    surfaceContainerLowest: DARK_COLOR_PALETTE.neutral[4],
    surfaceContainerLow: DARK_COLOR_PALETTE.neutral[8],
    surfaceContainer: DARK_COLOR_PALETTE.neutral[12],
    surfaceContainerHigh: DARK_COLOR_PALETTE.neutral[16],
    surfaceContainerHighest: DARK_COLOR_PALETTE.neutral[20],

    outline: DARK_COLOR_PALETTE.neutral[60],
    outlineVariant: DARK_COLOR_PALETTE.neutral[30],

    orgLimelight: DARK_COLOR_PALETTE.organizations.limelight,
    onOrgLimelight: DARK_COLOR_PALETTE.neutral[100],
    scm: DARK_COLOR_PALETTE.organizations.scm,
    onScm: DARK_COLOR_PALETTE.neutral[100],
    cyclist: DARK_COLOR_PALETTE.organizations.cyclist,
    onCyclist: DARK_COLOR_PALETTE.neutral[100]
  },
  spacing: {
    zero: 0,
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40
  },
  borderRadii: {
    zero: 0,
    xs: 2,
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
    xxl: 24,
    xxxl: 32
  },
  textVariants: {
    displayLarge: {
      fontSize: 64,
      lineHeight: 78,
      fontFamily: PoppinsSemiBold,
      textTransform: 'uppercase',
      letterSpacing: 0.5
    },
    displayMedium: {
      fontSize: 56,
      lineHeight: 70,
      fontFamily: PoppinsSemiBold,
      textTransform: 'uppercase',
      letterSpacing: 0.5
    },
    displaySmall: {
      fontSize: 48,
      lineHeight: 61,
      fontFamily: PoppinsSemiBold,
      textTransform: 'uppercase',
      letterSpacing: 0.5
    },
    headlineLarge: {
      fontSize: 40,
      lineHeight: 50,
      fontFamily: PoppinsSemiBold,
      textTransform: 'uppercase'
    },
    headlineMedium: {
      fontSize: 32,
      lineHeight: 41,
      fontFamily: PoppinsSemiBold,
      textTransform: 'uppercase'
    },
    headlineSmall: {
      fontSize: 28,
      lineHeight: 36,
      fontFamily: PoppinsMedium,
      textTransform: 'uppercase'
    },
    titleLarge: {
      fontSize: 24,
      lineHeight: 32,
      fontFamily: PoppinsRegular,
      letterSpacing: 0
    },
    titleMedium: {
      fontSize: 20,
      lineHeight: 26,
      fontFamily: PoppinsRegular,
      letterSpacing: 0.15
    },
    titleSmall: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: PoppinsRegular,
      letterSpacing: 0.1
    },
    bodyLarge: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: PoppinsRegular,
      letterSpacing: 0.5
    },
    bodyMedium: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: PoppinsRegular,
      letterSpacing: 0.25
    },
    bodySmall: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: PoppinsRegular,
      letterSpacing: 0.4
    },
    defaults: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: PoppinsRegular,
      letterSpacing: 0.25
    }
  },
  gradientVariants: {
    pinkDiagonal: {
      colors: [
        DARK_COLOR_PALETTE.gradient.pink,
        DARK_COLOR_PALETTE.gradient.crimson,
        DARK_COLOR_PALETTE.gradient.red
      ],
      useAngle: true,
      angle: 15,
      locations: [0, 0.4, 1]
    },
    pinkHorizontal: {
      colors: [
        DARK_COLOR_PALETTE.gradient.pink,
        DARK_COLOR_PALETTE.gradient.crimson,
        DARK_COLOR_PALETTE.gradient.red
      ],
      useAngle: true,
      angle: 90,
      locations: [0.05, 0.41, 1]
    },
    redDiagonal: {
      colors: [
        DARK_COLOR_PALETTE.gradient.red,
        DARK_COLOR_PALETTE.gradient.orange,
        DARK_COLOR_PALETTE.gradient.yellow
      ],
      useAngle: true,
      angle: 45,
      locations: [0, 0.4, 1]
    },
    redHorizontal: {
      colors: [
        DARK_COLOR_PALETTE.gradient.red,
        DARK_COLOR_PALETTE.gradient.orange,
        DARK_COLOR_PALETTE.gradient.yellow
      ],
      useAngle: true,
      angle: 90,
      locations: [0.05, 0.41, 1]
    },
    fullDiagonal: {
      colors: [
        DARK_COLOR_PALETTE.gradient.pink,
        DARK_COLOR_PALETTE.gradient.red,
        DARK_COLOR_PALETTE.gradient.yellow
      ],
      useAngle: true,
      angle: 45,
      locations: [0.1, 0.5, 0.9]
    },
    fullHorizontal: {
      colors: [
        DARK_COLOR_PALETTE.gradient.pink,
        DARK_COLOR_PALETTE.gradient.red,
        DARK_COLOR_PALETTE.gradient.yellow
      ],
      useAngle: true,
      angle: 90,
      locations: [0.1, 0.5, 0.9]
    },
    swooshActive: {
      colors: [
        DARK_COLOR_PALETTE.gradient.pink,
        DARK_COLOR_PALETTE.gradient.red,
        DARK_COLOR_PALETTE.gradient.orange
      ],
      useAngle: true,
      angle: 90,
      locations: [0.1, 0.5, 0.9]
    },
    swooshInactive: {
      colors: [
        DARK_COLOR_PALETTE.neutral[20],
        DARK_COLOR_PALETTE.neutral[20],
        DARK_COLOR_PALETTE.neutral[20]
      ],
      useAngle: true,
      angle: 90,
      locations: [0.1, 0.5, 0.9]
    },
    dark: {
      colors: ['transparent', DARK_COLOR_PALETTE.neutral[0]],
      useAngle: true,
      angle: 180,
      locations: [0.5, 1]
    },
    darkMedium: {
      colors: ['transparent', `${DARK_COLOR_PALETTE.neutral[0]}99`],
      useAngle: true,
      angle: 180,
      locations: [0.5, 1]
    },
    darkTonal: {
      colors: [DARK_COLOR_PALETTE.neutral[0], `${DARK_COLOR_PALETTE.neutral[0]}60`],
      start: { x: 0, y: 1 },
      end: { x: 0, y: 0 }
    }
  },
  iconSizes: {
    xs: 12,
    s: 18,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48
  },
  buttonSizes: {
    s: 32,
    m: 40,
    l: 56
  },
  inputSizes: {
    m: 56
  },
  otherSizes: {
    xxxxs: 1, // border width
    xxxs: 4, // dots, stepper line,
    xxs: 8,
    xs: 16, // counter, chips
    s: 24, // checkbox
    m: 32, // label, switch
    l: 40,
    switchWidth: 52,
    boldBorder: 2,
    profileImage: 48,
    profileImageLarge: 64,
    logoImage: 96,
    cardBanner: 120,
    classUpdateCard: 400,
    baseItem: 48,
    bottomTabBarHeight: 72,
    settingMenuHeight: 72,
    imageSquare: 80,
    closeButton: 20,
    activityIconContainer: 28,
    achievementBlock: 72,
    horizontalChartHeight: 32,
    headerHeight: Platform.OS === 'ios' ? 44 : 56,
    feedHubsRowHeight: 112
  },
  opacity: {
    none: 1,
    low: 0.8,
    medium: 0.6,
    high: 0.38,
    highest: 0.12
  },
  colorAlpha: {
    100: 'FF',
    80: 'CC',
    60: '99',
    38: '61',
    24: '3D',
    12: '1F',
    0: '00'
  }
});

export const useAppTheme = () => {
  return useTheme<AppTheme>();
};

export type AppTheme = typeof darkTheme;
export { darkTheme };
