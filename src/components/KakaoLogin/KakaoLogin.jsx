import React from "react";
import kakaoImage from "../../images/kakaoLogin.png";

const KakaoLogin = () => {
  const tryLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile, account_email",
      success: function (response) {
        localStorage.setItem("kakaoToken", response.access_token);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  return (
    <>
      <img src={kakaoImage} alt='' onClick={tryLogin} />
    </>
  );
};

export default KakaoLogin;
