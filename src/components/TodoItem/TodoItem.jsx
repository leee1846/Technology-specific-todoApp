import React from "react";

const TodoItem = ({ todoItem }) => {
  return (
    <div>
      <h1>{todoItem.content}</h1>
    </div>
  );
};

export default TodoItem;
