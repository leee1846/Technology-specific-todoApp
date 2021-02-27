import React, { useState } from "react";
import Input from "./../Input/Input";
import * as Styled from "./Inputs.style.js";
import { useDispatch } from "react-redux";
import { addTodo, findTodo } from "../../stores/reducers/TodosReducer";
import useInput from "./../../hooks/useInput";

const Inputs = ({ searchInputValue, setSearchInputValue }) => {
  const dispatch = useDispatch();

  const [addInputValue, addInputValueHandeler, addInputClear] = useInput("");

  const onSearchChange = (e) => {
    setSearchInputValue(e.target.value);

    // dispatch(findTodo({ inputContent: searchInputValue }));
  };

  const onSearchClick = () => {
    dispatch(findTodo({ inputContent: searchInputValue }));

    setSearchInputValue("");
  };

  const onAddClick = (e) => {
    const newDate = new Date();
    const thisYear = newDate.getFullYear();
    const isMonth = newDate.getMonth() + 1;
    const isDate = newDate.getDate();

    const thisMonth = isMonth < 10 ? "0" + isMonth : isMonth;
    const thisDate = isDate < 10 ? "0" + isDate : isDate;

    const newList = {
      dates: `${thisYear}-${thisMonth}-${thisDate}`,
      content: addInputValue,
      done: false,
    };

    dispatch(addTodo({ newList }));

    addInputClear();
  };

  return (
    <div>
      <Styled.InputBox>
        <Input
          placeholder='리스트를 찾아보세요...'
          onChangeHandeler={onSearchChange}
          value={searchInputValue}
        />
        <Styled.Search onClick={onSearchClick} />
      </Styled.InputBox>
      <Styled.InputBox>
        <Input
          placeholder='리스트를 추가하세요...'
          onChangeHandeler={addInputValueHandeler}
          value={addInputValue}
        />
        <Styled.Add onClick={onAddClick} />
      </Styled.InputBox>
    </div>
  );
};

export default Inputs;
