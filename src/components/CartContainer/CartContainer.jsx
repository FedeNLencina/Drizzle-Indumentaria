import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { EmptyCartModal } from "../EmptyCartModal/EmptyCartModal"
import { Link } from 'react-router-dom';
import { PurchaseForm } from '../PurchaseForm/PurchaseForm';
import Container from "react-bootstrap/esm/Container";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

export const CartContainer = () => {
  const { productCartList, clearProductList,isInCart, getTotalPrice } = useContext(CartContext);
  console.log("productCartList", productCartList);
  const [idOrder, setIdOrder] = useState("");
  const date = new Date();

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
    };
    //crear referencia en la base de datos de donde voy a guardar el documento
    const queryRef = collection(db, "orders");
    //agregamos el documento
    addDoc(queryRef, order).then((respuesta) => setIdOrder(respuesta.id));
    console.log(order);
    e.preventDefault();
  };
 

  return (
    <Container>
      {productCartList.length > 0 ? (
        productCartList.map((item) => (
          <div>
            <CartItem key={item.id} item={item} />
            <p>Precio total: {getTotalPrice()}</p>
            <p>Fecha: {date.getDate()}</p>
            <button onClick={() => clearProductList()}>Vaciar carrito</button>
            <button onClick={() => isInCart(item.id)}>esta agregado?</button>
            <PurchaseForm sendOrder={sendOrder}/>
          </div>
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
    </Container>
  );
};
