import React, { useState, useEffect } from "react";
import { vestidosList } from "../../data/vestidos";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { Item } from "../../components/ItemCard/Item";

export function ItemList() {
  const [vestidos, setVestido] = useState([]);

  const getVestidos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(vestidosList);
      }, 4000);
    });
  };

  useEffect(() => {
    const renderVestidos = async () => {
      try {
        const listado = await getVestidos();
        setVestido(listado);
      } catch (error) {
        console.log("hubo un error");
      }
    };
    renderVestidos();
  }, []);
  console.log("vestidos: ", vestidos);

  return (
    <Container className="d-flex justify-content-center">
      {vestidos.map((vestido) => {
        return <Item key={vestido.id} item={vestido} />;
      })}
    </Container>
  );
}
