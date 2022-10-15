import React from "react";
import {
	ItemLabelStyle,
	ItemSubLabelStyle,
	LabelStyle,
} from "Styles/Common/ItemLabel";
import { IItemLabel } from "Types";

export default function ItemLabel(props: IItemLabel) {
	const { title, subTitle } = props;

	return (
		<ItemLabelStyle>
			<LabelStyle {...props}>{title}</LabelStyle>
			{subTitle && <ItemSubLabelStyle {...props}>{subTitle}</ItemSubLabelStyle>}
		</ItemLabelStyle>
	);
}
