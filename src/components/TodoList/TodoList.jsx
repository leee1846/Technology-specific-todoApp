import React, { useState } from "react";
import TodoItem from "./../TodoItem/TodoItem";
import * as Styled from "./TodoList.style";

const TodoList = ({ todoReducer }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  console.log(currentIndex);
  return (
    <Styled.ListContainer>
      {todoReducer.map((list, index) => {
        return (
          <TodoItem
            key={list.id}
            todoItem={list}
            currentNumber={index + 1}
            isShow={index === currentIndex ? true : false}
            index={index}
            setCurrentIndex={setCurrentIndex}
          />
        );
      })}
    </Styled.ListContainer>
  );
};

export default TodoList;
