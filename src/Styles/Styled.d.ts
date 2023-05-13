import "styled-components"
import { Theme } from "./Theme"

type MyDefaultTheme = typeof Theme
declare module "styled-components" {
    interface DefaultTheme extends MyDefaultTheme{}
} 