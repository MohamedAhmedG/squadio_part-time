import styled from "styled-components";

const ContainerStyle = styled.div`
	width: 100%;
	padding-inline: 15px;
	margin-inline: auto;

	@media (min-width: 576px) {
		max-width: 540px;
	}

	@media (min-width: 768px) {
		max-width: 720px;
	}

	@media (min-width: 992px) {
		max-width: 960px;
	}

	@media (min-width: 1200px) {
		max-width: 1140px;
	}

	@media (min-width: 1400px) {
		max-width: 1320px;
	}
`;

export default ContainerStyle;
