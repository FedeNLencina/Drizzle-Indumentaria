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
import swal from "sweetalert";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "./CartContainer.css";

export const CartContainer = () => {
  const { productCartList, clearProductList, getTotalPrice } =
    useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");

  //Regex
  const nameRegex = /^[A-Z][a-z\sA-Za-z]{1,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const cellphoneRegex = /^[0-9]{10}$/;

  const date = new Date();

  const validateName = (name) => {
    if (nameRegex.test(name)) {
      return true;
    }
    return false;
  };

  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  };

  const validateNumber = (number) => {
    if (cellphoneRegex.test(number)) {
      return true;
    }
    return false;
  };

  const sendOrder = (e) => {
    const name = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const number = e.target[3].value;

    e.preventDefault();

    if (
      validateName(name) &&
      validateName(lastname) &&
      validateEmail(email) &&
      validateNumber(number)
    ) {
      e.preventDefault();
      e.stopPropagation();

      const order = {
        buyer: {
          name: name,
          lastname: lastname,
          email: email,
          phone: number,
        },
        items: productCartList,
        total: getTotalPrice(),
      };
      //crear referencia en la base de datos de donde voy a guardar el documento
      const queryRef = collection(db, "orders");
      //agregamos el documento
      addDoc(queryRef, order).then((respuesta) => setIdOrder(respuesta.id));
      console.log(order);
      swal({
        title: "Finalizado",
        text: "La compra ha sido exitosa",
        icon: "success",
        button: "Finalizar",
      });
    } else {
      swal({
        title: "Error!",
        text: "Ha ocurrido un error al ingresar los datos en el formulario. Por favor corrobore que los datos sean correctos.",
        icon: "error",
        button: "Try again",
      });
    }
    e.preventDefault();
  };

  return (
    <Container className="cartContainer">
      <Row>
        {productCartList.length > 0 ? (
          productCartList.map((item) => (
            <Col xs={"12"} lg={"6"}>
              <div className="divRender d-flex justify-content-center">
                <CartItem key={item.id} item={item} />{" "}
              </div>
            </Col>
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
      </Row>
      {productCartList.length > 0 ? (
        <>
          <Row>
            <Col className="colProduct d-flex justify-content-center">
              <Card className="cardRender">
                <Card.Body className="bodyRender">
                  <div className="d-flex justify-content-center">
                    <Card.Title className="totalPrice">
                      Precio total:{" "}
                    </Card.Title>
                    <Card.Text className="totalPriceValue">
                      {" "}
                      {getTotalPrice()} ARS
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Card.Title className="date">Fecha: </Card.Title>
                    <Card.Text className="dateValue">
                      {date.toLocaleDateString()}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="buttonDeleteAll"
                      variant="outline-primary"
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
