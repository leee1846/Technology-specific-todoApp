import React from "react";
import * as Styled from "./LoginPage.style";
import KakaoLogin from "./../../components/KakaoLogin/KakaoLogin";
import GoogleLog from "../../components/GoogleLog/GoogleLog";

const LoginPage = () => {
  return (
    <Styled.LoginContainer>
      <KakaoLogin />
      <GoogleLog />
    </Styled.LoginContainer>
  );
};

export default LoginPage;
