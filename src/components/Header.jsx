import PropTypes from "prop-types";
import "../globals.css";
import Navbar from "./Navbar";

function Header({ toggleTheme, theme }) {
  return <Navbar toggleTheme={toggleTheme} theme={theme} />;
}

Header.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;

