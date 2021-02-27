import React from "react";
import * as Styled from "./Categories.style.js";
import Category from "./../Category/Category";

const Categories = ({ categoryList, todoReducer }) => {
  const isDate = new Date();

  return (
    <Styled.CategoryContainer>
      {categoryList.map((list) => (
        <Category
          key={list.id}
          categoryList={categoryList}
          clicked={list.clicked}
          todoReducer={todoReducer}
          isDate={isDate}
        >
          {list.name}
        </Category>
      ))}
    </Styled.CategoryContainer>
  );
};

export default Categories;
