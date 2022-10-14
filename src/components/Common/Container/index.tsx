import ContainerStyle from "Styles/Common/ContainerStyle";
import { IChildren } from "Types";



export default function Container({ children }: IChildren) {
	return <ContainerStyle>{children}</ContainerStyle>;
}
