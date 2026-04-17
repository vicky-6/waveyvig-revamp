// OpenPositions.jsx
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const positions = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Theni / Remote",
    experience: "2+ years experience",
    description: "We're seeking a skilled Frontend Developer proficient in React.js to join our development team.",
    skills: [
      "Strong JavaScript/TypeScript skills",
      "Experience with React.js and state management",
      "Knowledge of responsive design principles",
    ],
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    experience: "3+ years experience",
    description: "Seeking a talented UI/UX Designer to create amazing user experiences for our products.",
    skills: [
      "Proficiency in Figma/Adobe XD",
      "Strong portfolio of design work",
      "Understanding of user-centered design",
    ],
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote",
    experience: "3+ years experience",
    description: "Looking for an experienced Backend Developer to build scalable server-side applications.",
    skills: [
      "Strong Node.js/Express skills",
      "Database design (SQL/NoSQL)",
      "API development experience",
    ],
  },
];

const OpenPositions = () => {
  return (
    <Container fluid className=" pt-5 px-5 "  style={{backgroundColor:"#0b1d57"}}>
      <h2 className="text-center text-info mb-3 text-decoration-underline">Open Positions</h2>
      <p className="text-center mb-4 text-white">
        We're always looking for talented individuals to join our growing team.
      </p>
      <Row className="g-4">
        {positions.map((pos, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title>{pos.title}</Card.Title>
                  <Badge bg="info">{pos.type}</Badge>
                </div>
                <Card.Text className="text-muted mb-2">
                  <i className="bi bi-geo-alt"></i> {pos.location} <br />
                  <i className="bi bi-briefcase"></i> {pos.experience}
                </Card.Text>
                <Card.Text>{pos.description}</Card.Text>
                <ul>
                  {pos.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <Button variant="primary" className="mt-3 w-100">
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OpenPositions;
