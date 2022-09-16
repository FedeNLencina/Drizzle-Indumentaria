import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../../context/CartContext";
// import "./CartItem.css";

export const CartItem = ({ item }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <Container>
      <div className="cart-item-container">
        <div className="cart-img-container">
          <img src={item.pictureUrl} alt={item.title} />
        </div>
        <div className="cart-info-container">
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <p>{item.totalPrice}</p>
          <button onClick={() => removeProduct(item.id)}>
            Eliminar producto
          </button>
        </div>
      </div>
    </Container>
  );
};
