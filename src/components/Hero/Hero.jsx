import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HeroCarousel } from "../HeroCarousel/HeroCarousel";
import "./Hero.css";

export function Hero() {
  return (
    <>
      <div className="hero">
        <Container className="heroContainer">
          <Row className="row">
            <Col className="text-center d-flex align-items-center">
              <div className="text-center">
                <h1 className="textHero">Drizzle indumentaria.</h1>
                <h2 className="textHero">
                  El secreto de un gran estilo, es sentirte bien con lo que
                  vistes!
                </h2>
              </div>
            </Col>
            <Col>
              <HeroCarousel />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
