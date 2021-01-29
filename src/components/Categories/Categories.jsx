import React, { useState } from "react";
import * as Styled from "./Categories.style";
import Category from "./../Category/Category";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([
    {
      name: "Day",
      clicked: false,
    },
    {
      name: "Month",
      clicked: false,
    },
    {
      name: "Year",
      clicked: false,
    },
    {
      name: "All",
      clicked: true,
    },
  ]);

  return (
    <Styled.CategoryContainer>
      {categoryList.map((list) => (
        <Category clicked={list.clicked} setCategoryList={setCategoryList}>
          {list.name}
        </Category>
      ))}
    </Styled.CategoryContainer>
  );
};

export default Categories;
