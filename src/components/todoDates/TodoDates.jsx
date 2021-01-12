import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import * as Styled from "./TodoDates.style";

function TodoDates() {
  return (
    <Styled.DateContainer>
      <Styled.Left />
      <Styled.DateText>2021년 1월 12일</Styled.DateText>
      <Styled.Right />
    </Styled.DateContainer>
  );
}

export default TodoDates;
