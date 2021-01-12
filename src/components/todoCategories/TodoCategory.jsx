import React from "react";
import * as Styled from "./TodoCategory.style";

const categories = [
  {
    text: "Day",
    clicked: true,
  },
  {
    text: "Month",
    clicked: false,
  },
  {
    text: "Year",
    clicked: false,
  },
];

function TodoCategory() {
  return (
    <Styled.Categories>
      {categories.map((category, index) => (
        <Styled.Category key={index}>
          <Styled.CategoryText>{category.text}</Styled.CategoryText>
        </Styled.Category>
      ))}
    </Styled.Categories>
  );
}

export default TodoCategory;
