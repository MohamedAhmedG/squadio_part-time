import { css } from "styled-components";
import Poppins_Light_eot from "Assets/Fonts/Poppins-Light.eot";
import Poppins_Light_svg from "Assets/Fonts/Poppins-Light.svg";
import Poppins_Light_ttf from "Assets/Fonts/Poppins-Light.ttf";
import Poppins_Light_woff from "Assets/Fonts/Poppins-Light.woff";
import Poppins_Light_woff2 from "Assets/Fonts/Poppins-Light.woff2";

import Poppins_SemiBold_eot from "Assets/Fonts/Poppins-SemiBold.eot";
import Poppins_SemiBold_svg from "Assets/Fonts/Poppins-SemiBold.svg";
import Poppins_SemiBold_ttf from "Assets/Fonts/Poppins-SemiBold.ttf";
import Poppins_SemiBold_woff from "Assets/Fonts/Poppins-SemiBold.woff";
import Poppins_SemiBold_woff2 from "Assets/Fonts/Poppins-SemiBold.woff2";

import Poppins_Medium_eot from "Assets/Fonts/Poppins-Medium.eot";
import Poppins_Medium_svg from "Assets/Fonts/Poppins-Medium.svg";
import Poppins_Medium_ttf from "Assets/Fonts/Poppins-Medium.ttf";
import Poppins_Medium_woff from "Assets/Fonts/Poppins-Medium.woff";
import Poppins_Medium_woff2 from "Assets/Fonts/Poppins-Medium.woff2";

import Poppins_Regular_eot from "Assets/Fonts/Poppins-Regular.eot";
import Poppins_Regular_svg from "Assets/Fonts/Poppins-Regular.svg";
import Poppins_Regular_ttf from "Assets/Fonts/Poppins-Regular.ttf";
import Poppins_Regular_woff from "Assets/Fonts/Poppins-Regular.woff";
import Poppins_Regular_woff2 from "Assets/Fonts/Poppins-Regular.woff2";

// export enum Fonts {
// 	LightFont = "Noto-Sans-Light",
// 	RegularFont = "Noto-Sans-Regular",
// 	MediumFont = "Noto-Sans-Medium",
// 	BoldFont = "Noto-Sans-Bold",
// }

export const fonts = css`
	@font-face {
		font-family: "Poppins_Light";
		src: url(${Poppins_Light_eot});
		src: local("Poppins_Light"), local("Poppins_Light"),
			url(${Poppins_Light_eot}) format("embedded-opentype"),
			url(${Poppins_Light_woff2}) format("woff2"),
			url(${Poppins_Light_woff}) format("woff"),
			url(${Poppins_Light_ttf}) format("truetype"),
			url(${Poppins_Light_svg}) format("svg");
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "Poppins_SemiBold";
		src: url(${Poppins_SemiBold_eot});
		src: local("Poppins_Bold"), local("Poppins_Bold"),
			url(${Poppins_SemiBold_eot}) format("embedded-opentype"),
			url(${Poppins_SemiBold_woff2}) format("woff2"),
			url(${Poppins_SemiBold_woff}) format("woff"),
			url(${Poppins_SemiBold_ttf}) format("truetype"),
			url(${Poppins_SemiBold_svg}) format("svg");
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "Poppins_Medium";
		src: url(${Poppins_Medium_eot});
		src: local("Poppins_Medium"), local("Poppins_Medium"),
			url(${Poppins_Medium_eot}) format("embedded-opentype"),
			url(${Poppins_Medium_woff2}) format("woff2"),
			url(${Poppins_Medium_woff}) format("woff"),
			url(${Poppins_Medium_ttf}) format("truetype"),
			url(${Poppins_Medium_svg}) format("svg");
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: "Poppins_Regular";
		src: url(${Poppins_Regular_eot});
		src: local("Poppins_Regular"), local("Poppins_Regular"),
			url(${Poppins_Regular_eot}) format("embedded-opentype"),
			url(${Poppins_Regular_woff2}) format("woff2"),
			url(${Poppins_Regular_woff}) format("woff"),
			url(${Poppins_Regular_ttf}) format("truetype"),
			url(${Poppins_Regular_svg}) format("svg");
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
`;
