import React, { useState } from "react";
import Input from "./../Input/Input";
import * as Styled from "./Inputs.style";
import { useDispatch } from "react-redux";
import { addTodo, findTodo } from "../../stores/reducers/TodosReducer";

const Inputs = () => {
  const dispatch = useDispatch();

  const [searchInputValue, setSearchInputValue] = useState("");
  const [addInputValue, setAddInputValue] = useState("");

  const onSearchInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const onSearchClick = () => {
    dispatch(findTodo({ inputContent: searchInputValue }));

    setSearchInputValue("");
  };

  const onAddInputChange = (e) => {
    setAddInputValue(e.target.value);
  };

  const onAddClick = (e) => {
    const newList = {
      dates: "2021-02-02",
      content: addInputValue,
      done: false,
    };

    dispatch(addTodo({ newList }));

    setAddInputValue("");
  };

  return (
    <div>
      <Styled.InputBox>
        <Input
          placeholder='리스트를 찾아보세요...'
          onChangeHandeler={onSearchInputChange}
          value={searchInputValue}
        />
        <Styled.Search onClick={onSearchClick} />
      </Styled.InputBox>
      <Styled.InputBox>
        <Input
          placeholder='리스트를 추가하세요...'
          onChangeHandeler={onAddInputChange}
          value={addInputValue}
        />
        <Styled.Add onClick={onAddClick} />
      </Styled.InputBox>
    </div>
  );
};

export default Inputs;
