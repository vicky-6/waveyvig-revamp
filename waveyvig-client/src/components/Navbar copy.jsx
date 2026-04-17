import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import LiveBootCamp from "../pages/LiveBootCamp/LiveBootCamp";
import AuthModal from "../components/Auth/AuthModal";

function WaveyvigTechNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("login"); // 👈 keep this

  const location = useLocation();

  const handleClose = () => setExpanded(false);

  // Token check
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  // Scroll effect
  const handleScroll = () => {
    setNavBackground(window.scrollY > 50 ? "#1e3a8a" : "transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (location.pathname !== "/home") {
      setNavBackground("#1e3a8a");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        fixed="top"
        expanded={expanded}
        style={{
          backgroundColor: navBackground,
          transition: "0.4s",
        }}
      >
        <Container>
          <Navbar.Brand className="fw-bold text-white">
            Waveyvig-Tech
          </Navbar.Brand>

          <Navbar.Toggle onClick={() => setExpanded(!expanded)} />

          <Navbar.Collapse>
            <Nav className="ms-auto gap-2">
              <Nav.Link as={Link} to="/home" onClick={handleClose}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/services" onClick={handleClose}>
                Services
              </Nav.Link>

              <Nav.Link as={Link} to="/training" onClick={handleClose}>
                Training
              </Nav.Link>

              <Nav.Link as={Link} to="/careers" onClick={handleClose}>
                Careers
              </Nav.Link>

              <Nav.Link as={Link} to="/about" onClick={handleClose}>
                About
              </Nav.Link>

              <LiveBootCamp />

              {/* WhatsApp */}
              <Button
                as="a"
                href="https://wa.me/918248429488"
                target="_blank"
                variant="success"
              >
                WhatsApp
              </Button>

              {/* 🔥 AUTH */}
              {!isLoggedIn ? (
                <NavDropdown title="Account">
                  <NavDropdown.Item
                    onClick={() => {
                      setAuthType("login");
                      setShowAuth(true);
                    }}
                  >
                    Login
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      setAuthType("signup");
                      setShowAuth(true);
                    }}
                  >
                    Signup
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="My Account">
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/dashboard">
                    Dashboard
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ FIXED MODAL CALL */}
      {showAuth && (
        <AuthModal
          type={authType}
          onClose={() => setShowAuth(false)} // ✅ MUST BE FUNCTION
        />
      )}
    </>
  );
}

export default WaveyvigTechNavbar;
