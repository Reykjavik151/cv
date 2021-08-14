import { ITheme } from "../../themes/themes.interface";

export interface IThemeContext {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}
