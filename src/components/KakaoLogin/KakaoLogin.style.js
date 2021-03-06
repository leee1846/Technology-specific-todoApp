import Styled from "styled-components";

export const LoginImage = Styled.img`
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  transition:.1s;
  cursor:pointer;

  &:hover {
    box-shadow:5px 5px 5px rgba(9, 119, 230, 0.801);
  }
`;
