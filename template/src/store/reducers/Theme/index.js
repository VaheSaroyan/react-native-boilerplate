import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import DefaultTheme from './DefaultTheme'
import ChangeTheme from '@/store/reducers/Theme/ChangeTheme'

export default buildSlice('theme', [DefaultTheme, ChangeTheme], {
  theme: null,
  darkMode: null,
}).reducer
