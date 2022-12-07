import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { CarWidget } from "../CarWidget/CarWidget";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar expand="lg" className="navBar">
      <Container className="nav d-flex justify-content-center">
        <div className="d-flex justify-content-center logoContainer">
          <Link to="/" className="text-center logoLink">
            <img
              alt=""
              src={require("../../images/logo/logo1.png")}
              className="d-inline-block align-top logo"
            />{" "}
          </Link>
        </div>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav navLinksContainer"> */}
        <Nav className="me-auto d-flex navBarLinks justify-content-around">
          <div className="divLinks d-flex justify-content-around">
            <Link to="/" className="navLink">
              Home
            </Link>
            <Link to="/itemList/catalogo" className="navLink">
              Catalogo
            </Link>
            <Link to="/itemList/vestido" className="navLink">
              Vestidos
            </Link>
            <Link to="/itemList/sweater" className="navLink">
              Sweaters
            </Link>
            <Link to="/itemList/remera" className="navLink">
              Remeras
            </Link>
            <Link to="#link" className="navLink">
              Contact
            </Link>
          </div>
          <div className="widgetDiv d-flex justify-content-sm-start justify-content-lg-end">
            <CarWidget />
          </div>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
