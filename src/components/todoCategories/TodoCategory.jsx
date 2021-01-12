import React, { useState, useRef } from "react";
import * as Styled from "./TodoCategory.style";

const categories = [
  {
    text: "Day",
    clicked: false,
  },
  {
    text: "Month",
    clicked: true,
  },
  {
    text: "Year",
    clicked: false,
  },
];

function TodoCategory() {
  const [category, setCategory] = useState(categories);

  const categoryClickHandeler = (e) => {
    setCategory(
      category.map((category) => {
        return category.text === e.target.textContent
          ? { text: category.text, clicked: true }
          : { text: category.text, clicked: false };
      })
    );
  };

  return (
    <Styled.Categories>
      {category.map((category, index) => {
        return (
          <Styled.Category
            key={index}
            onClick={categoryClickHandeler}
            clicked={category.clicked}
          >
            <Styled.CategoryText clicked={category.clicked}>
              {category.text}
            </Styled.CategoryText>
          </Styled.Category>
        );
      })}
    </Styled.Categories>
  );
}

export default TodoCategory;
