import { Link as RouterLink } from "react-router-dom";
import "./Link.css";

const Link = ({ children, ...rest }) => {
  return (
    <RouterLink
      className="link"
      style={{ color: "green", padding: 16 }}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
