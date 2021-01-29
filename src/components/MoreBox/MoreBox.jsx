import React from "react";
import * as Styled from "./MoreBox.style";

const MoreBox = () => {
  return (
    <Styled.Box>
      <Styled.ListBox>
        <Styled.Text>Delete</Styled.Text>
        <Styled.Delete />
      </Styled.ListBox>
      <Styled.ListBox>
        <Styled.Text>Done</Styled.Text>
        <Styled.Done />
      </Styled.ListBox>
    </Styled.Box>
  );
};

export default MoreBox;
