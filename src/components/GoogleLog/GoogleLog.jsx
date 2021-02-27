import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLog = ({ setUser }) => {
  const responseGoogle = (response) => {
    sessionStorage.setItem("loginToken", response.accessToken);
    setUser(response.Fs.sd);
  };

  return (
    <GoogleLogin
      clientId='827292492202-c10rj96v769b11biue3p531j7q8c5ari.apps.googleusercontent.com'
      buttonText='Login'
      onSuccess={responseGoogle}
      onFailure={(res) => console.log(res)}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLog;
