import React from "react";
import styled from "styled-components";

import { ChipsetsTypes } from "../types";

import { ChipsetButton } from "./ChipsetButton";
import { HiddenButtonsButton } from "./HiddenButtonsButton";

const ChipsetsWrap = styled.div`
  padding: 5px;
  min-height: 15px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  z-index: 100;
`;

export const Chipsets = ({
  currentChipsets,
  controlArrLength,
  hiddenChipsetsButtons,
}: ChipsetsTypes) => {
  const buttons = currentChipsets.map((item, index) => (
    <ChipsetButton key={index} buttonName={item} />
  ));
  if (currentChipsets.length < controlArrLength)
    buttons.push(
      <HiddenButtonsButton
        key={currentChipsets.length}
        hiddenChipsetsButtons={hiddenChipsetsButtons}
      />
    );

  return <ChipsetsWrap>{buttons}</ChipsetsWrap>;
};
