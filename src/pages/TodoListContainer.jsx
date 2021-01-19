import React, { useState } from "react";
import * as Styled from "./TodoListContainer.style";
import TodoCategory from "../components/todoCategories/TodoCategory";
import TodoDates from "../components/todoDates/TodoDates";
import TodoInputs from "../components/todoInputs/TodoInputs";
import TodoLists from "./../components/todoLists/TodoLists";
import { useSelector } from "react-redux";

function TodoList() {
  const [categoryClickTodoList, setCategoryClickTodoList] = useState([]);

  const todos = useSelector((state) => state.todoReducer);

  const filterListByCategory = (categoryName) => {
    const today = new Date();
    let splitDates = null;

    const filteredDateList = todos.filter((list) => {
      splitDates = list.dates.split("-");
      return (
        Number(splitDates[0]) === today.getFullYear() &&
        Number(splitDates[1]) === today.getMonth() + 1 &&
        Number(splitDates[2]) === today.getDate()
      );
    });
    const filteredMonthList = todos.filter((list) => {
      splitDates = list.dates.split("-");
      return (
        Number(splitDates[0]) === today.getFullYear() &&
        Number(splitDates[1]) === today.getMonth() + 1
      );
    });
    const filteredYearList = todos.filter((list) => {
      splitDates = list.dates.split("-");
      return Number(splitDates[0]) === today.getFullYear();
    });

    if ("Day" === categoryName) {
      setCategoryClickTodoList(filteredDateList);
    } else if ("Month" === categoryName) {
      setCategoryClickTodoList(filteredMonthList);
    } else if ("Year" === categoryName) {
      setCategoryClickTodoList(filteredYearList);
    }
  };

  return (
    <Styled.Container>
      <TodoCategory
        categoryClickTodoList={categoryClickTodoList}
        setCategoryClickTodoList={setCategoryClickTodoList}
        filterListByCategory={filterListByCategory}
      />
      <TodoDates />
      <TodoInputs />
      <TodoLists categoryClickTodoList={categoryClickTodoList} />
    </Styled.Container>
  );
}

export default TodoList;
