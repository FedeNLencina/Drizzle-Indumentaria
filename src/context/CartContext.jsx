import { createContext, useContext, useState } from "react";


export const CartContext = createContext();

export function CartProvider({ children }) {
  const [productCartList, setProductCartList] = useState([]);

  const addProduct = (product) => {
    const newList = [...productCartList, product];
    setProductCartList(newList);
  };

  const removeProduct = (idProduct) => {
    const copyArray = [...productCartList];
    const newArray = copyArray.filter((elm) => elm.id !== idProduct);
    setProductCartList(newArray);
    };
    
    const clearProductList= () => {
        setProductCartList([]);
    }

    const isInCart = (id) => {
      const elmIndex = productCartList.findIndex(
        (product) => product.id === id
      );
      if (elmIndex >= 0) {
        return { exists: true, index: elmIndex };
      } else {
        return { exists: false, index: undefined };
      }
    };

  return (
    <CartContext.Provider
      value={{ productCartList, addProduct, removeProduct,clearProductList,isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
