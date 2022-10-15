import React from "react";
import { ProductHeaderstyle } from "Styles/Common/SectionHeader";
interface IProps {
	title: string;
}
export default function SectionHeader(props: IProps) {
	const { title } = props;
	return <ProductHeaderstyle>{title}</ProductHeaderstyle>;
}
