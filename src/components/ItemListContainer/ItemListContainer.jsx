import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";

export function ItemListContainer(props) {
    const agregar = (counter) => {
        console.log("agregado, ", counter);
    }

    return (
        <Container className="text-center itemList">
            <ItemList/>
            <ItemCount stock={10} initial={1} agregarProducto={agregar}/>
        </Container>
    )
}
