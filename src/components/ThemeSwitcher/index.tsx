import React, { useCallback, useContext } from "react";
import map from "lodash/map";

import {
  ACTIVE_THEME_OPACITY,
  INACTIVE_THEME_OPACITY,
  THEMES_BUTTONS,
} from "./data";
import { Container } from "./theme-switcher.styles";
import { ITheme } from "../../themes/themes.interface";
import { ThemeContext } from "../ThemeProvider";

export const ThemeSwitcher: React.FC = () => {
  const { theme: globalTheme, setTheme } = useContext(ThemeContext);

  const getOnThemeButtonPress = useCallback(
    (theme: ITheme) => () => setTheme(theme),
    [setTheme]
  );

  return (
    <Container>
      {map(THEMES_BUTTONS, ({ id, theme, Icon, size }) => (
        <Icon
          key={`theme-button-${id}`}
          onClick={getOnThemeButtonPress(theme)}
          size={size}
          opacity={
            globalTheme === theme
              ? ACTIVE_THEME_OPACITY
              : INACTIVE_THEME_OPACITY
          }
          color={globalTheme.PRIMARY_TEXT}
        />
      ))}
    </Container>
  );
};
