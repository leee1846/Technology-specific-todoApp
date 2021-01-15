import React from "react";
import * as Styled from "./TodoCategory.style";
import { useSelector, useDispatch } from "react-redux";
import { categoryList, clickCategory } from "../../store/index";

function TodoCategory() {
  const categories = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  const categoryClickHandeler = (event) => {
    dispatch(clickCategory({ name: event.target.textContent }));
    dispatch(
      categoryList({
        name: event.target.textContent,
      })
    );
  };

  return (
    <Styled.Categories>
      {categories.map((category, index) => {
        return (
          <Styled.Category
            key={index}
            onClick={(event) => categoryClickHandeler(event)}
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
