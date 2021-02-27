import React from "react";
import * as Styled from "./LoginPage.style";
import KakaoLogin from "./../../components/KakaoLogin/KakaoLogin";

const LoginPage = ({ setUser }) => {
  return (
    <Styled.LoginContainer>
      <KakaoLogin setUser={setUser} />
    </Styled.LoginContainer>
  );
};

export default LoginPage;
