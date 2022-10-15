import Title from "components/Common/Title";
import React, { useState } from "react";
import {
	ColorOptionStyle,
	ProductColorStyle,
	WrraperColor,
	WrraperColorsOptionsStyle,
	WrraperIcon,
} from "Styles/ProductDetails";
import IphoneBlack from "Assets/Images/PNG/IphoneBlack.png";
import IphoneRed from "Assets/Images/PNG/IphoneRed.png";
import IphoneGreen from "Assets/Images/PNG/IphoneGreen.png";
import { IColorData } from "Types";

export default function ProductColor() {
	const [colorSelected, setColorSelected] = useState("1");
	const colorData = [
		{ id: "1", icon: IphoneBlack, label: "Black" },
		{ id: "2", icon: IphoneRed, label: "red" },
		{ id: "3", icon: IphoneGreen, label: "green" },
	];

	const selectColor = (item: IColorData) => {
		setColorSelected(item.id);
	};
	return (
		<ProductColorStyle>
			<Title title="Availble color" />
			<WrraperColorsOptionsStyle>
				{colorData.map((item) => {
					return (
						<ColorOptionStyle
							key={item.id}
							isActive={colorSelected === item.id && true}
							onClick={() => selectColor(item)}>
							<WrraperIcon>
								<img src={item.icon} alt="iphne" />
							</WrraperIcon>
							<WrraperColor>{item.label}</WrraperColor>
						</ColorOptionStyle>
					);
				})}
			</WrraperColorsOptionsStyle>
		</ProductColorStyle>
	);
}
