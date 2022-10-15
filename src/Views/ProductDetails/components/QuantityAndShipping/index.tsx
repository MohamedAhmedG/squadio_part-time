import React, { useState } from "react";
import {
	BoxQuantityAndShipping,
	ContainerCountStyle,
	ControllrCountStyle,
	ValueCountStyle,
	WrraprQuantityAndShipping,
} from "Styles/ProductDetails";

export default function QuantityAndShipping() {
	const [count, setCount] = useState(1);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
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
		</WrraprQuantityAndShipping>
	);
}
