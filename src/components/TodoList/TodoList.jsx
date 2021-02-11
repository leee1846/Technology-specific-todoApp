import React, { useState, useEffect } from "react";
import TodoItem from "./../TodoItem/TodoItem";
import * as Styled from "./TodoList.style";

const TodoList = ({ todoReducer }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    setCurrentIndex(-1);
  }, [todoReducer]);

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
