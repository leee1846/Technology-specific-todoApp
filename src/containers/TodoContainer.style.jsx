import Styled from "styled-components";

export const TodoContainer = Styled.div`
  background-color:${({ theme }) => theme.todo_bg};
  margin-top:100px;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:0 50px;
`;
