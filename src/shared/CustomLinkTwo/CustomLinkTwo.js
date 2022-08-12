import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLinkTwo({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          backgroundColor: match ? "#B10F3C" : "#F5F5F5",
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
