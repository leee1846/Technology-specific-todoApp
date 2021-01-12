import React, { useState, useRef } from "react";
import * as Styled from "./TodoInputs.style";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "./../../store/index";

function TodoInputs() {
  const [searchValue, setSearchValue] = useState("");

  const nextId = useRef(5);

  const today = new Date();

  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onClick = () => {
    dispatch(
      createList({
        list: {
          id: nextId.current,
          month: today.getMonth() + 1,
          date: today.getDate(),
          year: today.getFullYear(),
          content: searchValue,
        },
      })
    );
    nextId.current += 1;
  };

  return (
    <Styled.InputContainer>
      <Styled.SearchInput>
        <input type='text' placeholder='리스트를 찾아보세요...' />
        <Styled.IconSearch fontSize='small' />
      </Styled.SearchInput>
      <Styled.AddInput>
        <input
          type='text'
          placeholder='리스트를 추가하세요...'
          onChange={onChange}
        />
        <Styled.IconAdd fontSize='small' onClick={onClick} />
      </Styled.AddInput>
    </Styled.InputContainer>
  );
}

export default TodoInputs;
