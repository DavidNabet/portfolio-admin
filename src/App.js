import { useState } from "react";
import Cookies from "js-cookie";

import Nav from "./components/Nav";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./containers/Login";
import { Publish } from "./containers/Publish";
function App() {
  const [user, setUser] = useState(Cookies.get("token") || null);

  const setUserToken = (token) => {
    if (token) {
      Cookies.set("token", token, {
        sameSite: "none",
        secure: true,
      });
      setUser(token);
    } else {
      Cookies.remove("token", {
        sameSite: "none",
        secure: true,
      });
      setUser(null);
    }
  };

  return (
    <Router>
      <Nav userToken={user} setUserToken={setUserToken} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            user ? (
              <Navigate to="/publish" />
            ) : (
              <Login setUserToken={setUserToken} />
            )
          }
        />
        <Route
          path="/publish"
          element={user ? <Publish userToken={user} /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
