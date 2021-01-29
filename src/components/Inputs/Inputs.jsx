import React from "react";
import Input from "./../Input/Input";
import * as Styled from "./Inputs.style";

const Inputs = () => {
  return (
    <>
      <Styled.InputBox>
        <Input placeholder='리스트를 찾아보세요...' />
        <Styled.Search />
      </Styled.InputBox>
      <Styled.InputBox>
        <Input placeholder='리스트를 추가하세요...' />
        <Styled.Add />
      </Styled.InputBox>
    </>
  );
};

export default Inputs;
