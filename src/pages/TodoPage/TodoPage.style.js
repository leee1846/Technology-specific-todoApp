import Styled from "styled-components";

export const TotalContainer = Styled.div`
  background-color:${({ theme }) => theme.todo_bg};
  margin-top:100px;
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
`;

export const TodoContainer = Styled.div`
  padding:0 50px;
`;

export const UserContainer = Styled.div`
  position:absolute;
  top:-50px;
  font-size:18px;
  color:${({ theme }) => theme.input_bg}
`;
