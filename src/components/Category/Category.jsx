import React from "react";
import * as Styled from "./Category.style";

const Category = ({ children, clicked, setCategoryList }) => {
  const categoryClickHandeler = (e) => {
    setCategoryList((categoryList) =>
      categoryList.map((list) => {
        return e.target.textContent === list.name
          ? { ...list, clicked: true }
          : { ...list, clicked: false };
      })
    );
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
