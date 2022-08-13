import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Container className="nav">
          <Navbar.Brand href="#home" className="w-50">
            Drizzle Indumentaria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-around w-100">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;