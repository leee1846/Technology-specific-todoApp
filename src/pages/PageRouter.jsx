import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import TodoPage from "./TodoPage/TodoPage";

const PageRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {!sessionStorage.getItem("loginToken") ? <LoginPage /> : <TodoPage />}
        </Route>
      </Switch>
    </Router>
  );
};

export default PageRouter;
