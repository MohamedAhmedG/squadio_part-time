import Breadcrumb from "components/Breadcrumb";
import { ProductDetailsStyles, ProductWrraperStyles } from "Styles/ProductDetails";
import ProductInfo from "./components/ProductInfo";
import ProductView from "./components/ProductView";

export default function ProductDetails() {
	return (
		<ProductDetailsStyles>
			<Breadcrumb />
			<ProductWrraperStyles>
				<ProductView />
				<ProductInfo />
			</ProductWrraperStyles>
		</ProductDetailsStyles>
	);
}
