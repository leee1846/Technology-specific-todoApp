import React, { useState } from "react";
import Input from "./../Input/Input";
import * as Styled from "./Inputs.style";

const Inputs = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [addInputValue, setAddInputValue] = useState("");

  const onSearchInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const onAddInputChange = (e) => {
    setAddInputValue(e.target.value);
  };

  return (
    <div>
      <Styled.InputBox>
        <Input
          placeholder='리스트를 찾아보세요...'
          onChangeHandeler={onSearchInputChange}
          value={searchInputValue}
        />
        <Styled.Search />
      </Styled.InputBox>
      <Styled.InputBox>
        <Input
          placeholder='리스트를 추가하세요...'
          onChangeHandeler={onAddInputChange}
          value={addInputValue}
        />
        <Styled.Add />
      </Styled.InputBox>
    </div>
  );
};

export default Inputs;
