import Container from "react-bootstrap/Container";
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemListContainer(props) {

    const agregar = (counter) => {
        console.log("agregado, ", counter);
    }

    return (
        <Container className="text-center">
            <ItemCount stock={10} initial={1} agregarProducto={agregar}/>
        </Container>
    )
}
