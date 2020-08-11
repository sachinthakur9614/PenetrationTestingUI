import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, NavDropdown, Image, Container } from "react-bootstrap";

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
import Navigation from "./components/navigations";
import login from "./components/login";
import ForgotPassword from "./components/forgotpassword";
import signup from "./components/signup";
import Clients from "./components/clients";
import AboutUs from "./components/aboutus";
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
          <script
            src="https://unpkg.com/react/umd/react.production.min.js"
            crossorigin
          ></script>

          <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin
          ></script>

          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
          ></script>
        </head>

        <Route path="" exact component={Navigation} />

        <Route path="/signup" exact component={signup} />
        <Route path="/login" exact component={login} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route path="/clients" exact component={Clients} />
        <Route path="/aboutus" exact component={AboutUs} />

        {/* <Route path="/android" exact component={Android} /> */}
        {/* <Route path="/iot" exact component={InternetOfThings} /> */}
        {/* <Route path="/machinelearning" exact component={MachineLearning} /> */}
        {/* <Route path="/facilities" exact component={Facilities} /> */}
        {/* <Route path="/home" exact component={Home} /> */}
        {/* <Route path="/user" exact component={UserNavigation} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
