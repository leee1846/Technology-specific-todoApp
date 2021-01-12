import React from "react";
import * as Styled from "./TodoInputs.style";

function TodoInputs() {
  return (
    <Styled.InputContainer>
      <Styled.SearchInput>
        <input type='text' placeholder='리스트를 찾아보세요...' />
        <Styled.IconSearch fontSize='small' />
      </Styled.SearchInput>
      <Styled.AddInput>
        <input type='text' placeholder='리스트를 추가하세요...' />
        <Styled.IconAdd fontSize='small' />
      </Styled.AddInput>
    </Styled.InputContainer>
  );
}

export default TodoInputs;
