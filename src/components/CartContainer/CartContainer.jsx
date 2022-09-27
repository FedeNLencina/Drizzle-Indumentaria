import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { EmptyCartModal } from "../EmptyCartModal/EmptyCartModal";
import { Link } from "react-router-dom";
import { PurchaseForm } from "../PurchaseForm/PurchaseForm";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "./CartContainer.css";

export const CartContainer = () => {
  const { productCartList, clearProductList, isInCart, getTotalPrice } =
    useContext(CartContext);
  console.log("productCartList", productCartList);
  const [idOrder, setIdOrder] = useState("");
  const date = new Date();

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
    };
    //crear referencia en la base de datos de donde voy a guardar el documento
    const queryRef = collection(db, "orders");
    //agregamos el documento
    addDoc(queryRef, order).then((respuesta) => setIdOrder(respuesta.id));
    console.log(order);
    e.preventDefault();
  };

  return (
    <Container>
      {productCartList.length > 0 ? (
        productCartList.map((item) => (
          <div className="divRender d-flex justify-content-center">
            <CartItem key={item.id} item={item} />{" "}
          </div>
        ))
      ) : (
        <>
          <div>
            <EmptyCartModal />
          </div>
          <div className="d-flex justify-content-around">
            <Link to="/itemList/vestido" className="navLink">
              Vestidos
            </Link>
            <Link to="/itemList/sweater" className="navLink">
              Sweaters
            </Link>
          </div>
        </>
      )}
      {productCartList.length > 0 ? (
        <>
          <Row>
            <Col className="colProduct d-flex justify-content-center">
              <Card className="cardRender">
                <Card.Body className="bodyRender">
                  <div className="d-flex justify-content-center">
                    <Card.Title>Precio total:</Card.Title>
                    <Card.Text> {getTotalPrice()}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Card.Title>Fecha:</Card.Title>
                    <Card.Text>{date.toLocaleDateString()}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => clearProductList()}
                    >
                      Vaciar carrito
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <PurchaseForm sendOrder={sendOrder} />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};
