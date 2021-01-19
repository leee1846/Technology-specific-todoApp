import React, { useState } from "react";
import * as Styled from "./TodoListContainer.style";
import TodoCategory from "../components/todoCategories/TodoCategory";
import TodoDates from "../components/todoDates/TodoDates";
import TodoInputs from "../components/todoInputs/TodoInputs";
import TodoLists from "./../components/todoLists/TodoLists";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todoReducer);
  const [categoryClickTodoList, setCategoryClickTodoList] = useState(todos);

  return (
    <Styled.Container>
      <TodoCategory
        setCategoryClickTodoList={setCategoryClickTodoList}
        todos={todos}
      />
      <TodoDates />
      <TodoInputs
        setCategoryClickTodoList={setCategoryClickTodoList}
        categoryClickTodoList={categoryClickTodoList}
        todos={todos}
      />
      <TodoLists
        categoryClickTodoList={categoryClickTodoList}
        setCategoryClickTodoList={setCategoryClickTodoList}
        todos={todos}
      />
    </Styled.Container>
  );
}

export default TodoList;
