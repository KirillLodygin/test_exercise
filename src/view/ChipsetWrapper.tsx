import React, { FC } from "react";
import styled from "styled-components";

import { ChipsetsRow } from "./ChipsetsRow";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 15px;
`;

const TestHeader = styled.h1`
  color: #6495ed;
  text-shadow: 1px 1px 1px #000;
  margin-bottom: 40px;
`;

export const ChipsetWrapper: FC = () => {
  return (
    <Wrapper>
      <TestHeader>Подстраивающиеся чипсы</TestHeader>
      <ChipsetsRow />
    </Wrapper>
  );
};
