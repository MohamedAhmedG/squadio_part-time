import styled from "styled-components";
import theme from "Styles/Theme";
import { IIsActiveColor } from "Types";

const CommonStyleSpecifications = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 20px;
	margin-top: ${theme.Sizes.SpaceBetweenSections};
	@media (min-width: 576px) {
		flex-direction: row;
		align-items: center;
	}
`;
const CommonItemStyle = styled.div<IIsActiveColor>`
	border-radius: 10px;
	padding: 10px 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${({ isActive }) => isActive && theme.colours.grey};
	gap: 10px;
	&:hover {
		background-color: ${theme.colours.grey};
		cursor: pointer;
	}
`;

export const ProductDetailsStyles = styled.section``;

export const ProductWrraperStyles = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 40px;
	flex-direction: column;

	@media (min-width: 992px) {
		flex-direction: row;
	}
`;

export const ProductViewStyles = styled.section`
	border: 1px solid #000;
	width: 100%;
`;

// =====ProductInfo====
export const ProductInfoStyles = styled.section`
	border: 1px solid #000;
	width: 100%;
`;
// =====ProductInfo====

// =====Rating====
export const RatingWrraperStyle = styled.section`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 10%;
	margin-bottom: ${theme.Sizes.SpaceBetweenSections};
	@media (min-width: 576px) {
		align-items: center;
		flex-direction: row;
	}
`;
// =====Rating====

// =====Price====
export const PriceOfPiecesWrraperStyle = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	gap: 8px;
	margin-bottom: ${theme.Sizes.SpaceBetweenSections};
	@media (min-width: 576px) {
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
`;
export const CardPriceStyle = styled.div`
	width: 100%;
	label {
		justify-content: flex-start;
	}
`;

export const PriceStyle = styled.div`
	font-family: ${theme.fonts.medium};
	font-size: clamp(18px, 1.5vw, 22px);
	line-height: 32px;
`;
// =====Price====

// =====ColorOption====
export const ProductColorStyle = styled.div`
	margin-bottom: ${theme.Sizes.SpaceBetweenSections};
`;
export const WrraperColorsOptionsStyle = styled(CommonStyleSpecifications)``;
export const ColorOptionStyle = styled(CommonItemStyle)``;
export const WrraperIcon = styled.div`
	width: 31px;
	height: 31px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;
export const WrraperColor = styled.div`
	font-size: 18px;
	color: ${theme.colours.primary};
	font-family: ${theme.fonts.light};
`;
// =====ColorOption====

// =====StorageCapacity====
export const ProductStorageCapacityStyle = styled.div`
	margin-bottom: ${theme.Sizes.SpaceBetweenSections};
`;
export const WrraperStorageCapacityStyle = styled(CommonStyleSpecifications)``;

export const StorageCapacityStyle = styled(CommonItemStyle)`
	padding: 5px 40px;
`;
export const StorageStyle = styled.div`
	font-size: 32px;
	font-family: ${theme.fonts.medium};
	color: ${theme.colours.primary};
	span {
		margin-left: 8px;
		font-family: ${theme.fonts.light};
		font-size: 12px;
	}
`;
// =====StorageCapacity====

// =====QuantityAndShipping====
export const WrraprQuantityAndShipping = styled.div``;
export const BoxQuantityAndShipping = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	margin-bottom: ${theme.Sizes.SpaceBetweenSections};
	p {
		font-size: 20px;
		font-family: ${theme.fonts.medium};
		&:first-child {
			color: ${theme.colours.primary};
		}
		&:last-child {
			color: ${theme.colours.red};
		}
	}
`;

export const ContainerCountStyle = styled.div`
	gap: 27px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: ${theme.Sizes.SpaceBetweenSections};
`;
export const ControllrCountStyle = styled.div`
	background-color: ${theme.colours.grey};
	border-radius: 60px;
	padding: 3px 9px;
	button {
		color: ${theme.colours.DarkBlue};
		background-color: transparent;
		border: none;
		font-size: 30px;
		cursor: pointer;
		padding: 0 20px;
	}
`;
export const ValueCountStyle = styled.div`
	font-size: 18px;
	font-family: ${theme.fonts.medium};
`;
// =====QuantityAndShipping====
