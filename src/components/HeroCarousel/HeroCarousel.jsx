import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import "./HeroCarousel.css";
export function HeroCarousel() {
  return (
    <Container className="carouselContainer">
      <Carousel className="carousel">
        <Carousel.Item interval={4000} className="item">
          <img
            className="d-block carouselImg"
            src={require("../../images/carrousel/image3.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000} className="item">
          <img
            className="d-block carouselImg"
            src={require("../../images/carrousel/image4.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000} className="item">
          <img
            className="d-block carouselImg"
            src={require("../../images/carrousel/image6.png")}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
