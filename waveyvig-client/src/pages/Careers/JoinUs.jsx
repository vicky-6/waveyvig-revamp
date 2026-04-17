import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";

const JoinUs = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#1b2463", minHeight: "100vh" }}>
      <h2 className="text-center mb-4" style={{ color: "#00c4cc", textDecoration: "underline" }}>
        Join with us
      </h2>
      <Row className="justify-content-center">
        {/* Left Section */}
        <Col md={5} className="text-white">
          <h3>Apply for Your Dream Job</h3>
          <p>
            Submit your resume and we'll get back to you about opportunities that match your skills and experience.
          </p>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>✔ Quick application process</li>
            <li>✔ Confidentiality guaranteed</li>
            <li>✔ Response within 3 business days</li>
            <li>✔ Opportunities across all levels</li>
          </ul>
        </Col>

        {/* Right Section */}
        <Col md={5}>
          <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h5 className="mb-3">Submit Your Resume</h5>
            <Form>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="experience">
                <Form.Control type="text" placeholder="Years of Experience" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="position">
                <Form.Select>
                  <option>Position of Interest</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>QA Engineer</option>
                  <option>UI/UX Designer</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="resume">
                <div
                  style={{
                    border: "1px dashed #ccc",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <FaCloudUploadAlt size={24} style={{ color: "#00c4cc", marginBottom: "5px" }} />
                  <p>Upload Resume (PDF/DOCX)</p>
                  <Form.Control type="file" style={{ display: "none" }} />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="consent">
                <Form.Check type="checkbox" label="I consent to Zhahi Info Tech processing my data for recruitment purposes" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit Application
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinUs;
