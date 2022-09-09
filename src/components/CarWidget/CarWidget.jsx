import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./CarWidget.css";
export function CarWidget(props) {
  return (
    <div className="carWidgetContainer">
      <Link to="/cart">
        <Button
          variant="light"
          className="carWidgetButtom d-flex justify-content-around"
        >
          <i class="fa-solid fa-cart-shopping icon"></i>
          {props.number}
        </Button>
      </Link>
    </div>
  );
}
