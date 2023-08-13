import { defaultTheme } from '../config/theme'

type ThemeInterface = typeof defaultTheme

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}