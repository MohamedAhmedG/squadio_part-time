import ItemLabel from "components/Common/ItemLabel";
import React from "react";
import {
	CardPriceStyle,
	PriceOfPiecesWrraperStyle,
	PriceStyle,
} from "Styles/ProductDetails";

export default function PriceOfPiecesWrraper() {
	const Data = [
		{
			pieces: "10 - 25 Pieces",
			price: "AED 1,150,50.00",
		},
		{
			pieces: "10-19 Pieces",
			price: "$1,145.00",
		},
		{
			pieces: "50+ Pieces",
			price: "$1,145.00",
		},
	];

	return (
		<PriceOfPiecesWrraperStyle>
			{Data.map((item, index) => {
				return (
					<CardPriceStyle key={index}>
						<ItemLabel
							subTitle={item.pieces}
							isBlack={true}
							isSubBlack={true}
							lableSize="12px"
							lineHeight="16px"
							fontFamily="light"
						/>
						<PriceStyle>{item.price}</PriceStyle>
					</CardPriceStyle>
				);
			})}
		</PriceOfPiecesWrraperStyle>
	);
}
