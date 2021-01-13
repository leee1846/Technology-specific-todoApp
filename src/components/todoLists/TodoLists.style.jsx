import Styled, { css } from "styled-components";
import { whiteFontColor } from "../common/Common.style";
import { grayFontColor } from "./../common/Common.style";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export const ListContainer = Styled.ul`
  width:100%;
  padding:0 45px;
  margin:40px 0;
`;

export const List = Styled.li`
  list-style:none;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:relative;
`;

export const ListLeft = Styled.div`
  display:flex;
  input {
    margin-right:10px;
  }
  p {
    color:${whiteFontColor};
    font-size:0.65rem;
    span {
      color: ${grayFontColor};
      font-size:0.51rem;
      margin:0 10px;
    }
  }
`;

export const MoreIcon = Styled(MoreHorizIcon)`
  color: ${grayFontColor};
  cursor:pointer;
`;

export const DeleteIcon = Styled(DeleteForeverIcon)`
  color: #aab0b6;
  margin-right:5px;
  &&{
    transition: 0.1s linear;
  }
`;

export const MoreContainer = Styled.div`
  background-color: rgb(58, 58, 58);
  position:absolute;
  right:-4px;
  bottom:-50px;
  padding: 11px 12px;
  border-radius: 5px;
  box-shadow: 0 0 3px rgb(36, 36, 36);
  cursor:pointer;
  z-index:1;

  ${({ clicked }) =>
    !clicked &&
    css`
      display: none;
    `}

  &:before {
    content:"";
    position:absolute;
    top:-4px;
    right:12.5px;
    width:8px;
    height:8px;
    transform:rotate(45deg);
    background-color: rgb(58, 58, 58);
  }
`;

export const DeleteBox = Styled.div`
  display:flex;
  align-items:center;

  &:hover {
    p {
      color:${whiteFontColor};
    }
    ${DeleteIcon} {
      color:${whiteFontColor};
    }
  }

  p {
    font-size: 0.6rem;
    color: #aab0b6;
    transition: 0.1s linear;
  }
`;
