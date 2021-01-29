import Styled from "styled-components";

export const Input = Styled.input`
  height:30px;
  background-color:${({ theme }) => theme.input_bg};
  flex:1;
  border:none;
  outline:none;
  padding:5px 12px;
  border-radius:5px;
  font-size:12px;
  color:${({ theme }) => theme.white_1};
`;
