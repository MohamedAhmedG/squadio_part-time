export interface IChildren {
	children: JSX.Element[] | JSX.Element;
}
export interface ITitle {
	title: string;
}

export interface IItemLabel {
	title?: string;
	subTitle?: string;
	color?: string;
	lableSize?: string;
	lineHeight?: string;
	isBlack?: boolean;
	isSubBlack?: boolean;
	fontFamily?: string;
}

export interface IIsActiveColor {
	isActive: boolean;
}

export interface IColorData {
	id: string;
	icon: string;
	label: string;
}
export interface IStorageData {
	id: string;
	label: string;
}
