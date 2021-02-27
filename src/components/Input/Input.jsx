import React from "react";
import * as Styled from "./Input.style.js";

const Input = ({ placeholder, onChangeHandeler, value }) => {
  return (
    <>
      <Styled.Input
        type='text'
        placeholder={placeholder}
        onChange={(e) => onChangeHandeler(e)}
        value={value}
      />
    </>
  );
};

export default Input;
