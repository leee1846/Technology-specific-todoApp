import React, { useEffect, useState } from "react";
import * as Styled from "./TodoPage.style.js";
import Categories from "../../components/Categories/Categories";
import IsDate from "../../components/IsDate/IsDate";
import Inputs from "../../components/Inputs/Inputs";
import TodoList from "../../components/TodoList/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../stores/reducers/TodosReducer";
import { getUserName } from "../../stores/reducers/Login.js";
import { useGoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

const TodoPage = () => {
  const history = useHistory();
  const [searchInputValue, setSearchInputValue] = useState("");

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryReducer);
  const todoReducer = useSelector((state) => state.todoReducer);
  const user = useSelector((state) => state.loginReducer);

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

  if (!user) {
    history.push("/");
  } else {
    return (
      <Styled.TotalContainer>
        <Styled.UserContainer>
          <p>안녕하세요 님</p>
        </Styled.UserContainer>
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
  }
};

export default TodoPage;
