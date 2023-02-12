import React, { FC, ReactNode } from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { setupTheme } from "~/core/theme";

interface PropTypes {
  children: ReactNode;
}

const Providers: FC<PropTypes> = ({ children }) => {
  const theme = setupTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export { Providers };
