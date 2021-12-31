import { Link } from "react-router-dom";

const Nav = ({ userToken, setUserToken }) => {
  return (
    <nav className="flex py-6 px-6 border-b border-gray-200">
      <Link to="/">
        <span>Admin</span>
      </Link>
      <div className="ml-auto">
        {userToken && (
          <>
            <Link to="/publish">
              <span className="ml-2">Publish</span>
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 ml-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setUserToken(null)}
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
