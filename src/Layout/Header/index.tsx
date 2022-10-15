import Container from "components/Common/Container";
import {
	HeaderStyles,
	HeaderWrraper,
	LinksSection,
	LogoStyle,
	SearchSectionStyle,
} from "Styles/Layout/HeaderStyles";
import { ReactComponent as Logo } from "Assets/Images/SVG/Logo.svg";
import TabLinks from "./components/TabLinks";
import SearchSection from "./components/SearchSection";
export default function Header() {
	return (
		<HeaderStyles>
			<Container>
				<HeaderWrraper>
					<LogoStyle>
						<Logo />
					</LogoStyle>
					<SearchSectionStyle>
						<SearchSection />
					</SearchSectionStyle>
					<LinksSection>
						<TabLinks />
					</LinksSection>
				</HeaderWrraper>
			</Container>
		</HeaderStyles>
	);
}
