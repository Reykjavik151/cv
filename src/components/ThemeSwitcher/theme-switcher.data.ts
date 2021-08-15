import { IconType } from "react-icons";
import { BiMoon } from "react-icons/bi";
import { FaSun } from "react-icons/fa";

import { DARK_THEME, LIGHT_THEME } from "../../themes/themes";
import { ITheme } from "../../themes/themes.interface";

interface IThemeButton {
  id: string;
  theme: ITheme;
  Icon: IconType;
  size: number;
}

export const THEMES_BUTTONS: IThemeButton[] = [
  {
    id: "ligth-theme",
    theme: LIGHT_THEME,
    Icon: FaSun,
    size: 40,
  },
  {
    id: "dark-theme",
    theme: DARK_THEME,
    Icon: BiMoon,
    size: 45,
  },
];

export const ACTIVE_THEME_OPACITY = 1;

export const INACTIVE_THEME_OPACITY = 0.3;
