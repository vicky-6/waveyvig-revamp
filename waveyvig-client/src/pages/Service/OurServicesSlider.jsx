import React from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import servicesData from "../../data/servicesData";

function ServicesSlider() {
  // chunk services into groups of 3
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < servicesData.length; i += chunkSize) {
    chunks.push(servicesData.slice(i, i + chunkSize));
  }

  return (
    <div style={{ backgroundColor: "#0b1d57", minHeight: "100vh",  }}> 
      <Container fluid className=" text-white pt-5">
        <h2 className="text-center mb-4 text-decoration-underline" >Our Services</h2>
        <h4 className="text-center text-muted-white mb-5">We offer a wide range of technology services to help your business succeed in the digital age.</h4>
        <Carousel
          indicators={false}
          controls={true}
          interval={1000}
          pause="hover"
          wrap={true}
        >
          {chunks.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {group.map((service) => (
                  <Col
                    key={service.id}
                    lg={4}
                    sm={12}
                    className="d-flex justify-content-center mb-3"
                  >
                    <Card style={{ width: "20rem" }} className="shadow border-0">
                      <Card.Body>
                        <div style={{ fontSize: "2rem" }}>{service.icon}</div>
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                        <ul>
                          {service.points.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default ServicesSlider;
