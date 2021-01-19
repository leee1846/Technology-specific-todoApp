import React from "react";
import * as Styled from "./TodoCategory.style";
import { useSelector, useDispatch } from "react-redux";
import { clickCategory } from "../../store/reducers/categoryStyleReducer";

function TodoCategory({ filterListByCategory, categoryClickTodoList }) {
  const categories = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();

  const categoryClickHandeler = (event, categoryName) => {
    dispatch(clickCategory({ name: event.target.textContent }));
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
