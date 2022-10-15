import styled from "styled-components";
import theme from "Styles/Theme";

export const ProductHeaderstyle = styled.h1`
	margin-bottom: ${theme.Sizes.SpaceBetweenSections};
	color: ${theme.colours.primary};
	font-family: ${theme.fonts.SemiBold};
	font-size: clamp(18px, 5vw, 24px);
	line-height: 32px;
`;
