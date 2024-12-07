import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "../errorboundry/errorboundaries.jsx";
import App from "../App.jsx";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { lightTheme, darkTheme } from "../theme/theme.js";
import { SnackbarProvider } from "notistack";

export default function Root() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const selectedTheme = theme === "light" ? "dark" : "light";
    setTheme(selectedTheme);
    localStorage.setItem(selectedTheme);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <ErrorBoundary>
          <SnackbarProvider>
            <BrowserRouter>
              <App toggleTheme={toggleTheme} theme={theme} />
            </BrowserRouter>
          </SnackbarProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
