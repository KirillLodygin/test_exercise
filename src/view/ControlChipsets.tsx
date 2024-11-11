import React from "react";
import styled from "styled-components";

import { ControlChipsetsTypes } from "../types";

import { ControlChipsetButton } from "./ControlChipsetButton";
import { ButtonHOC } from "./ButtonHOC";

const ChipsetsWrap = styled.div`
  padding: 5px;
  min-height: 15px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  z-index: 10;
  top: -72px;
  opacity: 0;
`;

export const ControlChipsets = ({ currentChipsets }: ControlChipsetsTypes) => {
  const buttons = currentChipsets.map((item) => (
    <ButtonHOC key={item}>
      <ControlChipsetButton buttonName={item} />
    </ButtonHOC>
  ));

  return <ChipsetsWrap>{buttons}</ChipsetsWrap>;
};
