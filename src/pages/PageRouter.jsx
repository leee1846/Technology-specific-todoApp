import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import TodoPage from "./TodoPage/TodoPage";

const PageRouter = () => {
  return (
    <Router>
      <Switch>
        {!localStorage.getItem("kakaoToken") ? (
          <Route exact path='/'>
            <LoginPage />
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
