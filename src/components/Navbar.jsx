import { useState } from "react";
import "../globals.css";
import { Sun, Moon } from "lucide-react";
import NavLinks from "../zrouter/navlinks";
import PagesData from "../zrouter/pageData";
import PropTypes from "prop-types";
import {
  AppBar,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Grid2,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar({ toggleTheme, theme }) {
  return (
    <AppBar
      position="static"
      color="primary"
      className="shadow-lg opacity-80 bg-neutral-800 dark:bg-neutral-800"
    >
      <Toolbar className="dark:bg-neutral-800">
        <Typography variant="h6" className="flex-grow text-primorange">
          Zach Palmer
        </Typography>

        <Grid2 container display="flex" direction="row" spacing={2}>
          {PagesData.map(({ title, path, external }) =>
            external ? (
              <Grid2 item key={title}>
                <MenuItem
                  className="p-0"
                  component="a"
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </MenuItem>
              </Grid2>
            ) : (
              <Grid2 item key={title}>
                <Typography
                  component={NavLink}
                  to={`/${path}`}
                  style={({ isActive }) => ({
                    color: isActive ? "#f97316" : "inherit",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  {title}
                </Typography>
              </Grid2>
            ),
          )}
        </Grid2>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
