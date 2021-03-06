import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import TodoPage from "./TodoPage/TodoPage";
import { useSelector } from "react-redux";
import KakaoLogin from "./../components/KakaoLogin/KakaoLogin";

const PageRouter = () => {
  const user = useSelector((state) => state.loginReducer);

  return (
    <Router>
      <Switch>
        <LoginPage exact path='/' component={KakaoLogin} user={user} />
        <Route path='/logedin' component={TodoPage} />
      </Switch>
    </Router>
  );
};

export default PageRouter;
