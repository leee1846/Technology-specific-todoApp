import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import * as Styled from "./TodoLists.style";

function TodoLists() {
  return (
    <Styled.ListContainer>
      <Styled.List>
        <Styled.ListLeft>
          <input type='checkbox' />
          <p>
            공부하기
            <span>2021년 1월 12일</span>
          </p>
        </Styled.ListLeft>
        <Styled.MoreIcon fontSize='small' />
        <Styled.DeleteContainer>
          <Styled.DeleteIcon fontSize='small' />
          <p>Delete</p>
        </Styled.DeleteContainer>
      </Styled.List>
    </Styled.ListContainer>
  );
}

export default TodoLists;
