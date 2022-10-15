import React, { useState } from "react";
import {
	ThumbImage,
	WrraperMainImage,
	WrraperSliderSection,
	WrraperThumbImages,
} from "Styles/ProductDetails";
import product_1 from "Assets/Images/PNG/product_1.png";
import product_2 from "Assets/Images/PNG/product_2.png";
import product_3 from "Assets/Images/PNG/product_3.png";
import product_4 from "Assets/Images/PNG/product_4.png";

export default function SliderSection() {
	const [imageSelected, setImageSelected] = useState<any>(product_1);
	const allImage = [
		{
			imag: product_2,
		},
		{
			imag: product_3,
		},
		{
			imag: product_4,
		},
	];
	return (
		<WrraperSliderSection>
			<WrraperMainImage>
				<img src={imageSelected} alt="iphone" />
			</WrraperMainImage>
			<WrraperThumbImages>
				{allImage.map((item, index) => {
					return (
						<ThumbImage key={index}>
							<img
								src={item.imag}
								alt="iphone"
								onClick={() => setImageSelected(item.imag)}
							/>
						</ThumbImage>
					);
				})}
			</WrraperThumbImages>
		</WrraperSliderSection>
	);
}
