import Button from "react-bootstrap/Button";
import "./CarWidget.css";
export function CarWidget(props) {
  return (
    <div className="carWidgetContainer">
      <Button
        variant="light"
        className="carWidgetButtom d-flex justify-content-around"
      >
        <i class="fa-solid fa-cart-shopping icon"></i>
        {props.number}
      </Button>
    </div>
  );
}
