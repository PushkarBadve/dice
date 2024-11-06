import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  border-radius: 5px;
  background-color: black;
  font-size: 16px;
  color: white;
  height: 44px;
  cursor: pointer;
  float: right;
  border-color: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border-color: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border-color: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border-color: 1px solid transparent;
    color: white;
  }
`;
