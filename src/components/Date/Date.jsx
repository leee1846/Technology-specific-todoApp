import React from "react";
import * as Styled from "./Date.style";

const Date = ({ newDate }) => {
  // const today = `${newDate(getFullYear())}년 ${1}월 ${1}일`
  // const today = newDate.getFullYear();
  return (
    <>
      <Styled.Date>2021년 1월 29일</Styled.Date>
    </>
  );
};

export default Date;
