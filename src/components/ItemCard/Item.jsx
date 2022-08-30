import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./Item.css";

export function Item({item}) {
    return (
      <Container key={item.id}>
        <Card className = "card">
          <Card.Img variant="top" src={item.picture} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
             {item.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    );
}


