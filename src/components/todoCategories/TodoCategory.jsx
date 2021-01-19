import React, { useState } from "react";
import * as Styled from "./TodoCategory.style";

const isCategories = [
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

function TodoCategory({ filterListByCategory }) {
  const [categories, setCategories] = useState(isCategories);

  const categoryEventStyler = (categoryName) => {
    setCategories(
      categories.map((category) =>
        category.text === categoryName
          ? { ...category, clicked: true }
          : { ...category, clicked: false }
      )
    );
  };

  const categoryClickHandeler = (event, categoryName) => {
    categoryEventStyler(event.target.textContent);
    filterListByCategory(categoryName);
  };

  return (
    <Styled.Categories>
      {categories.map((category, index) => {
        return (
          <Styled.Category
            key={index}
            onClick={(event) => categoryClickHandeler(event, category.text)}
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
