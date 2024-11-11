import { DefaultStateTypes } from "../types";

export const defaultState: DefaultStateTypes = {
  numberedChipsets: [
    "Чипс 1",
    "Чипс 2",
    "Чипс 3",
    "Чипс 4",
    "Чипс 5",
    "Чипс 6",
    "Чипс 7",
    "Чипс 8",
    "Чипс 9",
    "Чипс 10",
  ],
  hiddenChipsetsButton: ". . .",
};

export const options = {
  root: document.querySelector("#controlChipsets"),
  rootMargin: "0px -210px 0px 0px",
  threshold: 1,
};
