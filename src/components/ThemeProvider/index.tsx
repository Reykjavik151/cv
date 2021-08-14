import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { LIGHT_THEME } from "../../themes/themes";
import { ITheme } from "../../themes/themes.interface";
import { IThemeContext } from "./context";

export const ThemeContext = React.createContext<IThemeContext>(
  {} as IThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(LIGHT_THEME);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
