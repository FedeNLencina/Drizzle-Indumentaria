import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { CarWidget } from "../CarWidget/CarWidget";

export function NavBar() {
  return (
    <Navbar expand="lg" className="navBar">
      <Container className="nav d-flex justify-content-evenly">
        <Navbar.Brand href="#home" className="text-center logoContainer">
          <img
            alt=""
            src={require("../../images/logo/logo1.png")}
            className="d-inline-block align-top logo"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navLinksContainer">
          <Nav className="me-auto navBarLinks justify-content-end">
            <Nav.Link href="#home" className="navLink">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              Products
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              Contact
            </Nav.Link>
            <CarWidget number="4" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
