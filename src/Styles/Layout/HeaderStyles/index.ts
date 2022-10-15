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
	width: 30%;
	svg {
		width: 100%;
		max-width: 118px;
	}
	@media (min-width: 992px) {
		width: 10%;
	}
`;
export const SearchSectionStyle = styled.div`
	font-family: ${theme.fonts.medium};
	width: 50%;
	display: none;
	@media (min-width: 992px) {
		display: inline-block;
	}
`;

export const WrraperSearchSection = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
export const InfoFilter = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-family: ${theme.fonts.medium};
`;
export const InfoInputFilter = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-family: ${theme.fonts.medium};
	gap: 10px;
	width: 100%;
	input {
		width: 100%;
		padding: 10px;
		border: none;
	}
`;

export const LinksSection = styled.div`
	font-family: ${theme.fonts.regular};
	width: 70%;
	@media (min-width: 992px) {
		width: 40%;
	}
`;

export const WrraperLinksSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	cursor: pointer;
	ul {
		display: none;
		li {
			font-size: 16px;
			font-family: ${theme.fonts.medium};
		}
	}
	@media (min-width: 992px) {
		ul {
			width: 100%;
			list-style: none;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
`;
