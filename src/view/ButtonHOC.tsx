import React from "react";
import { useInView } from "react-intersection-observer";

import { ButtonHOCProps } from "../types";
import { options } from "../assets/defaultState";

import { ControlHiddenButtonsButton } from "./ControlHiddenBtnsButton";
import styled from "styled-components";

const ButtonWrapp = styled.div`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ButtonHOC = ({ children }: ButtonHOCProps) => {
  const { ref, inView } = useInView(options);

  return (
    <ButtonWrapp ref={ref} aria-disabled={true}>
      {inView ? children : <ControlHiddenButtonsButton />}
    </ButtonWrapp>
  );
};
