import React, { Component } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

import FooterNavi from "./footer";
class Clients extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <br></br>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" height="500" src="logo.jpeg" />
                <Card.Body>
                  <Card.Text className="text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br></br>
        <FooterNavi />
      </Container>
    );
  }
}

export default Clients;
