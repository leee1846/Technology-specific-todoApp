import React, { useEffect, useState } from "react";
import TodoItem from "./../TodoItem/TodoItem";
import * as Styled from "./TodoList.style";
import { useSelector, useDispatch } from "react-redux";
import { categoryAll } from "../../stores/reducers/CategoryReducer";

const TodoList = ({ todoReducer }) => {
  const dispatch = useDispatch();

  return (
    <Styled.ListContainer>
      {todoReducer.map((list) => (
        <TodoItem key={list.id} todoItem={list} todoReducer={todoReducer} />
      ))}
    </Styled.ListContainer>
  );
};

export default TodoList;
