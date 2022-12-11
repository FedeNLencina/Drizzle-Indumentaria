import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./PurchaseForm.css";

export function PurchaseForm({ sendOrder }) {
  const [validated, setValidated] = useState(false);
  const initialValues = { name: "", lastname: "", email: "", number: "" };
  const [formErrors, setFormErrors] = useState(initialValues);
  const [nombre, setNombre] = useState(null);
  const [apellido, setApellido] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);

  //Regex
  const nameRegex = /^[A-Z][a-z\sA-Za-z]{1,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const cellphoneRegex = /^[0-9]{10}$/;

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

  return (
    <Container className="formContainer">
      <Card.Text className="cardText">
        Para finalizar la compra llene el siguiente formulario:
      </Card.Text>
      <Card className="card formCard">
        <form onSubmit={sendOrder}>
          <Row className="row">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(event) => setNombre(event.target.value)}
              />
              {!validateName(nombre) ? (
                <Form.Control.Feedback type="invalid">
                  Please complete the name input
                </Form.Control.Feedback>
              ) : (
                <></>
              )}
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={(event) => setApellido(event.target.value)}
              />
              {!validateName(apellido) ? (
                <Form.Control.Feedback type="invalid">
                  Please complete the lastname input
                </Form.Control.Feedback>
              ) : (
                <></>
              )}
            </Form.Group>
          </Row>
          <Row className="row">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
              {!validateEmail(email) ? (
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              ) : (
                <></>
              )}
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                required
                onChange={(event) => setNumber(event.target.value)}
              />
              {!validateNumber(number) ? (
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Ceelphone number.
                </Form.Control.Feedback>
              ) : (
                <></>
              )}
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" className="submitButton">
            Submit form
          </Button>
        </form>
      </Card>
    </Container>
  );
}
