import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const OurProcess = () => {
  const processSteps = [
    {
      title: 'Discovery',
      number: '01',
      description: 'We start by understanding your business goals and requirements.',
    },
    {
      title: 'Planning',
      number: '02',
      description: 'We create a detailed plan to ensure the successful execution of your project.',
    },
    {
      title: 'Execution',
      number: '03',
      description: 'Our team of experts will develop and implement your technology solution.',
    },
    {
      title: 'Support',
      number: '04',
      description: 'We provide ongoing support and maintenance to ensure your solution continues to meet your needs.',
    },
  ];

  return (
    <Container fluid className="text-center mt-0 px-5" style={{backgroundColor:"#0b1d57"}}>
      <h2 className="text-primary mb-3 text-decoration-underline" style={{color:"#00bcd4"}}>Our Process</h2>
      <p className="mb-4 fw-bold fs-5" style={{color:"white"}}>
        We follow a proven process to deliver high-quality technology solutions.
      </p>
      <Row className="justify-content-center">
        {processSteps.map((step, index) => (
          <Col key={index} xs={12} sm={6} md={3} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded">
              <Card.Body className="text-center">
                <div
                        style={{
                //     display: 'inline-block',
                //     backgroundColor: '#fff',
                //     borderRadius: '15px',
                        padding: '20px',
                //     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
                >
                  <h4 className="text-primary mb-2">
                    {step.title} <span className="h5">{step.number}</span>
                  </h4>
                  <p className="mb-0">{step.description}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurProcess;