import ItemLabel from "components/Common/ItemLabel";
import SectionHeader from "components/Common/SectionHeader";
import Stars from "components/Common/Stars";
import { ProductInfoStyles, RatingWrraperStyle } from "Styles/ProductDetails";
import PriceOfPiecesWrraper from "../PriceOfPiecesWrraper";
import ProductColor from "../ProductColor";
import ProductStorageCapacity from "../ProductStorageCapacity";

export default function ProductInfo() {
	return (
		<ProductInfoStyles>
			<SectionHeader title="Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale" />
			<RatingWrraperStyle>
				<ItemLabel
					title="Product Code:   578902-00"
					isBlack={false}
					lableSize="16px"
					lineHeight="22px"
					fontFamily="light"
				/>

				<Stars />

				<ItemLabel
					title="4.6"
					subTitle="(200)"
					isBlack={true}
					isSubBlack={false}
					lableSize="16px"
					lineHeight="22px"
					fontFamily="light"
				/>
			</RatingWrraperStyle>
			<PriceOfPiecesWrraper />
			<ProductColor />
			<ProductStorageCapacity/>
		</ProductInfoStyles>
	);
}
