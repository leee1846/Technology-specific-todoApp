import React, { useEffect } from "react";
import * as Styled from "./TodoContainer.style";
import Categories from "./../components/Categories/Categories";
import Date from "./../components/Date/Date";
import Inputs from "../components/Inputs/Inputs";
import TodoList from "./../components/TodoList/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./../stores/reducers/TodosReducer";

const TodoContainer = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryReducer);

  const todoReducer = useSelector((state) => state.todoReducer);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <Styled.TodoContainer>
      <Categories categoryList={categoryList} todoReducer={todoReducer} />
      <Date />
      <Inputs />
      <TodoList todoReducer={todoReducer} />
    </Styled.TodoContainer>
  );
};

export default TodoContainer;
