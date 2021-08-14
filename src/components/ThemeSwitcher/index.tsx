import React, { useCallback, useContext } from "react";
import map from "lodash/map";

import { THEMES_BUTTONS } from "./data";
import { Container, ThemeButton } from "./theme-switcher.styles";
import { ITheme } from "../../themes/themes.interface";
import { ThemeContext } from "../ThemeProvider";

export const ThemeSwitcher: React.FC = () => {
  const { setTheme } = useContext(ThemeContext);

  const getOnThemeButtonPress = useCallback(
    (theme: ITheme) => () => setTheme(theme),
    [setTheme]
  );

  return (
    <Container>
      {map(THEMES_BUTTONS, (themeButton) => (
        <ThemeButton
          key={`theme-button-${themeButton.id}`}
          onClick={getOnThemeButtonPress(themeButton.theme)}
        />
      ))}
    </Container>
  );
};
