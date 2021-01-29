import React from "react";
import * as Styled from "./Categories.style";
import Category from "./../Category/Category";

const Categories = ({ categoryList }) => {
  return (
    <Styled.CategoryContainer>
      {categoryList.map((list) => (
        <Category
          key={list.id}
          categoryList={categoryList}
          clicked={list.clicked}
        >
          {list.name}
        </Category>
      ))}
    </Styled.CategoryContainer>
  );
};

export default Categories;
