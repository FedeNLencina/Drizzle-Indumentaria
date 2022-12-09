import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

import { CarWidget } from "../CarWidget/CarWidget";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
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
        
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="colapsedButton"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto d-flex navBarLinks justify-content-around">
              <Nav.Link
                href="#"
                className="d-flex justify-content-between navLinkHome"
              >
                <div className="d-flex justify-content-sm-start">
                  <Link to="/" className="navLinkHomeA text-center">
                    Home
                  </Link>
                </div>
                <Link to="#" className="navWidgetResponsive">
                  <div className="widgetDivResponsive d-flex justify-content-sm-center justify-content-lg-end">
                    <CarWidget />
                  </div>
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="/itemList/catalogo" className="navLink text-center">
                  Catalogo
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="/itemList/vestido" className="navLink text-center">
                  Vestidos
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="/itemList/sweater" className="navLink text-center">
                  Sweaters
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="/itemList/remera" className="navLink text-center">
                  Remeras
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="#link" className="navLink text-center">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link href="#" className="navWidget">
                <div className="widgetDiv d-flex justify-content-sm-center justify-content-lg-end">
                  <CarWidget />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}
