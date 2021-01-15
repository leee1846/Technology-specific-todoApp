import React, { useState, useRef } from "react";
import * as Styled from "./TodoInputs.style";
import { useDispatch } from "react-redux";
import { createList } from "./../../store/index";

function TodoInputs() {
  const [searchValue, setSearchValue] = useState("");

  const nextId = useRef(5);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const today = new Date();
  const onClick = () => {
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;
    const thisDate = today.getDate();

    if (searchValue) {
      dispatch(
        createList({
          list: {
            id: nextId.current,
            dates: `${thisYear}-${thisMonth}-${thisDate}`,
            content: searchValue,
            clicked: false,
            done: false,
          },
          content: searchValue,
        })
      );
      nextId.current += 1;
      setSearchValue("");
    } else {
      window.alert("내용을 입력하여 주세요.");
    }
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
          value={searchValue}
        />
        <Styled.IconAdd fontSize='small' onClick={onClick} />
      </Styled.AddInput>
    </Styled.InputContainer>
  );
}

export default TodoInputs;
