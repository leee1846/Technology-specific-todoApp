import React from "react";
import * as Styled from "./Category.style";
import { useDispatch } from "react-redux";
import { categoryStyler } from "../../stores/reducers/CategoryReducer";
import { filterList } from "./../../stores/reducers/CategoryFilterReducer";

const Category = ({ children, clicked, todoReducer, isDate }) => {
  const dispatch = useDispatch();
  const categoryClickHandeler = (e) => {
    const currentName = e.target.textContent;
    dispatch(categoryStyler({ currentName }));

    const thisYear = isDate.getFullYear();
    const thisMonth = isDate.getMonth() + 1;
    const thisDate = isDate.getDate();

    dispatch(
      filterList({
        currentName,
        todoList: todoReducer,
        thisYear,
        thisMonth,
        thisDate,
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
