import Container from "react-bootstrap/Container";
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemListContainer(props) {
    return (
        <Container className="text-center">
            <ItemCount cantidad="Cantidad"/>
        </Container>
    )
}
