import React from "react";
import * as Styled from "./LoginPage.style";
import KakaoLogin from "./../../components/KakaoLogin/KakaoLogin";
import GoogleLog from "../../components/GoogleLog/GoogleLog";

const LoginPage = ({ setUser }) => {
  return (
    <Styled.LoginContainer>
      <KakaoLogin setUser={setUser} />
      <GoogleLog setUser={setUser} />
    </Styled.LoginContainer>
  );
};

export default LoginPage;
