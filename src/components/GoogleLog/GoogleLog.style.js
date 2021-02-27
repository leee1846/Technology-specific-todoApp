import Styled from "styled-components";
import { GoogleLogin } from "react-google-login";

export const LoginImage = Styled(GoogleLogin)`
  transition:.1s;
  cursor:pointer;
  margin-top:15px;

  &:hover {
    box-shadow:2px 2px 5px dodgerblue;
  }
`;
