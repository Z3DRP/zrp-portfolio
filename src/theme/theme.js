import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#16423c",
    },
    secondary: {
      main: "#f97316",
      light: "#C05621",
    },
    background: {
      default: "#f5f5f5",
      paper: "#16423c",
      header: "#262626",
    },
    text: {
      primary: "#e9efec",
      secondary: "#767f7d",
    },
    divider: "#e9efec",
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#16423c",
    },
    secondary: {
      main: "#f97316",
      light: "#C05621",
    },
    background: {
      default: "#f5f5f5",
      paper: "#16423c",
      header: "#262626",
    },
    text: {
      primary: "#e9efec",
      secondary: "#767f7d",
    },
    divider: "#e9efec",
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
});
