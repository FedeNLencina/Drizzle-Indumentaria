import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

export function FirebasePage() {
  const [arreegloProductos, setArreegloProductos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // creo una consulta o referencia a dataBase
      const query = collection(db, "items");
      const response = await getDocs(query);
      // console.log(response);
      const docs = response.docs;
      // console.log(docs)
      const data = docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log("data", data);
      setArreegloProductos(data);
    };
    getData();
  }, []);

  return <Container></Container>;
}
