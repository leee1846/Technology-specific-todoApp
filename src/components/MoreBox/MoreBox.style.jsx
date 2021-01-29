import Styled, { css } from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DoneIcon from "@material-ui/icons/Done";

export const Box = Styled.ul`
  position:absolute;
  top:27px;
  right:-15px;
  border-radius:5px;
  background-color:${({ theme }) => theme.input_bg};
  padding:5px 3px 5px 10px;
  z-index:1000;

  &:after{
    position:absolute;
    content:"";
    width:8px;
    height:8px;
    background-color:${({ theme }) => theme.input_bg};
    top:-4px;
    right:25px;
    transform:rotate(45deg);
  }
`;

const textStyle = css`
  font-size: 13px;
  color: ${({ theme }) => theme.gray_1};
`;

export const Text = Styled.p`
  ${textStyle}
`;

const iconStyle = css`
  color: ${({ theme }) => theme.gray_1};
  transform: scale(0.6);
`;

export const Delete = Styled(DeleteOutlineIcon)`
  ${iconStyle}
`;

export const Done = Styled(DoneIcon)`
  ${iconStyle}
`;

export const ListBox = Styled.li`
  display:flex;
  align-items:center;
  height:18px;
  width:100%;
  justify-content:space-between;
  cursor:pointer;
  transition: 0.2s linear;

  &:hover ${Text},
  &:hover ${Delete},
  &:hover ${Done}{
    color: ${({ theme }) => theme.white_1};
  }
`;
