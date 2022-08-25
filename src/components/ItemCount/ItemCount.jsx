import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

export function ItemCount(props) {
  return (
    <Container className="d-flex justify-content-center">
      <div className="itemCount d-flex justify-content-around">
        <Button variant="outline-primary">-</Button>
        <div className="d-flex flex-column justify-content-center">
          <div> {props.cantidad}</div>
          <div> 2</div>
        </div>

        <Button variant="outline-primary">+</Button>
      </div>
    </Container>
  );
}
