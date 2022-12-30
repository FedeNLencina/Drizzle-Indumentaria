import React from "react";
import { Icon } from "react-3d-icons";
import { instagram } from "react-3d-icons";
import { Location } from "../GoogleMap/Location";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";

export const Contact = () => {
  return (
    <Container className="contactContainer d-flex justify-content-center align-items-center">
      <Row className="d-flex justify-content-center align-items-center iconRow">
        <Col xs={12} md={4} lg={1}>
          <Icon
            file={instagram}
            color={"#E4405F"}
            scale={10}
            style={{ height: "100px" }}
            spin={2}
          />
        </Col>
        <Col xs={12} md={4} lg={1}>
          <Icon
            file={instagram}
            color={"#1c1c1c"}
            scale={10}
            style={{ height: "100px" }}
          />
        </Col>
        <Col xs={12} md={4} lg={1}>
          <Icon
            file={instagram}
            color={"#1c1c1c"}
            scale={10}
            style={{ height: "100px" }}
          />
        </Col>
      </Row>
      <Row className="mapRow">
        <Location></Location>
      </Row>
    </Container>
  );
};
