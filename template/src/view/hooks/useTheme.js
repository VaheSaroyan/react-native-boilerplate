import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import Common from '~/view/theme/Common';
import Fonts from '~/view/theme/Fonts';
import Gutters from '~/view/theme/Gutters';
import Images from '~/view/theme/Images';
import Layout from '~/view/theme/Layout';
import themes from '~/view/theme/themes';
import * as DefaultVariables from '~/view/theme/Variables';

export default function () {
  // Get the scheme device
  const colorScheme = useColorScheme();

  // Get current theme from the store
  const currentTheme = 'default';
  const isDark = false;
  const darkMode = isDark === null ? colorScheme === 'dark' : isDark;
  //Select the right theme light theme ({} if not exist)
  const { Variables: themeConfigVars = {}, ...themeConfig } = themes[currentTheme] || {};

  const { Variables: darkThemeConfigVars = {}, ...darkThemeConfig } = darkMode
    ? themes[`${currentTheme}_dark`] || {}
    : {};

  const themeVariables = mergeVariables(DefaultVariables, themeConfigVars, darkThemeConfigVars);

  // Build the default theme
  const baseTheme = {
    Fonts: Fonts(themeVariables),
    Gutters: Gutters(),
    Images: Images(),
    Layout: Layout(),
    Common: Common({
      ...themeVariables,
      Layout: Layout(),
      Gutters: Gutters(),
      Fonts: Fonts(themeVariables),
      Images: Images(),
    }),
    ...themeVariables,
  };

  // Merge and return the current Theme
  return buildTheme(
    darkMode,
    baseTheme,
    formatTheme(themeVariables, themeConfig || {}),
    formatTheme(themeVariables, darkThemeConfig || {}),
  );
}

/**
 * Generate Theme with theme variables
 *
 * @param variables
 * @param theme
 * @return {{}|{[p: string]: *}}
 */
const formatTheme = (variables, theme) =>
  Object.entries(theme).reduce(
    (acc, [name, generate]) => ({
      ...acc,
      [name]: generate(variables),
    }),
    {},
  );

/**
 * Merge all variables for building the theme
 * baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param variables : {MetricsSizes?: {small: number, large: number, tiny: number, regular: number}, NavigationColors?: {primary: string}, FontSize?: {small: number, large: number, regular: number}, Colors?: {white: string, success: string, text: string, error: string, transparent: string, primary: string}} variables from @Theme/Variables
 * @param themeConfig : currentTheme form @Theme/themes
 * @param darkThemeConfig : currentDarkTheme from @Theme/themes
 * @return {{}|{[p: string]: *}}
 */
const mergeVariables = (variables, themeConfig, darkThemeConfig) =>
  Object.entries(variables).reduce(
    (acc, [group, vars]) => ({
      ...acc,
      [group]: {
        ...vars,
        ...(themeConfig[group] || {}),
        ...(darkThemeConfig[group] || {}),
      },
    }),
    {},
  );

/**
 * Provide all the theme exposed with useTheme()
 *
 * @param darkMode : boolean
 * @param baseTheme
 * @param themeConfig
 * @param darkThemeConfig
 * @return {{[p: string]: *, NavigationTheme: {colors}, darkMode: *}}
 */
const buildTheme = (darkMode, baseTheme, themeConfig, darkThemeConfig) => ({
  ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
  darkMode,
  NavigationTheme: mergeNavigationTheme(
    darkMode ? DarkTheme : DefaultTheme,
    baseTheme.NavigationColors,
  ),
});

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param baseTheme
 * @param theme
 * @param darkTheme
 * @return {{[p: string]: *}}
 */
const mergeTheme = (baseTheme, theme, darkTheme) =>
  Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        ...(theme[key] || {}),
        ...(darkTheme[key] || {}),
      },
    }),
    {},
  );
/**
 * Merge the React Navigation Theme
 *
 * @param reactNavigationTheme
 * @param overrideColors
 * @return {{colors}}
 */
const mergeNavigationTheme = (reactNavigationTheme, overrideColors) => ({
  ...reactNavigationTheme,
  colors: {
    ...reactNavigationTheme.colors,
    ...overrideColors,
  },
});
