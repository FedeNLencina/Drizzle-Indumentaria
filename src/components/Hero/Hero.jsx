import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HeroCarousel } from "../HeroCarousel/HeroCarousel";
import "./Hero.css";

export function Hero() {
  return (
    <>
      <div className="hero">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="textHero">
                El secreto de un gran estilo, es sentirte bien con lo que vistes
              </h2>
            </Col>
            <Col className="justify-content-center">
              <HeroCarousel/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
