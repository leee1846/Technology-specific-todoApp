import Styled from "styled-components";
import { grayFontColor, whiteFontColor } from "./../common/Common.style";

export const Categories = Styled.ul`
  display:flex;
  justify-content:space-between;
  padding: 0 130px;
  align-items:center;
  height:40px;
  border-bottom:1px solid rgb(40, 40, 40);
`;

export const CategoryText = Styled.span`
  color: ${grayFontColor};
  transition: 0.2s linear;
  font-size:0.75rem;
`;

export const Category = Styled.li`
  height:100%;
  line-height:40px;
  cursor:pointer;
  
  &:hover ${CategoryText} {
    color: ${whiteFontColor};
  }
`;
