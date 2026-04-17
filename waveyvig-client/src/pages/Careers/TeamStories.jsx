import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const TeamStories = () => {
  const stories = [
    {
      name: "Bhuvan K.",
      role: "Frontend Developer",
      years: "2 years at Waveyvig",
      message:
        "Working at WaveyVig as a frontend developer has been an incredible experience. The team’s guidance and innovative projects pushed me to improve my skills every day",
      avatar: "/avatar1.avif", // replace with actual image URL
    },
    {
      name: "Vignesh S.",
      role: "QA Engineer",
      years: "1.5 years at Waveyvig",
      message:
        "Joining WaveyVig as a junior QA engineer was a turning point in my career. The learning opportunities and collaborative environment made growth fast and enjoyable",
      avatar: "/avatar3.jpeg",
    },
    {
      name: "monika S.",
      role: "Software Developer",
      years: "3 years at Waveyvig",
      message:
        "WaveyVig offered me the perfect platform to kickstart my software development journey. The mentorship, challenging tasks, and supportive colleagues helped me achieve milestones I never thought possible.",
      avatar: "/avatar2.jpeg",
    },
  ];

  return (
    <Container className="py-5" style={{ color: "#00c0d7" }}>
      <h3 className="text-center mb-4">Team Stories</h3>
      <p className="text-center mb-5" style={{ color: "#ffffffaa" }}>
        Hear from our team members about their experiences at Zhahi.
      </p>
      <Row className="g-4">
        {stories.map((story, index) => (
          <Col key={index} md={4}>
            <Card className="p-3 h-100" style={{ backgroundColor: "#ffffff" }}>
              <Card.Body>
                <Card.Text style={{ fontStyle: "italic" }}>{`"${story.message}"`}</Card.Text>
                <div className="d-flex align-items-center mt-3">
                  <Image src={story.avatar} roundedCircle width={50} height={50} />
                  <div className="ms-3">
                    <h6 className="mb-0">{story.name}</h6>
                    <small className="text-muted">{story.role} - {story.years}</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamStories;
