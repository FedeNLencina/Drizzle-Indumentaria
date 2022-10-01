import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";

export function ItemListContainer(props) {
  const { categoria } = useParams();
  const [ropa, setRopa] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        // creo una consulta o referencia a dataBase
        setLoading(false);
        const queryRef =
          categoria === "catalogo"
            ? collection(db, "items")
            : query(
                collection(db, "items"),
                where("categoria", "==", categoria)
              );
        const response = await getDocs(queryRef);
        const docs = response.docs;
        const data = docs.map((doc) => {
          const newDoc = {
            ...doc.data(),
            id: doc.id,
          };
          return newDoc;
        });
        if (categoria === "catalogo") {
          const nuevaLista = data.filter((item) => item);
          setRopa(nuevaLista);
          setTimeout(() => {
            setLoading(true);
          }, 2000);
        } else {
          const nuevaLista = data.filter(
            (item) => item.categoria === categoria
          );
          setRopa(nuevaLista);
          setTimeout(() => {
            setLoading(true);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [categoria]);

  return (
    <Container className="text-center itemList">
      {!isLoading ? (
        <>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>{" "}
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </>
      ) : (
        <ItemList clothes={ropa} />
      )}
    </Container>
  );
}
