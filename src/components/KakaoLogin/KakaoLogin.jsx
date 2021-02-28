import * as Styled from "./KakaoLogin.style";
import kakaoImage from "../../images/kakaoLogin.png";
import { useDispatch } from "react-redux";
import { getUserName } from "../../stores/reducers/Login";

const KakaoLogin = () => {
  const dispatch = useDispatch();

  const tryLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile, account_email",
      success: function (response) {
        sessionStorage.setItem("loginToken", response.access_token);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) =>
            dispatch(
              getUserName({ user: { name: res.properties.nickname, id: 1 } })
            ),
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
