import React, { useState } from "react";
import * as Styled from "./TodoCategory.style";

const isCategories = [
  {
    text: "Day",
    clicked: false,
  },
  {
    text: "Month",
    clicked: false,
  },
  {
    text: "Year",
    clicked: false,
  },
  {
    text: "All",
    clicked: true,
  },
];

function TodoCategory({ todos, setCategoryClickTodoList }) {
  const [categories, setCategories] = useState(isCategories);

  const filterListByCategory = (categoryName) => {
    const today = new Date();
    let splitDates = null;

    const filteredAllList = todos.filter((list) => {
      return list;
    });
    const filteredDateList = todos.filter((list) => {
      splitDates = list.dates.split("-");
      return (
        Number(splitDates[0]) === today.getFullYear() &&
        Number(splitDates[1]) === today.getMonth() + 1 &&
        Number(splitDates[2]) === today.getDate()
      );
    });
    const filteredMonthList = todos.filter((list) => {
      splitDates = list.dates.split("-");
      return (
        Number(splitDates[0]) === today.getFullYear() &&
        Number(splitDates[1]) === today.getMonth() + 1
      );
    });
    const filteredYearList = todos.filter((list) => {
      splitDates = list.dates.split("-");
      return Number(splitDates[0]) === today.getFullYear();
    });

    if ("Day" === categoryName) {
      setCategoryClickTodoList(filteredDateList);
    } else if ("Month" === categoryName) {
      setCategoryClickTodoList(filteredMonthList);
    } else if ("Year" === categoryName) {
      setCategoryClickTodoList(filteredYearList);
    } else if ("All" === categoryName) {
      setCategoryClickTodoList(filteredAllList);
    }
  };

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
