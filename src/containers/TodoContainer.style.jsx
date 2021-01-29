import Styled from "styled-components";

export const TodoContainer = Styled.div`
  width:100px;
  height:100px;
  background-color:${({ theme }) => theme.todo_bg};
  margin-top:100px;
`;
