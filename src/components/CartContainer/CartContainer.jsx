import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { EmptyCartModal } from "../EmptyCartModal/EmptyCartModal"
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/esm/Container";

export const CartContainer = () => {
  const { productCartList, clearProductList,isInCart } = useContext(CartContext);
  console.log("productCartList", productCartList);
 

  return (
    <Container>
      {productCartList.length > 0 ? (
        productCartList.map((item) => (
          <div>
            <CartItem key={item.id} item={item} />

            <button onClick={() => clearProductList()}>Vaciar carrito</button>
            <button onClick={() => isInCart(item.id)}>esta agregado?</button>
          </div>
        ))
      ) : (<>
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
    </Container>
  );
};
