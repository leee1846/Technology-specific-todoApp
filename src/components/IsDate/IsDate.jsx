import React from "react";
import * as Styled from "./IsDate.style";

const IsDate = () => {
  const isDate = new Date();
  const thisYear = isDate.getFullYear();
  const thisMonth = isDate.getMonth() + 1;
  const thisDate = isDate.getDate();
  const today = `${thisYear}년 ${thisMonth}월 ${thisDate}일`;

  return (
    <>
      <Styled.Date>{today}</Styled.Date>
    </>
  );
};

export default IsDate;
