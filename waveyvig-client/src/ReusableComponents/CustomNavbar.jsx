// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // only if routing is enabled

const CustomNavbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Inline Styles */}
      <style>
        {`
          .navbar-transparent {
            background: transparent !important;
            transition: background-color 0.4s ease;
          }

          .navbar-colored {
            background: #000000 !important; /* Black background */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          }

          .nav-link-custom {
            color: #f0f0f0 !important;
            margin: 0 10px;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .nav-link-custom:hover {
            color: #04dead !important;
          }
        `}
      </style>

      <Navbar
        expand="lg"
        fixed="top"
        className={`py-3 ${navBackground ? "navbar-colored" : "navbar-transparent"}`}
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              color: "#04dead",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            WaveyVig
          </Navbar.Brand>

          {/* Mobile toggle */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link-custom">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">
                Contact
              </Nav.Link>

              <Button
                variant="outline-info"
                className="ms-3 px-4"
                style={{
                  borderRadius: "20px",
                  borderColor: "#04dead",
                  color: "#04dead",
                }}
              >
                Get Started
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
