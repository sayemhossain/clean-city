import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLinkTwo({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          backgroundColor: match ? "#1F62C7" : "#F5F5F5",
          color: match ? "#FFFFFF" : "#374156",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLinkTwo;
