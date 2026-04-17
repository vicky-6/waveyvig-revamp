import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import TextJump from '../../ReusableComponents/TextJump';
import JumpFullText from '../../ReusableComponents/TextFullJump'


const HeroSection = () => {
  return (
    <>
    {/* Hero Section */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#0b1d57", // deep blue
          color: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Transparent background image overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/heroAi4.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
            zIndex: 0,
          }}
        ></div>

        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 className="fw-bold display-4">
                <JumpFullText>Shaping Your Vision Into</JumpFullText> {" "}<br></br>
                <span className="fw-bold" style={{ color: "#2bbcff" }}>
                  <TextJump text="Digital Solutions"></TextJump>
                </span>
              </h1>
              <p className="mt-3">
                At WaveyVigTech, from concept to execution, we craft digital
                realities that move businesses forward.
              </p>
              <div className="mt-4">
                <Button
                  as={Link}
                  to="/services"
                  variant="primary"
                  size="lg"
                  className="me-3"
                >
                  Explore Services
                </Button>
                <Button
                  as={Link}
                  to="/training"
                  variant="outline-info"
                  size="lg"
                >
                  Training & Career
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scroll down indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
          }}
          onClick={() =>
            document
              .getElementById("services-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span style={{ display: "block", color: "#2bbcff" }}>
            Scroll Down
          </span>
          <span style={{ fontSize: "24px", color: "#2bbcff" }}>▼</span>
        </div>
      </section>
      </>
  )
  
}

export default HeroSection