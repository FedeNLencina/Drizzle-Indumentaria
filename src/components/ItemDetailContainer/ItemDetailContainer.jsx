import Container from "react-bootstrap/esm/Container";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export function ItemDetailContainer() {
  return (
    <Container className="d-flex justify-content-center">
        <ItemDetail/>
    </Container>
  );
}
