import Title from "components/Common/Title";
import React, { useState } from "react";
import {
	StorageCapacityStyle,
	ProductStorageCapacityStyle,
	WrraperStorageCapacityStyle,
	StorageStyle,
} from "Styles/ProductDetails";
import { IStorageData } from "Types";

export default function ProductStorageCapacity() {
	const [storageSelected, setStorageSelected] = useState("1");
	const storageData = [
		{ id: "1", label: "128" },
		{ id: "2", label: "256" },
		{ id: "3", label: "512" },
	];

	const selectStorage = (item: IStorageData) => {
		setStorageSelected(item.id);
	};
	return (
		<ProductStorageCapacityStyle>
			<Title title="Storage capacity" />
			<WrraperStorageCapacityStyle>
				{storageData.map((item) => {
					return (
						<StorageCapacityStyle
							key={item.id}
							isActive={storageSelected === item.id && true}
							onClick={() => selectStorage(item)}>
							<StorageStyle>
								{item.label}
								<span>GB</span>
							</StorageStyle>
						</StorageCapacityStyle>
					);
				})}
			</WrraperStorageCapacityStyle>
		</ProductStorageCapacityStyle>
	);
}
