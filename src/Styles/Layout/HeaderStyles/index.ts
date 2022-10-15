import styled from "styled-components";
import theme from "Styles/Theme";

export const HeaderStyles = styled.section`
	font-family: ${theme.fonts.light};
	box-shadow: ${theme.colours.shadow};
	margin-bottom: ${theme.Sizes.SpaceBetweenSections};
`;
export const HeaderWrraper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 22px;
	gap: 10px;
`;
export const LogoStyle = styled.div`
	font-family: ${theme.fonts.SemiBold};
	width: 10%;
	svg {
		width: 100%;
		max-width: 118px;
	}
`;
export const SearchSection = styled.div`
	font-family: ${theme.fonts.medium};
	border: 1px solid #000;
	width: 50%;
`;
export const LinksSection = styled.div`
	font-family: ${theme.fonts.regular};
	border: 1px solid #000;
	width: 40%;
`;
