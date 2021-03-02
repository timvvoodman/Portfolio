import React from "react";
//For Router
import { Link, useLocation } from "react-router-dom";
//Bootstrap dependencies
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MyNav() {
  const location = useLocation();
  return (
    <>
      <div>
        <Navbar
          collapseOnSelect
          className="bg-dark "
          expand="md"
          variant="dark"
        >
          <Navbar.Brand href="#home">
            <h5>
              <b>Tim Woodman | Full Stack Developer</b>
            </h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link
                  to="/"
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/contact"
                  className={
                    location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact Me
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default MyNav;
