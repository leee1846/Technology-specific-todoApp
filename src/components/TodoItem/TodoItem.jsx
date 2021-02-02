import React, { useState } from "react";
import * as Styled from "./TodoItem.style";
import MoreBox from "./../MoreBox/MoreBox";

const TodoItem = ({ todoItem }) => {
  return (
    <Styled.ListContainer>
      <Styled.Left done={todoItem.done}>
        <Styled.Content>
          {todoItem.id}. {todoItem.content}
        </Styled.Content>
        <Styled.Date>{todoItem.dates}</Styled.Date>
      </Styled.Left>
      <Styled.More />
      <MoreBox todoItem={todoItem} />
    </Styled.ListContainer>
  );
};

export default TodoItem;
