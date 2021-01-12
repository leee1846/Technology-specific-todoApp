import Styled, { css } from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { grayFontColor, whiteFontColor } from "./../common/Common.style";

export const InputContainer = Styled.div`
  width:100%;
`;

const iconStyle = css`
  color: ${grayFontColor};
  margin-right: 10px;
`;

const SearchStyle = css`
  margin: 0 45px;
  background-color: #22272e;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  height: 35px;
  border-radius: 6px;
  cursor: pointer;
  input {
    background-color: #22272e;
    border: none;
    outline: none;
    width: 100%;
    height: 35px;
    margin-left: 15px;
    font-size: 0.58rem;
    color: ${whiteFontColor};
  }
`;

export const SearchInput = Styled.div`
  ${SearchStyle}
`;

export const IconSearch = Styled(SearchIcon)`
  ${iconStyle}
`;

export const AddInput = Styled.div`
  ${SearchStyle}
`;

export const IconAdd = Styled(AddIcon)`
  ${iconStyle}
`;
