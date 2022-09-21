import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export function PurchaseForm({ sendOrder }) {
  return (
    <form onSubmit={sendOrder}>
      <FloatingLabel
        controlId="floatingInput"
        label="Name and username"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Number" className="mb-3">
        <Form.Control type="name" placeholder="Password" />
      </FloatingLabel>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
