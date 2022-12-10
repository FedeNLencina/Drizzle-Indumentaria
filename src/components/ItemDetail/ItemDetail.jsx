import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../../context/CartContext";
import { useContext,useState } from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";


export function ItemDetail({ clothe }) {
  const { addProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  
  const onAdd = (counter) => {
    console.log("Amount", counter);
     addProduct(clothe, counter);
     setQuantity(counter);
   }
    return (
      <Container key={clothe.id}>
        {clothe && (
          <Card className="card">
            <Row className="d-flex justify-content-center">
              <Col
                xs={"12"}
                lg={"6"}
                className="d-flex justify-content-center colImage"
              >
                <Card.Img variant="top" src={clothe.picture} />
              </Col>
              <Col
                xs={"12"}
                lg={"6"}
                className="d-flex justify-content-center align-items-center colBody"
              >
                <Card.Body className="d-flex flex-column justify-content-center bodyCard">
                  <Card.Title className="text-center">
                    {clothe.title}
                  </Card.Title>
                  <Card.Text className="text-center">{clothe.price}</Card.Text>
                  <div className="d-flex justify-content-center itemCountDiv">
                    <ItemCount initial={0} stock={10} onAdd={onAdd} />
                  </div>
                  {quantity > 0 ? (
                    <div className="d-flex justify-content-center">
                      <Link to="/cart">
                        <Button variant="outline-primary">Ir al carrito</Button>
                      </Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        )}
      </Container>
    );
}
