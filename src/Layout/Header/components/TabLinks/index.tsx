import React from "react";
import { ReactComponent as MenuIcon } from "Assets/Images/SVG/Menu_Icon.svg";
import { ReactComponent as Orders } from "Assets/Images/SVG/Orders.svg";
import { WrraperLinksSection } from "Styles/Layout/HeaderStyles";
export default function TabLinks() {
	const links = [{ link: "Services" }, { link: "Orders" }, { link: "Account" }];
	return (
		<WrraperLinksSection>
			<ul>
				{links.map((link, index) => {
					return <li key={index}>{link.link}</li>;
				})}
				<li>
					<Orders />
				</li>
			</ul>
			<div>
				<MenuIcon />
			</div>
		</WrraperLinksSection>
	);
}
