import React from "react";
import { TitleStyle } from "Styles/Common/Title";
import { ITitle } from "Types";

export default function Title(props: ITitle) {
	const { title } = props;
	return <TitleStyle>{title}</TitleStyle>;
}
