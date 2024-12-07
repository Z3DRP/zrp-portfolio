import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import Root from "./components/root";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
