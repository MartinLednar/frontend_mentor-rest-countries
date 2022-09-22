import { Link } from "react-router-dom";
import "./custom-link.styles.scss";

const CustomLink = ({ children, path, theme }) => (
  <Link className={`custom-link ${theme ? "dark" : ""}`} to={path}>
    {children}
  </Link>
);

export default CustomLink;
