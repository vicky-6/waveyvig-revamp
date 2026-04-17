import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TrainingHeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/traininghero3.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '200px 0',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 font-weight-bold mb-4">Build Your Career With Waveyvig</h1>
            <p className="lead mb-4">
              Be part of a team where innovation meets impact—work on the latest technology solutions with us!.
            </p>
            <div>
              <Button variant="primary" size="lg" className="mr-3">
                View Open Positions
              </Button>
              <Button variant="outline-light" size="lg">
                Why Join Us?
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrainingHeroSection;