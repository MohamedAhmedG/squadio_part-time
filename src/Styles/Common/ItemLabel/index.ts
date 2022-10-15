import styled, { css } from "styled-components";
import theme from "Styles/Theme";
import { IItemLabel } from "Types";

const LabelBlack = css<IItemLabel>`
	color: ${theme.colours.black};
`;
const LabelGrey = css<IItemLabel>`
	color: ${theme.colours.lightGrey};
`;

export const ItemLabelStyle = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
`;

export const LabelStyle = styled.div<IItemLabel>`
${({ isBlack }) => (isBlack ? LabelBlack : LabelGrey)}
font-size: ${({ lableSize }) => (lableSize ? lableSize : "10px")};
font-family: ${({ fontFamily }) =>
	fontFamily === "medium"
		? theme.fonts.medium
		: fontFamily === "light"
		? theme.fonts.light
		: theme.fonts.light};
line-height:${({ lineHeight }) => (lineHeight ? lineHeight : "inherit")} ;
`;

export const ItemSubLabelStyle = styled.div<IItemLabel>`
${({ isSubBlack }) => (isSubBlack ? LabelBlack : LabelGrey)}
	font-size: ${({ lableSize }) => (lableSize ? lableSize : "10px")};
	font-family: ${({ fontFamily }) =>
		fontFamily === "medium"
			? theme.fonts.medium
			: fontFamily === "light"
			? theme.fonts.light
			: theme.fonts.light};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "inherit")};
`;
