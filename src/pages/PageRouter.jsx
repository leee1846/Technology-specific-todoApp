import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import TodoPage from "./TodoPage/TodoPage";
import { useSelector } from "react-redux";

const PageRouter = () => {
  const userName = useSelector((state) => state.loginReducer.name);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {!sessionStorage.getItem("loginToken") ? (
            <LoginPage />
          ) : (
            <TodoPage userName={userName} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default PageRouter;
