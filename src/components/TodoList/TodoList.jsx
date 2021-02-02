import React from "react";
import TodoItem from "./../TodoItem/TodoItem";
import * as Styled from "./TodoList.style";

const TodoList = ({ todoReducer }) => {
  return (
    <Styled.ListContainer>
      {todoReducer.map((list) => (
        <TodoItem key={list.id} todoItem={list} />
      ))}
    </Styled.ListContainer>
  );
};

export default TodoList;
