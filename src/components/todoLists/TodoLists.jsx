import React from "react";
import * as Styled from "./TodoLists.style";
import { useDispatch, useSelector } from "react-redux";

function TodoLists() {
  const todos = useSelector((state = todos) => state);

  return (
    <Styled.ListContainer>
      {todos.map((data) => {
        return (
          <Styled.List>
            <Styled.ListLeft>
              <input type='checkbox' />
              <p>
                {data.content}
                <span>
                  {data.year}년 {data.month}월 {data.date}일
                </span>
              </p>
            </Styled.ListLeft>
            <Styled.MoreIcon fontSize='small' />
            <Styled.DeleteContainer>
              <Styled.DeleteIcon fontSize='small' />
              <p>Delete</p>
            </Styled.DeleteContainer>
          </Styled.List>
        );
      })}
    </Styled.ListContainer>
  );
}

export default TodoLists;
