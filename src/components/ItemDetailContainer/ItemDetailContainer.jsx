import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { clothes } from "../../data/dataBase";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export function ItemDetailContainer() {
  const { id } = useParams();
  console.log("product id: ", id)
  const [ropa, setRopa] = useState(0);

  const getRopa = (id) => {
     return new Promise((resolve, reject) => {
       const product = clothes.find((item) => item.id === parseInt(id));
        setTimeout(() => {
          resolve(product);
        }, 2000);
     
     });
  };

  useEffect(() => {
    const renderRopa = async () => {
      try {
        const item = await getRopa(id);
        setRopa(item);
      } catch (error) {
        console.log("hubo un error");
      }
    };
    renderRopa();
  }, [id]);
  return (
    <Container className="d-flex justify-content-center">
      <ItemDetail clothe={ropa} />
    </Container>
  );
}
