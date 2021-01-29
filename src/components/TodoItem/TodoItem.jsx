import React from "react";
import * as Styled from "./TodoItem.style";

const TodoItem = ({ todoItem }) => {
  return (
    <Styled.ListContainer>
      <Styled.Left>
        <Styled.Content>
          {todoItem.id}. {todoItem.content}
        </Styled.Content>
        <Styled.Date>{todoItem.dates}</Styled.Date>
      </Styled.Left>
      <Styled.More />
    </Styled.ListContainer>
  );
};

export default TodoItem;
