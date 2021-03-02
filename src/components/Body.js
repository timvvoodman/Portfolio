import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headshot from "../assets/images/Prof Pic.jpg";

function Body() {
  return (
    <>
      <Container fluid className=" general-background">
        <Row style={{ padding: "20px" }}>
          <Col md={3}></Col>
          <Col md={6}>
            <Row className="row">
              <Col className="text-center">
                <h3>About Me</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={Headshot}
                  className="profimage"
                  alt="Tim Woodman"
                  width="150"
                  height="175"
                ></img>

                <p className="profpara gFont">
                  I am a full stack web developer with experience leading
                  award-winning teams. Recently earned a certificate in full
                  stack development from the University of New Hampshire, in
                  which I developed skills in HTML, CSS, Javascript, responsive
                  web design, and database applications. Developed strengths in
                  team based software development methodologies, deadline
                  management, and remote communications with a working team. In
                  my projects I take pride in creating an intuitive, reliable,
                  and impactful user experience. Thrilled for the chance to use
                  this skill set professionally, to develop software to drive
                  organizational success and improve user experience.{" "}
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;
