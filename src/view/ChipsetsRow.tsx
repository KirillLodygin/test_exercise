import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { defaultState } from "../assets/defaultState";
import { useElementWidth } from "../hooks/useElementWidth";

import { ControlChipsets } from "./ControlChipsets";
import { Chipsets } from "./Chipsets";

const ChipsetsWrapper = styled.div`
  width: 100%;
`;

export const ChipsetsRow = () => {
  const { numberedChipsets } = defaultState;
  const [ref, width] = useElementWidth();

  const [currentChipsets, setCurrentChipset] = useState<Array<string>>(
    numberedChipsets.slice()
  );
  const [hiddenChipsets, setHiddenChipsets] = useState<Array<string>>([]);

  useEffect(() => {
    if (width) {
      const controlLength =
        document.getElementsByClassName("controlButton").length;
      if (controlLength < numberedChipsets.length) {
        setCurrentChipset(numberedChipsets.slice(0, controlLength));
        setHiddenChipsets(numberedChipsets.slice(controlLength));
      }
      if (controlLength === 0) setCurrentChipset(numberedChipsets.slice());
      if (controlLength === numberedChipsets.length) {
        setCurrentChipset(numberedChipsets.slice());
        setHiddenChipsets([]);
      }
    }
  }, [numberedChipsets, width]);

  return (
    <ChipsetsWrapper ref={ref}>
      <Chipsets
        currentChipsets={currentChipsets}
        controlArrLength={numberedChipsets.length}
        hiddenChipsetsButtons={hiddenChipsets}
      />
      <ControlChipsets currentChipsets={numberedChipsets} />
    </ChipsetsWrapper>
  );
};
