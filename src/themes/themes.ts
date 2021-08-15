import { COLORS } from "./colors";
import { ITheme } from "./themes.interface";

export const LIGHT_THEME: ITheme = {
  PRIMARY: COLORS.CONCRETE,
  PRIMARY_TEXT: COLORS.CONCRETE,
  SECONDARY: COLORS.ALMOST_BLACK,
  SECONDARY_TEXT: COLORS.ALMOST_BLACK,
};

export const DARK_THEME: ITheme = {
  PRIMARY: COLORS.ALMOST_BLACK,
  PRIMARY_TEXT: COLORS.ALMOST_BLACK,
  SECONDARY: COLORS.CONCRETE,
  SECONDARY_TEXT: COLORS.CONCRETE,
};
