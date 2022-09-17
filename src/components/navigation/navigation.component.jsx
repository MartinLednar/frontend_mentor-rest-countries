import { Moon, Sun } from "react-feather";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <nav>
      <h1>Where in the world?</h1>
      <button>
        <Moon /> Dark Mode
      </button>
    </nav>
  );
};

export default Navigation;
