import React from "react";
import * as Styled from "./Input.style";

const Input = ({ placeholder }) => {
  return (
    <>
      <Styled.Input type='text' placeholder={placeholder} />
    </>
  );
};

export default Input;
