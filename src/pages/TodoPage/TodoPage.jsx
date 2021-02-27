import React, { useEffect, useState } from "react";
import * as Styled from "./TodoPage.style";
import Categories from "../../components/Categories/Categories";
import IsDate from "../../components/IsDate/IsDate";
import Inputs from "../../components/Inputs/Inputs";
import TodoList from "../../components/TodoList/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../stores/reducers/TodosReducer";

const TodoPage = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryReducer);

  const todoReducer = useSelector((state) => state.todoReducer);

  useEffect(() => {
    dispatch(
      getTodos({
        currentName: null,
        thisYear: null,
        thisMonth: null,
        thisDate: null,
      })
    );
  }, []);

  return (
    <Styled.TotalContainer>
      <Categories categoryList={categoryList} todoReducer={todoReducer} />
      <Styled.TodoContainer>
        <IsDate />
        <Inputs
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
        <TodoList
          todoReducer={todoReducer}
          searchInputValue={searchInputValue}
        />
      </Styled.TodoContainer>
    </Styled.TotalContainer>
  );
};

export default TodoPage;
