import React, { useState } from "react";
import {
	BoxQuantityAndShipping,
	ContainerCountStyle,
	ContainerShippingOption,
	ControllrCountStyle,
	ValueCountStyle,
	WrraperButtons,
	WrraperProceedToOrderStyle,
	WrraperShippingOption,
	WrraperTotalPrice,
	WrraprQuantityAndShipping,
} from "Styles/ProductDetails";
import { IShippingOption } from "Types";
import { ReactComponent as Phone } from "Assets/Images/SVG/Phone.svg";
export default function QuantityAndShipping() {
	const shippingOption = [
		{ id: "1", label: "Free", info: "Estimated 15 - 30 days" },
		{ id: "2", label: "Fast", info: "Estimated 5 - 7 days" },
		{ id: "3", label: "Rocket", info: "Estimated 2 - 5 days" },
	];
	const [selectOption, setSelectOption] = useState("1");
	const [count, setCount] = useState(1);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	const _selectOption = (item: IShippingOption) => {
		setSelectOption(item.id);
	};
	return (
		<WrraprQuantityAndShipping>
			<BoxQuantityAndShipping>
				<p>Quantity</p>
				<p>$12,000</p>
			</BoxQuantityAndShipping>
			<ContainerCountStyle>
				<ControllrCountStyle>
					<button onClick={decrement} disabled={count === 1 && true}>
						-
					</button>
					<button onClick={increment}>+</button>
				</ControllrCountStyle>
				<ValueCountStyle>{count} Pieces</ValueCountStyle>
			</ContainerCountStyle>

			<BoxQuantityAndShipping>
				<p>Shipping </p>
				<p>$100</p>
			</BoxQuantityAndShipping>
			<WrraperShippingOption>
				{shippingOption.map((item) => {
					return (
						<ContainerShippingOption
							onClick={() => _selectOption(item)}
							key={item.id}
							isActive={selectOption === item.id && true}>
							<p>{item.label}</p>
							<p>{item.info}</p>
						</ContainerShippingOption>
					);
				})}
			</WrraperShippingOption>
			<WrraperProceedToOrderStyle>
				<WrraperTotalPrice>
					<p>Total</p>
					<p>$12,100</p>
				</WrraperTotalPrice>

				<WrraperButtons>
					<button>Place order now</button>
					<button>
						<span>
							<Phone />
						</span>
						Call us
					</button>
					<p>We are 24/7 available</p>
				</WrraperButtons>
			</WrraperProceedToOrderStyle>
		</WrraprQuantityAndShipping>
	);
}
