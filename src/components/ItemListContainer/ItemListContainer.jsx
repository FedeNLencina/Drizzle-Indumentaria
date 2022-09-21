import React, { useState, useEffect } from "react";
import { clothes } from "../../data/dataBase";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";

export function ItemListContainer(props) {
  const { categoria } = useParams();
  const [ropa, setRopa] = useState([]);

  // const getVestidos = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(clothes);
  //     }, 2000);
  //   });
  // };

  useEffect(() => {
    // const renderVestidos = async () => {
    //   try {
    //     const listado = await getVestidos();
    //     const nuevaLista = listado.filter(
    //       (item) => item.categoria === categoria
    //     );
    //     setRopa(nuevaLista);
    //   } catch (error) {
    //     console.log("hubo un error");
    //   }
    // };
    // renderVestidos();
    const getData = async () => {
      try {
        // creo una consulta o referencia a dataBase
        const queryRef = query(
          collection(db, "items"),
          where("categoria", "==", categoria)
        );
        const response = await getDocs(queryRef);
        // console.log(response);
        const docs = response.docs;
        // console.log(docs)
        const data = docs.map((doc) => {
          const newDoc = {
            ...doc.data(),
            id: doc.id,
          };
          return newDoc;
        });
        const nuevaLista = data.filter((item) => item.categoria === categoria);
        setRopa(nuevaLista);
        console.log("data", data);
      } catch (error) {
        console.log(error);
      }
      // /setArreegloProductos(data);
    };
    getData();
  }, [categoria]);

  return (
    <Container className="text-center itemList">
      <ItemList clothes={ropa} />
      {/* <ItemCount stock={10} initial={1} agregarProducto={agregar}/> */}
    </Container>
  );
}
