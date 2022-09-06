import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import "./Item.css";

export function Item({item}) {
    return (
      <Container key={item.id}>
        <Card className="card">
          <Card.Img variant="top" src={item.picture} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Link to={`/item/${item.id}`}>
              <Button variant="primary">Ver</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    );
}


