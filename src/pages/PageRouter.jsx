import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import TodoPage from "./TodoPage/TodoPage";

const PageRouter = () => {
  const [user, setUser] = useState("");

  return (
    <Router>
      <Switch>
        {!localStorage.getItem("loginToken") ? (
          <Route exact path='/'>
            <LoginPage setUser={setUser} />
          </Route>
        ) : (
          <Route exact path='/'>
            <TodoPage />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default PageRouter;
