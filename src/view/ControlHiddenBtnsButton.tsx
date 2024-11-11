import React from "react";
import styled from "styled-components";

import { defaultState } from "../assets/defaultState";

const Button = styled.div`
  padding: 5px 25px;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  color: white;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  border: 1px solid #1e90ff;
`;

export const ControlHiddenButtonsButton = () => {
  const { hiddenChipsetsButton } = defaultState;

  return <Button>{hiddenChipsetsButton}</Button>;
};
