import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

export function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const dicrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <div className="itemCount d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-around">
          <Button variant="outline-primary" onClick={dicrease}>
            -
          </Button>
          <div className="d-flex flex-column justify-content-center">
            <div>{counter}</div>
          </div>

          <Button variant="outline-primary" onClick={increase}>
            +
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button variant="outline-primary" onClick={() => onAdd(counter)}>
            Agregar al carrito
          </Button>
        </div>
      </div>
    </Container>
  );
}
