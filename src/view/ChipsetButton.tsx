import React from "react";
import styled from "styled-components";

import { ChipsetButtonType } from "../types";

const Button = styled.div`
  margin-right: 15px;
  padding: 5px 15px;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  color: white;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  background: #00bfff;
  border: 1px solid #1e90ff;
  cursor: pointer;

  &:hover {
    background-color: chartreuse;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const ChipsetButton = ({ buttonName }: ChipsetButtonType) => {
  return <Button>{buttonName}</Button>;
};
