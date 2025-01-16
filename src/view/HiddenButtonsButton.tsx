import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { HiddenButtonsButtonType } from "../types";

import { defaultState } from "../assets/defaultState";

import { ChipsetButton } from "./ChipsetButton";

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
  background: #00bfff;
  border: 1px solid #1e90ff;
  cursor: pointer;

  &:hover {
    background-color: chartreuse;
    border: 1px solid #1e90ff;
  }
`;

const Chipsets = styled.div`
  margin: 5px;
`;

const ChipsetWrap = styled.div`
  margin-bottom: 5px;
`;

export const HiddenButtonsButton = ({
  hiddenChipsetsButtons,
}: HiddenButtonsButtonType) => {
  const { hiddenChipsetsButton } = defaultState;
  const buttons = hiddenChipsetsButtons.map((item) => (
    <ChipsetWrap key={item}>
      <ChipsetButton buttonName={item} />
    </ChipsetWrap>
  ));

  return (
    <Popup trigger={<Button>{hiddenChipsetsButton}</Button>}>
      <Chipsets>{buttons}</Chipsets>
    </Popup>
  );
};
