import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import solutions from "../../data/solutionData";
import "./solution.css";

const OurSolution = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".solution-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    });
  }, []);

  return (
    <section className="solution-section">
      <Container>
        <motion.h2
          className="solution-title text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Solution
        </motion.h2>

        <Row className="align-items-stretch">
          {solutions.map((solution, index) => (
            <Col
              lg={3}
              md={6}
              sm={12}
              key={solution.id}
              className="mb-4 d-flex"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
                className="w-100 h-100"   // ✅ IMPORTANT
              >
                <motion.div
                  className="card-wrapper w-100 h-100"  // ✅ IMPORTANT
                  whileHover={{ scale: 1.04 }}
                >
                  <Card className="solution-card w-100 h-100 text-center">
                    
                    <Card.Body className="d-flex flex-column h-100">

                      {/* ICON */}
                      <motion.div
                        className="solution-icon"
                        whileHover={{ scale: 1.2 }}
                      >
                        {solution.icon}
                      </motion.div>

                      {/* TITLE */}
                      <Card.Title className="solution-card-title">
                        {solution.title}
                      </Card.Title>

                      {/* DESCRIPTION */}
                      <Card.Text className="solution-card-text flex-grow-1">
                        {solution.description}
                      </Card.Text>

                      {/* LINK */}
                      <Link to={solution.link} className="solution-link mt-auto">
                        Explore →
                      </Link>

                    </Card.Body>

                  </Card>
                </motion.div>
              </Tilt>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurSolution;