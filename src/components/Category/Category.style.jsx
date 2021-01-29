import Styled from "styled-components";

export const Category = Styled.li`
  margin:0 15px;
  position:relative;
  height:40px;
  line-height:40px;
`;

export const Text = Styled.p`
  font-size:17px;
  transition: .3s linear;
  color:${({ theme, clicked }) => (clicked ? theme.white_1 : theme.gray_1)};
  cursor:pointer;

  &:hover {
    color: ${({ theme }) => theme.white_1};
  }

  &:after {
    transition: .3s linear;
    content:"";
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    width:${({ clicked }) => (clicked ? "100%" : "0px")};
    height:1px;
    background-color:${({ clicked }) => clicked && "dodgerblue"};
  }
`;
