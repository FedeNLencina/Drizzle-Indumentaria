import React, { useState, useEffect } from "react";
import { vestidosList } from "../../data/vestidos";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import "./ItemDetail.css";


export function ItemDetail() {
  const [vestido, setVestido] = useState(0);

  const getVestidos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(vestidosList);
      }, 2000);
    });
  };

  useEffect(() => {
    const renderVestido = async () => {
      try {
        const listado = await getVestidos();
        setVestido(listado.find(vestido => vestido.id === 1));
      } catch (error) {
        console.log("hubo un error");
      }
    };
    renderVestido();
  }, []);
    console.log("vestido: ", vestido);
    
    return (
        <Container key={vestido.id}>
            {vestido && <Card className="card">
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center">
            <Card.Img variant="top" src={vestido.picture} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center colBody">
            <Card.Body className="d-flex flex-column justify-content-center body">
              <Card.Title className="text-center">{vestido.title}</Card.Title>
              <Card.Text className="text-center">{vestido.price}</Card.Text>
              <div className="d-flex justify-content-center buttomPurchaseContainer">
                <Button variant="primary">Purchase</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>}
    </Container>
  );
}
