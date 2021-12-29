import { useState } from "react";
import Header from "./components/Nav";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Cookies from "js-cookie";
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
      <Header userToken={user} setUserToken={setUserToken} />
      <Switch>
        <Route path="/">
          <Login setUserToken={setUserToken} />
        </Route>
        <Route path="/publish">
          {user ? <Publish userToken={user} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
