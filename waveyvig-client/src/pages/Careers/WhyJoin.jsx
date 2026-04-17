import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa'; // example icons

const WhyJoin = () => {
  const reasons = [
    {
      icon: <FaUsers size={40} color="#0b1d57" />,
      title: "Community",
      description: "Be part of a supportive and engaging community."
    },
    {
      icon: <FaLightbulb size={40} color="#0b1d57" />,
      title: "Learning",
      description: "Access resources and knowledge to grow your skills."
    },
    {
      icon: <FaHandshake size={40} color="#0b1d57" />,
      title: "Collaboration",
      description: "Work together on projects and ideas with peers."
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center text-info mb-3 text-decoration-underline">Why Join Us?</h2>
      <Row className="g-4">
        {reasons.map((reason, index) => (
          <Col key={index} md={4}>
            <Card className="text-center h-100 p-3 shadow-sm">
              <div className="mb-3">{reason.icon}</div>
              <Card.Title>{reason.title}</Card.Title>
              <Card.Text>{reason.description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyJoin;
