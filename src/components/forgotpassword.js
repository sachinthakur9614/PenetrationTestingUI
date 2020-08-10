import React, { Component } from "react";
import { Form, Button, Col, Row, Alert, Container } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Router,
  Link,
} from "react-router-dom";

import { IoMdLogIn } from "react-icons/io";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      errors: [],
      error: false,
    };
  }
  render() {
    return (
      <Container fluid>
        <Container>
          <Col>
            <br></br>
            <h3>Change the password</h3>

            <Form>
              <Col>
                {this.state.error == false &&
                  this.state.errors.map((variant, idx) => (
                    <Alert variant="danger" key={idx} dismissible>
                      <Alert.Link href="#">{variant}</Alert.Link>.
                    </Alert>
                  ))}

                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>
                      Email Id <sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control
                      width="50"
                      size="sm"
                      type="email"
                    ></Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>
                      New Password <sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="password" size="sm"></Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>
                      Confirm New Password <sup className="text-danger">*</sup>
                    </Form.Label>
                    <Form.Control type="password" size="sm"></Form.Control>
                  </Form.Group>
                </Form.Row>
                <Row>
                  {" "}
                  <Link
                    href="login"
                    to="login"
                    style={{
                      float: "right",
                      marginLeft: "26%",
                      textDecoration: "none",
                    }}
                  >
                    Login Now
                  </Link>
                </Row>

                <Button
                  variant="warning"
                  style={{ height: "8%", marginTop: "3%" }}
                  type="submit"
                >
                  Change Password <IoMdLogIn size="30" color="red" />
                </Button>
              </Col>
            </Form>
          </Col>
        </Container>
      </Container>
    );
  }
}

export default ForgotPassword;
