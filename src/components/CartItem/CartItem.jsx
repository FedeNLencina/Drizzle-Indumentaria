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
          <Col className="d-flex justify-content-around">
            <Col
              xs={"12"}
              lg={"6"}
              className="d-flex justify-content-center colImg"
            >
              <Card.Img
                className="cardImg"
                variant="top"
                src={item.picture}
                alt={item.title}
              />
            </Col>
            <Col
              xs={"12"}
              lg={"6"}
              className="d-flex align-content-center colDescription"
            >
              <Card.Body className="d-flex flex-column justify-content-center body">
                <Card.Title className="text-center title">
                  {item.title}
                </Card.Title>
                <Card.Text className="text-center price">
                  Precio: {item.price}
                </Card.Text>
                <Card.Text className="text-center quantity">
                  Cantidad: {item.quantity}
                </Card.Text>
                <Card.Text className="text-center totalAmount">
                  Precio total: {item.totalPrice}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    className="buttonDelete"
                    variant="outline-primary"
                    onClick={() => removeProduct(item.id)}
                  >
                    Eliminar producto
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
