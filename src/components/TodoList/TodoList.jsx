import React from "react";
import TodoItem from "./../TodoItem/TodoItem";
import * as Styled from "./TodoList.style";

const TodoList = ({ todoReducer }) => {
  return (
    <Styled.ListContainer>
      {todoReducer.map((list) => (
        <TodoItem key={list.id} todoItem={list} todoReducer={todoReducer} />
      ))}
    </Styled.ListContainer>
  );
};

export default TodoList;
