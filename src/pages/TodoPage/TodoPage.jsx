import React, { useEffect, useState } from "react";
import * as Styled from "./TodoPage.style.js";
import Categories from "../../components/Categories/Categories";
import IsDate from "../../components/IsDate/IsDate";
import Inputs from "../../components/Inputs/Inputs";
import TodoList from "../../components/TodoList/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../stores/reducers/TodosReducer";
import { getUserName } from "../../stores/reducers/Login.js";

const TodoPage = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryReducer);

  const todoReducer = useSelector((state) => state.todoReducer);

  const userName = useSelector((state) => state.loginReducer.name);

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

  useEffect(() => {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: (res) =>
        dispatch(
          getUserName({ user: { name: res.properties.nickname, id: 1 } })
        ),
    });
  }, []);

  return (
    <Styled.TotalContainer>
      <div>안녕하세요{userName}님</div>
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
