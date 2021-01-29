import React, { useEffect } from "react";
import TodoItem from "./../TodoItem/TodoItem";
import * as Styled from "./TodoList.style";
import { useSelector } from "react-redux";

const TodoList = ({ todoReducer }) => {
  const listByCategory = useSelector((state) => state.filterListReducer);

  return (
    <Styled.ListContainer>
      {todoReducer.map((list) => (
        <TodoItem key={list.id} todoItem={list} todoReducer={todoReducer} />
      ))}
    </Styled.ListContainer>
  );
};

export default TodoList;
