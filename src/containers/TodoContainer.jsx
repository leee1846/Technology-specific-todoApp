import React, { useState } from "react";
import * as Styled from "./TodoContainer.style";
import Categories from "./../components/Categories/Categories";
import Date from "./../components/Date/Date";
import Inputs from "../components/Inputs/Inputs";
import TodoList from "./../components/TodoList/TodoList";
import { useSelector } from "react-redux";

const TodoContainer = () => {
  const categoryList = useSelector((state) => state.categoryReducer);

  return (
    <Styled.TodoContainer>
      <Categories categoryList={categoryList} />
      <Date />
      <Inputs />
      <TodoList />
    </Styled.TodoContainer>
  );
};

export default TodoContainer;
