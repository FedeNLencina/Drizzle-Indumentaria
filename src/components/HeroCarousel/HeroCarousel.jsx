import Carousel from "react-bootstrap/Carousel";
import "./HeroCarousel.css";
export function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block carouselImg"
          src={require("../../images/carrousel/image2.png")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block carouselImg"
          src={require("../../images/carrousel/image3.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block carouselImg"
          src={require("../../images/carrousel/image4.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block carouselImg"
          src={require("../../images/carrousel/image5.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block carouselImg"
          src={require("../../images/carrousel/image6.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block carouselImg"
          src={require("../../images/carrousel/image7.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block carouselImg"
          src={require("../../images/carrousel/image10.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block carouselImg"
          src={require("../../images/carrousel/image11.png")}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
