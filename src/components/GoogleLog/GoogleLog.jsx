// import React from "react";
// import * as Styled from "./GoogleLog.style";
// import { useDispatch } from "react-redux";
// import { getUserName } from "../../stores/reducers/Login";

// const GoogleLog = () => {
//   const dispatch = useDispatch();

//   const responseGoogle = (response) => {
//     sessionStorage.setItem("loginToken", response.accessToken);
//     dispatch(getUserName({ user: { name: response.profileObj.name, id: 1 } }));
//   };

//   return (
//     <Styled.LoginImage
//       clientId='827292492202-c10rj96v769b11biue3p531j7q8c5ari.apps.googleusercontent.com'
//       buttonText='Login'
//       onSuccess={responseGoogle}
//       onFailure={(res) => console.log(res)}
//       cookiePolicy={"single_host_origin"}
//     />
//   );
// };

// export default GoogleLog;
