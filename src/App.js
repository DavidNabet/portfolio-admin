import { useState } from "react";
import Cookies from "js-cookie";

import Nav from "./components/Nav";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./containers/Login";
import { Publish } from "./containers/Publish";
function App() {
  const [user, setUser] = useState(Cookies.get("token") || null);

  const setUserToken = (token) => {
    if (token) {
      Cookies.set("token", token);
      setUser(token);
    } else {
      Cookies.remove("token");
      setUser(null);
    }
  };

  return (
    <Router>
      <Nav userToken={user} setUserToken={setUserToken} />
      <Switch>
        <Route path="/publish">
          {user ? <Publish userToken={user} /> : <Redirect to="/" />}
        </Route>
        <Route path="/" exact>
          {user ? (
            <Redirect to="/publish" />
          ) : (
            <Login setUserToken={setUserToken} />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
