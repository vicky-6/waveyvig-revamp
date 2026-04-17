import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const FeaturesAndFormSection = () => {
  return (
    <Container fluid style={{ backgroundColor: '#0b1d57', padding: '50px 0' }}>
      <Row className="justify-content-center align-items-center">
        {/* Features List */}
        <Col md={6} className="text-white mb-4 mb-md-0">
          <h2 className="mb-4">Ready to Transform Your Career?</h2>
          <p>Join our next batch of students gaining in-demand tech skills. Limited seats available.</p>
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
            <li><strong>Industry-recognized certification</strong></li>
            <li><strong>Placement assistance</strong></li>
            <li><strong>Flexible payment options</strong></li>
          </ul>
        </Col>

        {/* Request Information Form */}
        <Col md={5}>
          <Card style={{ borderRadius: '10px' }} className="shadow-sm p-4">
            <Card.Body>
              <h4 className="mb-4">Request Information</h4>
              <Form>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Control type="tel" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group controlId="program" className="mb-4">
                  <Form.Select defaultValue="">
                    <option value="" disabled>Select Program</option>
                    <option>Web Development</option>
                    <option>Data Science</option>
                    <option>UI/UX Design</option>
                    {/* Add more options as needed */}
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" className="w-100" size="lg">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesAndFormSection;