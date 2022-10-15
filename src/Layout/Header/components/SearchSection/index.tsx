import React from "react";
import {
	InfoFilter,
	InfoInputFilter,
	WrraperSearchSection,
} from "Styles/Layout/HeaderStyles";
import { ReactComponent as FilterIcon } from "Assets/Images/SVG/FilterIcon.svg";
import { ReactComponent as Arrow } from "Assets/Images/SVG/Arrow.svg";
export default function SearchSection() {
	return (
		<WrraperSearchSection>
			<InfoFilter>
				All
				<Arrow />
			</InfoFilter>

			<InfoInputFilter>
				<FilterIcon />
				<input type="search" placeholder="Search by product name or seller" />
			</InfoInputFilter>
		</WrraperSearchSection>
	);
}
