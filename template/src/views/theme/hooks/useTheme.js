import { useColorScheme } from 'react-native-appearance'
import { useSelector } from 'react-redux'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import Fonts from '@/views/theme/Fonts'
import Gutters from '@/views/theme/Gutters'
import Images from '@/views/theme/Images'
import Layout from '@/views/theme/Layout'
import Common from '@/views/theme/Common'
import * as DefaultVariables from '@/views/theme/Variables'
import themes from '@/views/theme/themes'

export default function () {
  // Get the scheme device
  const colorScheme = useColorScheme()

  // Get current theme from the store
  const currentTheme = useSelector((state) => state.theme.theme || 'default')
  const isDark = useSelector((state) => state.theme.darkMode)
  const darkMode = isDark === null ? colorScheme === 'dark' : isDark
  //Select the right theme light theme ({} if not exist)
  const { Variables: themeConfigVars = {}, ...themeConfig } =
    themes[currentTheme] || {}

  const { Variables: darkThemeConfigVars = {}, ...darkThemeConfig } = darkMode
    ? themes[`${currentTheme}_dark`] || {}
    : {}

  const themeVariables = mergeVariables(
    DefaultVariables,
    themeConfigVars,
    darkThemeConfigVars,
  )
  // Build the default theme
  const baseTheme = {
    Fonts: Fonts(themeVariables),
    Gutters: Gutters(themeVariables),
    Common: Common(themeVariables),
    Images: Images(themeVariables),
    Layout: Layout(themeVariables),
    ...themeVariables,
  }

  // Merge and return the current theme
  return buildTheme(
    darkMode,
    baseTheme,
    formatTheme(themeVariables, themeConfig || {}),
    formatTheme(themeVariables, darkThemeConfig || {}),
  )
}

/**
 * Generate theme with theme variables
 *
 * @param variables
 * @param theme
 * @return {{}|{[p: string]: *}}
 */
const formatTheme = (variables, theme) => {
  return Object.entries(theme).reduce((acc, [name, generate]) => {
    return {
      ...acc,
      [name]: generate(variables),
    }
  }, {})
}

/**
 * Merge all variables for building the theme
 * baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param variables : {MetricsSizes?: {small: number, large: number, tiny: number, regular: number}, NavigationColors?: {primary: string}, FontSize?: {small: number, large: number, regular: number}, Colors?: {white: string, success: string, text: string, error: string, transparent: string, primary: string}} variables from @theme/Variables
 * @param themeConfig : currentTheme form @theme/themes
 * @param darkThemeConfig : currentDarkTheme from @theme/themes
 * @return {{}|{[p: string]: *}}
 */
const mergeVariables = (variables, themeConfig, darkThemeConfig) =>
  Object.entries(variables).reduce((acc, [group, vars]) => {
    return {
      ...acc,
      [group]: {
        ...vars,
        ...(themeConfig[group] || {}),
        ...(darkThemeConfig[group] || {}),
      },
    }
  }, {})

/**
 * Provide all the theme exposed with useTheme()
 *
 * @param darkMode : boolean
 * @param baseTheme
 * @param themeConfig
 * @param darkThemeConfig
 * @return {{[p: string]: *, NavigationTheme: {colors}, darkMode: *}}
 */
const buildTheme = (darkMode, baseTheme, themeConfig, darkThemeConfig) => {
  return {
    ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
    darkMode,
    NavigationTheme: mergeNavigationTheme(
      darkMode ? DarkTheme : DefaultTheme,
      baseTheme.NavigationColors,
    ),
  }
}

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param baseTheme
 * @param theme
 * @param darkTheme
 * @return {{[p: string]: *}}
 */
const mergeTheme = (baseTheme, theme, darkTheme) => ({
  ...Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        ...(theme[key] || {}),
        ...(darkTheme[key] || {}),
      },
    }),
    {},
  ),
})

/**
 * Merge the React navigation theme
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
})
