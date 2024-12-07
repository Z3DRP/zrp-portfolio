import Header from "./components/Header";
import Router from "./zrouter/router";
import "./globals.css";
import PropTypes from "prop-types";

function App({ toggleTheme, theme }) {
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="opacity-80">
        <Router />
      </main>
    </>
  );
}

App.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default App;
