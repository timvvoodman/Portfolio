import React from "react";
//Components
import MyNav from "../MyNav";
import Footer from "../Footer";
//BootStrap Components
import { Col, Row, Card, Button, Form, Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <MyNav />
      <Container fluid className="general-background">
        <Row className="flex-grow-1" style={{ padding: "20px" }}>
          <Col class="col-md-3"></Col>
          <Col md={6}>
            <Row>
              <Col className="text-center">
                <h3>Contact</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label className="labelTextColor">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label className="labelTextColor">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formGroupMessage">
                    <Form.Label className="labelTextColor">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Message"
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <button className="myButton">Submit</button>
              </Col>
              <Col md={9}></Col>
            </Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
