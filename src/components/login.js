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
import { FcGoogle } from "react-icons/fc";
import {
  FaRegAddressCard,
  FaPhoneAlt,
  FaCity,
  FaLaptopCode,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaAlignLeft,
} from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

import { GoAlert } from "react-icons/go";
import FooterNavi from "./footer";

// import Navigation from "./Navigation";
// import FooterNavi from "./footer";

class login extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Container style={{ marginTop: "5%" }}>
          <h4> Login to out Portal</h4>
          <Col>
            <Form onSubmit={this.onSubmitHandler}>
              {this.state.error == true &&
                this.state.errors.map((variant, idx) => (
                  <Alert variant="danger" key={idx} dismissible>
                    <Alert.Link href="#">
                      <GoAlert size="26" color="red" />
                      {variant}
                    </Alert.Link>
                    .
                  </Alert>
                ))}
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Email Id <sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    size="sm"
                    placeholder="Email id"
                    onChange={this.onChangeHandler}
                  ></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Password <sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    size="sm"
                    placeholder="Password"
                    onChange={this.onChangeHandler}
                  ></Form.Control>

                  <Link
                    href="forgotpassword"
                    to="forgotpassword"
                    style={{
                      float: "right",
                      marginLeft: "2%",
                      textDecoration: "none",
                    }}
                  >
                    Forgot Passowrd?
                  </Link>
                </Form.Group>
              </Form.Row>
              <Button variant="warning" size="sm" type="submit">
                Login <IoMdLogIn size="30" color="red" />
              </Button>
            </Form>{" "}
            <br></br>
            <Link href="signup" to="signup" style={{ textDecoration: "none" }}>
              Not Registered with Us? Sign Up Now!
            </Link>
          </Col>
          <br></br>
          <Row md="5">
            <Col>
              <Link style={{ textDecoration: "none" }}>
                <FcGoogle size="50" /> Login with Google
              </Link>
            </Col>
            <Col>
              <Link style={{ textDecoration: "none" }}>
                <FaGithubSquare size="50" color="#211F1F" /> Login with Github
              </Link>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <FooterNavi />
      </Container>
    );
  }
}

export default login;
