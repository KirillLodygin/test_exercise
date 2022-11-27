export type DefaultStateTypes = {
	numberedChipsets: Array<string>,
	hiddenChipsetsButton: string,
};

export type ControlChipsetsTypes = {
	currentChipsets: Array<string>,
};
export type ChipsetsTypes = {
	currentChipsets: Array<string>,
	controlArrLength: number,
	hiddenChipsetsButtons: Array<string>
};

export type ChipsetButtonType = {
	buttonName: string,
};

export type ButtonHOCProps = {
	children: JSX.Element,
};

export type HiddenButtonsButtonType = {
	hiddenChipsetsButtons: Array<string>
}
