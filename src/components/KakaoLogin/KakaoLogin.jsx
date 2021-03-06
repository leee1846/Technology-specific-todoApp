import * as Styled from "./KakaoLogin.style";
import kakaoImage from "../../images/kakaoLogin.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../stores/reducers/Login";
import { useHistory } from "react-router-dom";

const KakaoLogin = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const tryLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile, account_email",
      success: function (response) {
        sessionStorage.setItem("loginToken", response.access_token);
        const token = sessionStorage.getItem("loginToken");
        dispatch(
          getUser({
            user: token ? true : false,
          })
        );
        history.push("/logedin");
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  if (user) {
    history.push("/logedin");
  } else {
    return (
      <>
        <Styled.LoginImage src={kakaoImage} alt='' onClick={tryLogin} />
      </>
    );
  }
};

export default KakaoLogin;
