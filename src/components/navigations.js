import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Image, Container } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import SignUp from "./SignUp";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdDevicesOther } from "react-icons/md";
import {
  BrowserRouter,
  Route,
  Redirect,
  Link,
  Switch,
  Router,
} from "react-router-dom";
import {
  FaRegAddressCard,
  FaPhoneAlt,
  FaCity,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

class Navigation extends Component {
  render() {
    return (
      // <Container fluid>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ height: "120px", textAlign: "end" }}
        bg="warning"
        variant="warning"
      >
        <Navbar.Brand href="home" to="home">
          <Image src={"/static/logo.png"} />
          <Link
            href="home"
            to="home"
            style={{ textDecoration: "none", marginTop: "100px" }}
            to=""
          >
            Software Product
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/facilities" to="facilities">
              Facilities
            </Nav.Link>
            <Nav.Link href="website" to="services" className="text-primary">
              Services
            </Nav.Link>
            <Nav.Link href="aboutus" to="aboutus" className="text-primary">
              About Us
            </Nav.Link>

            <NavDropdown
              title="Facilities"
              className="text-primary  "
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                href="website"
                to="website"
                className="text-primary bg-warning "
              >
                <FaLaptopCode size="25" color="blue" /> Website
              </NavDropdown.Item>
              <NavDropdown.Item
                href="android"
                to="android"
                className="text-primary bg-warning "
              >
                <FaMobileAlt size="25" color="blue" /> Android{" "}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="machinelearning"
                to="machinelearning"
                className="text-primary bg-warning "
              >
                <GiArtificialIntelligence size="25" color="blue" /> Machine
                Learning
              </NavDropdown.Item>

              <NavDropdown.Item
                href="iot"
                to="iot"
                className="text-primary bg-warning "
              >
                <MdDevicesOther size="25" color="blue" /> Internet of Things{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login" to="/login" className="text-primary">
              Sign in
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              to="/signup"
              className="text-primary"
              href="/signup"
            >
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
