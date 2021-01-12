import Styled, { css } from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { grayFontColor, whiteFontColor } from "./../common/Common.style";

export const DateContainer = Styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
  padding: 40px 0;
`;

const arrowStyle = css`
  && {
    color: ${grayFontColor};
    cursor: pointer;
    transition: 0.2s linear;
    padding: 0;
  }

  &:hover {
    color: ${whiteFontColor};
  }
`;

export const Left = Styled(ChevronLeftIcon)`
  ${arrowStyle}
`;

export const Right = Styled(ChevronRightIcon)`
  ${arrowStyle}
`;

export const DateText = Styled.p`
  font-weight:900;
  color:${whiteFontColor};
  margin: 0 30px;
`;
