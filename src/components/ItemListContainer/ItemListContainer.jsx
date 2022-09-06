import React, { useState, useEffect } from "react";
import { clothes } from "../../data/dataBase";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
// import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export function ItemListContainer(props) {
  // const agregar = (counter) => {
  //     console.log("agregado, ", counter);
  // }
  const { tipoRopa } = useParams();
  const [ropa, setRopa] = useState([]);

  const getVestidos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(clothes);
      }, 2000);
    });
  };

  useEffect(() => {
    const renderVestidos = async () => {
      try {
        const listado = await getVestidos();
        const nuevaLista = listado.filter(
          (item) => item.categoria === tipoRopa
        );
        setRopa(nuevaLista);
      } catch (error) {
        console.log("hubo un error");
      }
    };
    renderVestidos();
  }, [tipoRopa]);

  return (
    <Container className="text-center itemList">
      <ItemList clothes={ropa} />
      {/* <ItemCount stock={10} initial={1} agregarProducto={agregar}/> */}
    </Container>
  );
}
