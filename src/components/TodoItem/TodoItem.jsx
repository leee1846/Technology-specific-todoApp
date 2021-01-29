import React from "react";
import * as Styled from "./TodoItem.style";
import MoreBox from "./../MoreBox/MoreBox";

const TodoItem = ({ todoItem, todoReducer }) => {
  const onMoreClick = () => {};

  return (
    <Styled.ListContainer>
      <Styled.Left>
        <Styled.Content>
          {todoItem.id}. {todoItem.content}
        </Styled.Content>
        <Styled.Date>{todoItem.dates}</Styled.Date>
      </Styled.Left>
      <Styled.More onClick={onMoreClick} />
      <MoreBox todoItem={todoItem} />
    </Styled.ListContainer>
  );
};

export default TodoItem;
