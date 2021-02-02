import Styled from "styled-components";

export const TotalContainer = Styled.div`
  background-color:${({ theme }) => theme.todo_bg};
  margin-top:100px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const TodoContainer = Styled.div`
padding:0 50px;

`
