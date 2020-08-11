import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Tabs,
  Tab,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Router,
  Link,
} from "react-router-dom";
import { BsFillEnvelopeOpenFill, BsFillEnvelopeFill } from "react-icons/bs";
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
import { MdLocationOn, MdPhoneIphone } from "react-icons/md";

import Contact from "./contact";
import FooterNavi from "./footer";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={{ marginTop: "5%" }} fluid>
        <Container>
          <Col>
            <h4>About Us Software Production</h4>
            <Row>
              <Image src="" roundedCircle />
            </Row>
          </Col>

          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="team" tabClassName="bg-warning" title="Our Team ">
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="holder.js/100px180?text=Image cap"
                    />
                    <Card.Body>
                      <Card.Title>Sachin Thakur (Team Lead)</Card.Title>
                      <Card.Text>
                        Experinced in Python And love to talk on Technology and
                        code.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        Christ Deemed To Be University
                      </ListGroupItem>
                      <ListGroupItem>Full Stack Developer</ListGroupItem>
                      <ListGroupItem>Bangalore, India</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="text-center">
                      <Card.Link href="https://github.com/sachinthakur9614">
                        <FaGithub size="30" />
                      </Card.Link>
                      <Card.Link
                        // className={FaAlignCenter}
                        className=" text-center"
                        href="https://twitter.com/_Sachin__Thakur"
                      >
                        <FaTwitter size="30" />
                      </Card.Link>{" "}
                      <Card.Link
                        // className={FaAlignRight}
                        href="https://www.linkedin.com/in/sachin-thakur-a85014146/"
                      >
                        <FaLinkedinIn size="30" FaAlignRight />
                      </Card.Link>
                    </Card.Body>
                  </Card>{" "}
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="holder.js/100px180?text=Image cap"
                    />
                    <Card.Body>
                      <Card.Title>Prithvi Patil</Card.Title>
                      <Card.Text>Experinced in Android Development</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        Christ Deemed To Be University
                      </ListGroupItem>
                      <ListGroupItem>Full Stack Developer</ListGroupItem>
                      <ListGroupItem>Bangalore, India</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="text-center">
                      <Card.Link href="https://github.com/sachinthakur9614">
                        <FaGithub size="30" />
                      </Card.Link>
                      <Card.Link href="https://twitter.com/_Sachin__Thakur">
                        <FaTwitter size="30" />
                      </Card.Link>{" "}
                      <Card.Link href="https://www.linkedin.com/in/sachin-thakur-a85014146/">
                        <FaLinkedinIn size="30" />
                      </Card.Link>
                    </Card.Body>
                  </Card>{" "}
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="holder.js/100px180?text=Image cap"
                    />
                    <Card.Body>
                      <Card.Title>Himanshu Mishra</Card.Title>
                      <Card.Text>Experinced in Android Development</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        Christ Deemed To Be University
                      </ListGroupItem>
                      <ListGroupItem>Full Stack Developer</ListGroupItem>
                      <ListGroupItem>Bangalore, India</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="text-center">
                      <Card.Link href="https://github.com/sachinthakur9614">
                        <FaGithub size="30" />
                      </Card.Link>
                      <Card.Link href="https://twitter.com/_Sachin__Thakur">
                        <FaTwitter size="30" />
                      </Card.Link>{" "}
                      <Card.Link href="https://www.linkedin.com/in/sachin-thakur-a85014146/">
                        <FaLinkedinIn size="30" />
                      </Card.Link>
                    </Card.Body>
                  </Card>{" "}
                </Col>
              </Row>
              <br></br>
            </Tab>

            <Tab eventKey="home" tabClassName="bg-warning" title="Our Services">
              <br></br>
              <br></br>
              <ListGroup variant="warning">
                <ListGroup.Item>Predicts Website Project Cost</ListGroup.Item>
                <ListGroup.Item>Predicts Android Project Cost</ListGroup.Item>
                <ListGroup.Item>
                  Predicts Machine Learning Model Cost
                </ListGroup.Item>
                <ListGroup.Item>
                  Predicts Internet of Things Project Cost
                </ListGroup.Item>
              </ListGroup>
              <br></br>
            </Tab>

            <Tab
              eventKey="profile"
              tabClassName="bg-warning"
              title="Contact Us"
            >
              <br></br>
              <Col>
                <Contact />
              </Col>
              <Col>{/* <p>We will contact yuo soon</p> */}</Col>
            </Tab>
            <Tab
              eventKey="contact"
              variant="warning"
              tabClassName="bg-warning"
              title="Headquarter"
            >
              <br></br>
              <Row>
                <Col>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d486.1229314574588!2d77.62217169468538!3d12.908785029137814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1592301422216!5m2!1sen!2sin"
                    width="550"
                    height="300"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                  <br></br>
                </Col>
                <Col>
                  <p>
                    <MdLocationOn />
                    7th Cross,4th Main Babu Reddy Road N.G.R Layout Roopena
                    <br></br> Agarhara Bommnahalli
                    <br></br> <FaCity /> Bangalore, India-560068
                  </p>
                  <p>
                    <BsFillEnvelopeFill />
                    <span> sachin.thakur@mca.christuniversity.in</span>
                  </p>
                  <p>
                    <BsFillEnvelopeFill />
                    <span> patil.prabhakar@mca.christuniversity.in</span>
                  </p>
                  <p>
                    <BsFillEnvelopeFill />
                    <span> himanshu.mishra@mca.christuniversity.in</span>
                  </p>
                  <p>
                    <FaPhoneAlt />
                    <span> Mobile No.:8792560572</span>
                  </p>
                  <Row>
                    <Col>
                      <Link href="" target="_blank">
                        <FaFacebookSquare size="50" color="#3b5998" />
                      </Link>
                    </Col>
                    <Col>
                      <Link
                        href="www.facebook.com"
                        to={{ path: "www.facebook.com" }}
                        size="50"
                        target="_blank"
                      >
                        <FaLinkedin size="50" color="#0e76a8" />
                      </Link>
                    </Col>
                    <Col>
                      <Link>
                        <FaTwitterSquare size="50" color="#00acee" />
                      </Link>
                    </Col>

                    <Col>
                      <Link>
                        <FaGithubSquare size="50" color="#211F1F" />
                      </Link>
                    </Col>
                    <Col>
                      <Link variant="warning">
                        <FaInstagramSquare
                          size="50"
                          // color="#3f729b"
                          // shadowOpacity="1.0"
                          // shadowColor="5"
                          // shadowColor="#3f729b"
                          // color="#515BD4"
                          display=" inline-block"
                          width="250px"
                          height="250px"
                          text-align="center"
                          border-radius=" 40px"
                          // color=" #fff"
                          font-size="220px"
                          line-height="250px"
                          vertical-align="middle"
                          background="#d6249f"
                          background="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
                          box-shadow="0px 3px 10px rgba(0,0,0,.25)"
                        />
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br></br>
            </Tab>
          </Tabs>

          <Col>{/* <Contact /> */}</Col>
        </Container>
        <br></br> <br></br> <br></br>
        <br></br> <br></br>
        <FooterNavi />
      </Container>
    );
  }
}

export default AboutUs;
