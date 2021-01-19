import React, { useState, useRef } from "react";
import * as Styled from "./TodoInputs.style";
import { useDispatch } from "react-redux";
import { createList } from "./../../store/reducers/todoReducer";

function TodoInputs() {
  const [createValue, setCreateValue] = useState("");
  // const [searchValue, setSearchValue] = useState("");

  const nextId = useRef(5);

  const dispatch = useDispatch();

  const onChangeAddInput = (e) => {
    setCreateValue(e.target.value);
  };
  // const onChangeSearchInput = (e) => {
  //   setSearchValue(e.target.value);
  // };

  const today = new Date();
  const onClick = () => {
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;
    const thisDate = today.getDate();

    if (createValue) {
      dispatch(
        createList({
          list: {
            id: nextId.current,
            dates: `${thisYear}-${thisMonth}-${thisDate}`,
            content: createValue,
            clicked: false,
            done: false,
          },
          content: createValue,
        })
      );
      nextId.current += 1;
      setCreateValue("");
    } else {
      window.alert("내용을 입력하여 주세요.");
    }
  };

  // const onSearch = () => {
  //   if (searchValue) {
  //     dispatch(searchList({ content: searchValue }));
  //   } else {
  //     window.alert("내용을 입력하세요.");
  //   }
  // };

  return (
    <Styled.InputContainer>
      <Styled.SearchInput>
        <input
          type='text'
          placeholder='리스트를 찾아보세요...'
          // onChange={onChangeSearchInput}
        />
        <Styled.IconSearch fontSize='small' />
      </Styled.SearchInput>
      <Styled.AddInput>
        <input
          type='text'
          placeholder='리스트를 추가하세요...'
          onChange={onChangeAddInput}
          value={createValue}
        />
        <Styled.IconAdd fontSize='small' onClick={onClick} />
      </Styled.AddInput>
    </Styled.InputContainer>
  );
}

export default TodoInputs;
