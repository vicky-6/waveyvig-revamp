import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Daniel Clifford',
      title: 'CTO, TechSolutions Inc.',
      quote:
        'The IT consulting team at WaveyVigTech guided us through a critical digital transformation journey. Their clear strategy, in-depth knowledge, and reliable support helped us streamline processes and reduce costs. We now operate with greater efficiency and confidence in our systems',
      bgColor: '#65589C', // Light purple background
      avatar: "/avatar2.jpeg",
    },
    {
      name: 'Jonathan Walters',
      title: 'Operations Director, Global Retail',
      quote:
        'Partnering with WaveyVigTech for our website revamp was the best decision we made. Their team created a modern, user-friendly platform that perfectly represents our brand. The attention to detail and responsiveness during the entire project were outstanding. Our customer engagement has doubled since the launch.',
      bgColor: '#8B5E83', // Light blue background
    },
    {
      name: 'Kira Whittle',
      title: 'CEO, FinTech Innovations',
      quote:
        'WaveyVigTech’s digital marketing strategies helped us reach a much wider audience. From SEO to social campaigns, their innovative approach significantly boosted our online visibility. Within three months, we saw a 60% increase in lead conversions. They are true growth partners',
      bgColor: '#FDB87D', // Light neutral background
    },
    {
      name: 'Jeanette Harmon',
      title: 'Marketing Director, BrandWorks',
      quote:
        'Their digital marketing services delivered outstanding ROI. Their digital marketing team tripled our online leads within 6 months. Their data-driven approach helped a lot to learn new tech!',
      bgColor: '#51EAEA', // White semi-transparent background
    },
    {
      name: 'Patrick Abrams',
      title: 'IT Manager, HealthCare Plus',
      quote:
        'WaveyVigTech built a custom mobile application for our business that has completely changed the way we interact with customers. The app is smooth, secure, and packed with the right features. Their ability to translate our requirements into reality was truly impressive',
      bgColor: '#8EC6C5', // Light black/gray background
    },
  ];

  return (
    <Container fluid  className="text-white px-5 pt-5" style={{backgroundColor:"#0b1d57"}} >
        <h4 className='text-center p-2 text-decoration-underline mb-5' style={{color:"#00bcd4"}}>Our Client's Thought</h4>
      <Row>
        {testimonials.map((t, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card style={{ backgroundColor: t.bgColor, color:'light' }} className="w-100 shadow-sm border-0 rounded p-3">
              <Card.Body>
                <Card.Text className="mb-4" style={{color:'light'}}>"{t.quote}"</Card.Text>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#ccc', // Placeholder for avatar
                      marginRight: '10px',
                      backgroundImage: 'url(/avatar3.jpeg)',
                    }}
                  />
                  <div>
                    <h6 className="mb-0">{t.name}</h6>
                    <small className="text-white" style={{color:'light'}}>{t.title}</small>
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

export default Testimonials;