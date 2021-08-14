import { DARK_THEME, LIGHT_THEME } from "../../themes/themes";
import { ITheme } from "../../themes/themes.interface";

interface IThemeButton {
  id: string;
  theme: ITheme;
}

export const THEMES_BUTTONS: IThemeButton[] = [
  {
    id: "ligth-theme",
    theme: LIGHT_THEME,
  },
  {
    id: "dark-theme",
    theme: DARK_THEME,
  },
];
