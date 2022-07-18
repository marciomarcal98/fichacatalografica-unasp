import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type DefaultType = typeof defaultTheme

declare module 'styled-components' {
  interface DefaultTheme extends DefaultType {}
}