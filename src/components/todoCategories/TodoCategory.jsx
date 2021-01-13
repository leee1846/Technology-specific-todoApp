import React from "react";
import * as Styled from "./TodoCategory.style";
import { useSelector, useDispatch } from "react-redux";
import { clickCategory } from "../../store/index";

function TodoCategory() {
  const categories = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  const categoryClickHandeler = (e) => {
    // setCategory(
    //   category.map((category) => {
    //     if (category.text === e.target.textContent) {
    //       return (category = { ...category, clicked: true });
    //     } else {
    //       return (category = { ...category, clicked: false });
    //     }
    //   })
    // );
    dispatch(clickCategory({ name: e.target.textContent }));
  };

  return (
    <Styled.Categories>
      {categories.map((category, index) => {
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
