import React from "react";
import TodoItem from "./../TodoItem/TodoItem";

const TodoList = ({ todoReducer }) => {
  return (
    <div>
      {todoReducer.map((list) => (
        <TodoItem todoItem={list} />
      ))}
    </div>
  );
};

export default TodoList;
