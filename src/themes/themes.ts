import { COLORS } from "./colors";
import { ITheme } from "./themes.interface";

export const LIGHT_THEME: ITheme = {
  PRIMARY: COLORS.SCANDAL,
  PRIMARY_ADDITIONAL: COLORS.JUNGLE_GREEN,
  PRIMARY_TEXT: COLORS.JUNGLE_GREEN,
  SECONDARY: COLORS.ALMOST_BLACK,
  SECONDARY_ADDITIONAL: COLORS.GRAY,
  SECONDARY_TEXT: COLORS.SCANDAL,
};

// TODO: setup colors
export const DARK_THEME: ITheme = {
  PRIMARY: COLORS.ALMOST_BLACK,
  PRIMARY_ADDITIONAL: COLORS.ALMOST_BLACK,
  PRIMARY_TEXT: COLORS.CAPE_HONEY,
  SECONDARY: COLORS.CAPE_HONEY,
  SECONDARY_ADDITIONAL: COLORS.CAPE_HONEY,
  SECONDARY_TEXT: COLORS.MELROSE,
};
