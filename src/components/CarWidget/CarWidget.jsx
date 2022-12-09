import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CarWidget.css";

export function CarWidget() {
  const { getTotalProducts } = useContext(CartContext);

  return (
    <div className="carWidgetContainer">
      <>
        <Link to="/cart">
          <Button
            variant="light"
            className="carWidgetButtom d-flex justify-content-around"
          >
            <i class="fa-solid fa-cart-shopping icon"></i>
            {getTotalProducts()}
          </Button>
        </Link>
      </>
    </div>
  );
}
