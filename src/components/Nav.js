import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex py-6 px-6 border-b border-gray-200">
      <Link to="/">
        <span>Login</span>
      </Link>
      <Link to="/publish">
        <span className="ml-2">Publish</span>
      </Link>
    </nav>
  );
};

export default Nav;
