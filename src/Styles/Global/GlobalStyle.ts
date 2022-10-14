import { createGlobalStyle } from "styled-components";
import { fonts } from "Styles/StyleFont/Font";
import theme from "../Theme";

const GlobelStyle = createGlobalStyle`
${fonts}
body{
	background-color: ${theme.colours.white};
}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
`;
export default GlobelStyle;
