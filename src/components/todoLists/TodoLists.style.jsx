import Styled, { css } from "styled-components";
import { whiteFontColor } from "../common/Common.style";
import { grayFontColor } from "./../common/Common.style";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneIcon from "@material-ui/icons/Done";

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
    span {
      color: ${grayFontColor};
      font-size:0.51rem;
      margin:0 10px;
    }
  }
`;

export const TodoContent = Styled.p`
  color:${whiteFontColor};
  font-size:0.65rem;
  position:relative;

  :after {
    content:'';
    width:0;
    height:1px;
    position:absolute;
    background-color:${whiteFontColor};
    top:50%;
    left:0;
    transition:.2s linear;
    ${({ done }) =>
      done &&
      css`
        width: 100%;
      `}
  }

  ${({ done }) =>
    done &&
    css`
      color: ${grayFontColor};
    `}
`;

export const MoreIcon = Styled(MoreHorizIcon)`
  &&{
  color: ${grayFontColor};
  cursor:pointer;
  transition:.1s linear;
  }
  &:hover {
    color:${whiteFontColor}
  }
`;

const iconStyle = css`
  color: #aab0b6;
  margin-right: 5px;
  && {
    transition: 0.1s linear;
  }
`;

export const DeleteIcon = Styled(DeleteForeverIcon)`
  ${iconStyle}
`;

export const MoreContainer = Styled.div`
  background-color: rgb(58, 58, 58);
  position:absolute;
  right:-4px;
  bottom:-72px;
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

const moreListStyle = css`
  display: flex;
  align-items: center;

  &:hover {
    p {
      color: ${whiteFontColor};
    }
    ${DeleteIcon} {
      color: ${whiteFontColor};
    }
  }

  p {
    font-size: 0.6rem;
    color: #aab0b6;
    transition: 0.1s linear;
  }
`;

export const DeleteBox = Styled.div`
  ${moreListStyle}
`;

export const DoneBox = Styled.div`
  ${moreListStyle}
`;

export const CheckIcon = Styled(DoneIcon)`
  ${iconStyle}
`;
