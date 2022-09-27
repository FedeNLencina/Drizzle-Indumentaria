import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

export const CartItem = ({ item }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <Container key={item.id} className="cartItemContainer">
      <Card className="card">
        <Row className="d-flex justify-content-around">
          <Col>
            <Card.Img
              className="cardImg"
              variant="top"
              src={item.picture}
              alt={item.title}
            />
          </Col>
          <Col className="d-flex align-content-center colBody">
            <Card.Body className="d-flex flex-column justify-content-center body">
              <Card.Title className="text-center">{item.title}</Card.Title>
              <Card.Text className="text-center">
                Precio: {item.price}
              </Card.Text>
              <Card.Text className="text-center">
                Cantidad: {item.quantity}
              </Card.Text>
              <Card.Text className="text-center">
                Precio total: {item.totalPrice}
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => removeProduct(item.id)}
                >
                  Eliminar producto
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
