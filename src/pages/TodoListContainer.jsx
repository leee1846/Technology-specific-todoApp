import React from "react";
import * as Styled from "./TodoListContainer.style";
import TodoCategory from "../components/todoCategories/TodoCategory";
import TodoDates from "../components/todoDates/TodoDates";
import TodoInputs from "../components/todoInputs/TodoInputs";
import TodoLists from "./../components/todoLists/TodoLists";

function TodoList() {
  return (
    <Styled.Container>
      <TodoCategory />
      <TodoDates />
      <TodoInputs />
      <TodoLists />
    </Styled.Container>
  );
}

export default TodoList;
