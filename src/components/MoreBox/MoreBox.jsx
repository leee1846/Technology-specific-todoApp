import React from "react";
import * as Styled from "./MoreBox.style";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../stores/reducers/TodosReducer";
import { doneTodo } from "../../stores/reducers/TodosReducer";

const MoreBox = ({ todoItem }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo({ id: todoItem.id }));
  };

  const onDone = () => {
    const doneList = {
      dates: todoItem.dates,
      content: todoItem.content,
      done: !todoItem.done,
    };

    dispatch(doneTodo({ id: todoItem.id, done: doneList }));
  };

  return (
    <Styled.Box>
      <Styled.ListBox onClick={onDelete}>
        <Styled.Text>Delete</Styled.Text>
        <Styled.Delete />
      </Styled.ListBox>
      <Styled.ListBox onClick={onDone}>
        <Styled.Text>Done</Styled.Text>
        <Styled.Done />
      </Styled.ListBox>
    </Styled.Box>
  );
};

export default MoreBox;
