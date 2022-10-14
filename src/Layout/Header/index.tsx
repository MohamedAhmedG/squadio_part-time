import { HeaderStyles, LinksSection, LogoStyle, SearchSection } from "Styles/Layout/HeaderStyles";


export default function Header() {
	return (
		<HeaderStyles>
			<LogoStyle>Logo</LogoStyle>
			<SearchSection>SearchSection</SearchSection>
			<LinksSection>LinksSection</LinksSection>
		</HeaderStyles>
	);
}
