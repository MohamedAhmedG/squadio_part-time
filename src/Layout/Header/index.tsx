import Container from "components/Common/Container";
import {
	HeaderStyles,
	HeaderWrraper,
	LinksSection,
	LogoStyle,
	SearchSection,
} from "Styles/Layout/HeaderStyles";
import { ReactComponent as Logo } from "Assets/Images/SVG/Logo.svg";
export default function Header() {
	return (
		<HeaderStyles>
			<Container>
				<HeaderWrraper>
					<LogoStyle>
						<Logo />
					</LogoStyle>
					<SearchSection>SearchSection</SearchSection>
					<LinksSection>LinksSection</LinksSection>
				</HeaderWrraper>
			</Container>
		</HeaderStyles>
	);
}
