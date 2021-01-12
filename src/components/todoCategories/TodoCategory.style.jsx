import Styled, { css } from "styled-components";
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
  ${({ clicked }) =>
    clicked &&
    css`
      color: ${whiteFontColor};
      font-weight: 900;
      transition: 0.5s linear;
    `}
`;

export const Category = Styled.li`
  height:100%;
  line-height:40px;
  cursor:pointer;
  position:relative;
  
  :after{
    content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 1.5px;
        background-color: dodgerblue;
  }

  &:hover ${CategoryText} {
    color: ${whiteFontColor};
  }

  ${({ clicked }) =>
    clicked &&
    css`
      :after {
        width: 120%;
        transition: 0.3s linear;
      }
    `}
`;
