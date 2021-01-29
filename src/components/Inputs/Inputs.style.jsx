import Styled, { css } from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export const InputBox = Styled.div`
  display:flex;
  align-items:center;
  background-color:${({ theme }) => theme.input_bg};
  width:430px;
  justify-content:center;
  margin-bottom:10px;
  border-radius:5px;
`;

const iconStyle = css`
  color: ${({ theme }) => theme.gray_1};
  transform: scale(0.8);
  cursor: pointer;
  padding: 5px;
`;

export const Add = Styled(AddCircleOutlineIcon)`
  ${iconStyle};
`;

export const Search = Styled(SearchIcon)`
  ${iconStyle};
`;
