import React from "react";

import { ThemeProvider } from "./components";
import { MainPage } from "./pages";

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
};
