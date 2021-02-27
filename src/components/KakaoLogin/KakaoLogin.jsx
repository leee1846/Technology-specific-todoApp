import { useState } from "react";
import * as Styled from "./KakaoLogin.style";
import kakaoImage from "../../images/kakaoLogin.png";

const KakaoLogin = ({ setUser }) => {
  const tryLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile, account_email",
      success: function (response) {
        localStorage.setItem("loginToken", response.access_token);
        console.log(response);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => setUser(res.id),
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  return (
    <>
      <Styled.LoginImage src={kakaoImage} alt='' onClick={tryLogin} />
    </>
  );
};

export default KakaoLogin;
