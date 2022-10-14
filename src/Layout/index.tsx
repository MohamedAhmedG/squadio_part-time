
import Container from "components/Common/Container";
import { IChildren } from "Types";
import Header from "./Header";

export default function Layout({ children }: IChildren) {
	return (
		<div>
			<Header />
			<Container children={children} />
		</div>
	);
}
