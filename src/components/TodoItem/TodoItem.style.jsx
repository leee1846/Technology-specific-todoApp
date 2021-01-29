import Styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export const ListContainer = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const Left = Styled.div`
  display:flex;
  align-items:flex-end;
`;

export const Content = Styled.p`
  font-size:16px;
  color:${({ theme }) => theme.white_1};
  margin-right:6px;
`;

export const Date = Styled.p`
  font-size:13px;
  color:${({ theme }) => theme.gray_1};
`;

export const More = Styled(MoreHorizIcon)`
  color:${({ theme }) => theme.gray_1};
  transform:scale(.8);
  cursor:pointer;
`;
