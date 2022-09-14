import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";


export function ItemDetail({ clothe }) {
  const { addProduct } = useContext(CartContext);
  
  const onAdd = (counter) => {
    console.log("Amount", counter);
    const newProduct = {...clothe, quantity: counter};
    addProduct(newProduct);
   }
    return (
      <Container key={clothe.id}>
        {clothe && (
          <Card className="card">
            <Row className="d-flex justify-content-center">
              <Col className="d-flex justify-content-center">
                <Card.Img variant="top" src={clothe.picture} />
              </Col>
              <Col className="d-flex justify-content-center align-items-center colBody">
                <Card.Body className="d-flex flex-column justify-content-center body">
                  <Card.Title className="text-center">
                    {clothe.title}
                  </Card.Title>
                  <Card.Text className="text-center">{clothe.price}</Card.Text>
                  <div className="d-flex justify-content-center">
                    <ItemCount initial={0} stock={10} onAdd={onAdd} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        )}
      </Container>
    );
}
