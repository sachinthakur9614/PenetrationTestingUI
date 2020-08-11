import React, { Component, useState } from "react";
import { Form, Container, Button, Col, Row, Alert } from "react-bootstrap";
import { IoMdLogIn } from "react-icons/io";
import { GoAlert } from "react-icons/go";
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
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Router,
  Link,
} from "react-router-dom";
import FooterNavi from "./footer";

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      mobile: "",
      errors: [],
      error: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.firstname == "") {
      this.setState({
        errors: this.state.errors.concat("First name field is empty"),
        error: true,
      });
    } else if (this.state.lastname == "") {
      this.setState({
        errors: this.state.errors.concat("Last name filed is empty"),
        error: true,
      });
    } else if (this.state.email == "") {
      this.setState({
        errors: this.state.errors.concat("Email  field is empty"),
        error: true,
      });
    } else if (this.state.password == "") {
      this.setState({
        errors: this.state.errors.concat("Password field is empty"),
        error: true,
      });
    } else if (this.state.mobile == "") {
      this.setState({
        errors: this.state.errors.concat("Mobile field is empty"),
        error: true,
      });
    }
  };

  render() {
    const state = this.state.error;

    return (
      <Container fluid>
        <Container>
          <h1>Sign up on our Portal</h1>
          <Col
            className="border-primary"
            style={{ border: "4px", borderColor: "red" }}
          >
            <Form
              action="post"
              onSubmit={this.onSubmitHandler}
              className="border-primary"
            >
              {this.state.error == true &&
                this.state.errors.map((variant, idx) => (
                  <Alert variant="danger" key={idx} dismissible>
                    <Alert.Link href="#">
                      {" "}
                      <GoAlert size="26" color="red" />
                      {variant}
                    </Alert.Link>
                    .
                  </Alert>
                ))}
              <Form.Group md="4" as={Col}>
                <Form.Label>
                  First Name <sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  size="sm"
                  width="100px"
                  name="firstname"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="First name"
                ></Form.Control>
              </Form.Group>
              <Form.Group md="4" as={Col}>
                <Form.Label>
                  Last Name <sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  size="sm"
                  name="lastname"
                  width="10%"
                  type="text"
                  onChange={this.onChangeHandler}
                  placeholder="Last name"
                ></Form.Control>
              </Form.Group>
              <Form.Group md="4" as={Col}>
                <Form.Label>
                  Email Id <sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  size="sm"
                  name="email"
                  width="10%"
                  type="email"
                  onChange={this.onChangeHandler}
                  placeholder="Email"
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>
                  Password <sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  size="sm"
                  name="password"
                  type="password"
                  aria-describedby="passwordHelpInline"
                  width="10%"
                  onChange={this.onChangeHandler}
                  placeholder="Password"
                ></Form.Control>
              </Form.Group>
              <Form.Group md="4" as={Col} controlId="formGridMobile">
                <Form.Label>
                  Mobile Number <sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  size="sm"
                  name="mobile"
                  type="text"
                  onChange={this.onChangeHandler}
                  placeholder="Mobile Number"
                ></Form.Control>
              </Form.Group>
              <Link
                href="login"
                to="login"
                style={{ textDecoration: "none", marginLeft: "10%" }}
              >
                Already register with us? Login now
              </Link>
              <br></br>
              <Form.Group as={Col}>
                <br></br>
                <Button variant="warning" size="sm" type="submit">
                  Sign up
                  <IoMdLogIn size="30" color="red" fontVariant="info" />
                </Button>
              </Form.Group>
            </Form>
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
          </Col>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <FooterNavi style={{ width: "100%" }} />
      </Container>
    );
  }
}
export default signup;
