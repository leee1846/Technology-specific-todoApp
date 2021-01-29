import React from "react";
import * as Styled from "./Category.style";
import { useDispatch } from "react-redux";
import { categoryStyler } from "../../stores/reducers/CategoryReducer";

const Category = ({ children, clicked }) => {
  const dispatch = useDispatch();
  const categoryClickHandeler = (e) => {
    const currentName = e.target.textContent;
    dispatch(categoryStyler({ currentName }));
  };

  return (
    <Styled.Category>
      <Styled.Text onClick={categoryClickHandeler} clicked={clicked}>
        {children}
      </Styled.Text>
    </Styled.Category>
  );
};

export default Category;
