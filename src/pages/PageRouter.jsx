import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import TodoPage from "./TodoPage/TodoPage";

const PageRouter = () => {
  //리렌더링하기위한 state
  const [user, setUser] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {!sessionStorage.getItem("loginToken") ? (
            <LoginPage setUser={setUser} />
          ) : (
            <TodoPage />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default PageRouter;
