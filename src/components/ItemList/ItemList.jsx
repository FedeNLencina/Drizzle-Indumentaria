import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Item } from "../../components/ItemCard/Item";

export function ItemList({ clothes }) {

  return (
    <Container className="d-flex justify-content-center">
      {clothes.map((vestido) => {
        return (
          <div key={vestido.id}>
            <Item item={vestido} />
          </div>
        );
      })}
    </Container>
  );
}
