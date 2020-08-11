import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <h4>Contact Us</h4>
        <Col>
          {" "}
          <Form>
            <Col>
              <Form.Row>
                {" "}
                <Form.Group as={Col}>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control size="sm"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control size="sm"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control size="sm"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" size="sm"></Form.Control>
                </Form.Group>
              </Form.Row>{" "}
              <Form.Row>
                <Form.Group>
                  <Button variant="warning" size="sm" type="submit">
                    COntact Us!
                  </Button>
                </Form.Group>
              </Form.Row>
            </Col>
          </Form>
        </Col>
      </Container>
    );
  }
}

export default Contact;
