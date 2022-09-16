import Container from "react-bootstrap/esm/Container";
import "./EmptyCartModal.css";

export const EmptyCartModal = () => {
    return (
      <Container className="container">
        <div className="emptyProductModal d-flex justify-content-center">
          <h1>Aun no hay productos agregados</h1>
        </div>
      </Container>
    );
 }