import React from "react";
import { Icon } from "react-3d-icons";
import { twitter, github } from "react-3d-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Icon
            file={twitter}
            color={"#1DA1F2"}
            scale={10}
            style={{ height: "100px", width: "100px" }}
          />
        </Col>
        <Col>
          <Icon
            file={github}
            color={"#1c1c1c"}
            scale={10}
            style={{ height: "150px", width: "150px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
