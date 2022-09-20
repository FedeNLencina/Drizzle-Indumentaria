import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export function ItemDetailContainer() {
  const { id } = useParams();
  console.log("product id: ", id);
  const [ropa, setRopa] = useState(0);

  // const getRopa = (id) => {
  //    return new Promise((resolve, reject) => {
  //      const product = clothes.find((item) => item.id === parseInt(id));
  //       setTimeout(() => {
  //         resolve(product);
  //       }, 2000);

  //    });
  // };

  useEffect(() => {
    const getClothe = async () => {
      try {
        const queryDoc = doc(db, "items", id);
        console.log("queryDoc:", queryDoc);
        const response = await getDoc(queryDoc);
         console.log("response:", response);
        const newProduct = {
          ...response.data(),
          id: response.id,
        };
        console.log("newProduct:", newProduct);
        setRopa(newProduct);
      } catch (err) {
        console.log(err);
      }
    };
    getClothe();
  }, [id]);
  return (
    <Container className="d-flex justify-content-center">
      <ItemDetail clothe={ropa} />
    </Container>
  );
}
