import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import PlotsofGold from "./assets/images/PlotsofGold.PNG";
import DayPlanner from "./assets/images/day planner.PNG";
import HikerHelper from "./assets/images/Hiker Helper.PNG";
import CodingQuiz from "./assets/images/Coding Quiz.PNG";

function Projects() {
  return (
    <>
      <Container fluid>
        <Row className="general-background" style={{ padding: "20px" }}>
          <Col md={3}></Col>
          <Col md={6} sm={12} className="text-center">
            <Row>
              <Col className="text-center" style={{ marginBottom: "15px" }}>
                <h3>Projects</h3>
                <p style={{ color: "#cfdac8" }}>
                  <i>Click on images for links to delpoyed site and repo.</i>
                </p>
              </Col>
            </Row>
            {/* <!--Start of Project Cards--> */}
            <Row className="text-center">
              {/* <!-- Card One --> */}
              <Col className="text-center" md={6} sm={12}>
                <Card
                  className="bg-dark text-white"
                  style={({ width: "275px" }, { margin: "10px" })}
                >
                  <Card.Img variant="top" src={PlotsofGold} height="220px" />
                  <Card.Body>
                    <Card.Title>Plot of Gold</Card.Title>
                    <Card.Text>
                      <p>
                        <a href="https://github.com/timvvoodman/Plot-Of-Gold">
                          GitHub Repo
                        </a>
                      </p>
                      <p>
                        <a href="https://plotofgold.herokuapp.com/">
                          Deployed Application
                        </a>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* <!-- Card Two --> */}
              <Col md={6} sm={12} className="text-center">
                <Card
                  className="bg-dark text-white"
                  style={({ width: "275px" }, { margin: "10px" })}
                >
                  <Card.Img variant="top" src={HikerHelper} height="220px" />
                  <Card.Body>
                    <Card.Title>Hiker Helper</Card.Title>
                    <Card.Text>
                      <p>
                        <a href="https://github.com/EddiePhi/HikerHelper">
                          GitHub Repo
                        </a>
                      </p>
                      <p>
                        <a href="https://eddiephi.github.io/HikerHelper/">
                          Deployed Application
                        </a>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              {/* <!-- Card Three --> */}
              <Col md={6} sm={12} className="text-center">
                <Card
                  className="bg-dark text-white"
                  style={({ width: "275px" }, { margin: "10px" })}
                >
                  <Card.Img variant="top" src={DayPlanner} height="220px" />
                  <Card.Body>
                    <Card.Title>Day Planner</Card.Title>
                    <Card.Text>
                      <p>
                        <a href="https://github.com/timvvoodman/Day-Planner">
                          GitHub Repo
                        </a>
                      </p>
                      <p>
                        <a href="https://timvvoodman.github.io/Day-Planner/">
                          Deployed Application
                        </a>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* <!-- Card Four --> */}
              <Col md={6} sm={12} className="text-center">
                <Card
                  className="bg-dark text-white"
                  style={({ width: "275px" }, { margin: "10px" })}
                >
                  <Card.Img variant="top" src={CodingQuiz} height="220px" />
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      Coding Quiz
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <a href="https://github.com/timvvoodman/Coding-Quiz">
                          GitHub Repo
                        </a>
                      </p>
                      <p>
                        <a href="https://timvvoodman.github.io/Coding-Quiz/">
                          Deployed Application
                        </a>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
