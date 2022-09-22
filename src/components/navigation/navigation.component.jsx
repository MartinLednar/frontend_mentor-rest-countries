import { Moon, Sun } from "react-feather";
import { Fragment, useContext } from "react";
import { ThemeContext } from "../../contexts/theme/theme.context";
import "./navigation.styles.scss";

const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <nav className={theme ? "dark" : ""}>
      <h1>Where in the world?</h1>
      <button onClick={handleClick}>
        {theme ? (
          <Fragment>
            <Sun /> Light Mode
          </Fragment>
        ) : (
          <Fragment>
            <Moon /> Dark Mode
          </Fragment>
        )}
      </button>
    </nav>
  );
};

export default Navigation;
