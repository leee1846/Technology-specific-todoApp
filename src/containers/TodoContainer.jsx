import React from "react";
import * as Styled from "./TodoContainer.style";
import Categories from "./../components/Categories/Categories";
import Date from "./../components/Date/Date";
import Inputs from "../components/Inputs/Inputs";
import TodoList from "./../components/TodoList/TodoList";

const TodoContainer = () => {
  return (
    <Styled.TodoContainer>
      <Categories />
      <Date />
      <Inputs />
      <TodoList />
    </Styled.TodoContainer>
  );
};

export default TodoContainer;
