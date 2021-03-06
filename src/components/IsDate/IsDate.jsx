import React from "react";
import * as Styled from "./IsDate.style.js";

const IsDate = () => {
  const isDate = new Date();
  const thisYear = Number(isDate.getFullYear());
  const thisMonth = Number(isDate.getMonth() + 1);
  const thisDate = Number(isDate.getDate());
  const today = `${thisYear}년 ${thisMonth}월 ${thisDate}일`;

  return (
    <>
      <Styled.Date>{today}</Styled.Date>
    </>
  );
};

export default React.memo(IsDate);
