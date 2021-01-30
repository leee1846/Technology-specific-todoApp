import React, { useEffect, useState } from "react";
import TodoItem from "./../TodoItem/TodoItem";
import * as Styled from "./TodoList.style";
import { useSelector } from "react-redux";

const TodoList = ({ todoReducer }) => {
  const [categoryClicked, setCategoryClicked] = useState(false);

  const listByCategory = useSelector((state) => state.filterListReducer);

  useEffect(() => {
    setCategoryClicked(true);
  }, [listByCategory]);

  useEffect(() => {
    setCategoryClicked(false);
  }, [todoReducer]);

  return (
    <Styled.ListContainer>
      {!categoryClicked
        ? todoReducer.map((list) => (
            <TodoItem key={list.id} todoItem={list} todoReducer={todoReducer} />
          ))
        : listByCategory.map((list) => (
            <TodoItem key={list.id} todoItem={list} todoReducer={todoReducer} />
          ))}
    </Styled.ListContainer>
  );
};

export default TodoList;
