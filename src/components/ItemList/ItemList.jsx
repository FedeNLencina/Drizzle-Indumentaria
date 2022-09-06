import React, { useState, useEffect } from "react";
import { clothes } from "../../data/dataBase";
import Container from "react-bootstrap/esm/Container";
import { Item } from "../../components/ItemCard/Item";

export function ItemList({ clothes }) {
  // console.log("vestidos: ", vestidos);

  return (
    <Container className="d-flex justify-content-center">
      {clothes.map((vestido) => {
        return (
          <div key={vestido.id}>
            <Item item={vestido} />;
          </div>
        );
      })}
    </Container>
  );
}
