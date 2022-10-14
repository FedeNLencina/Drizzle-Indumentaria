import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ItemList.css";
import { Item } from "../../components/ItemCard/Item";

export function ItemList({ clothes }) {

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        {clothes.map((vestido) => {
          return (
            <Col xs={"6"} lg={"3"} className="itemCol">
              <div key={vestido.id}>
                <Item item={vestido} />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
