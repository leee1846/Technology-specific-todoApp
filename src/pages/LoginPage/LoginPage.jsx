import React from "react";
import * as Styled from "./LoginPage.style";
import KakaoLogin from "./../../components/KakaoLogin/KakaoLogin";
// import GoogleLog from "../../components/GoogleLog/GoogleLog";
import { Redirect, Route } from "react-router-dom";

const LoginPage = ({ user, component: Component, ...props }) => {
  console.log(`user는${user}`);

  return (
    <Route
      {...props}
      render={() =>
        user ? <Redirect to='/logedin' /> : <Component user={user} />
      }
    />
  );
};

export default LoginPage;
