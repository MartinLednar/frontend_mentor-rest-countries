import { Link } from "react-router-dom";
import "./custom-link.styles.scss";

const CustomLink = ({ children, path }) => (
  <Link className="custom-link" to={path}>
    {children}
  </Link>
);

export default CustomLink;
