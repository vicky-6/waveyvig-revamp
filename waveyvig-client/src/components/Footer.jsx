import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaVideo,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#3f4e8d", color: "white" }}>
      <Container className="py-5">
        <Row>
          {/* Logo + About */}
          <Col lg={3} md={6} className="mb-4">
            <h4 className="fw-bold"> <i className="bi bi-arrow-through-heart"></i> WaveyvigTech</h4>
            <p>
              Shaping Your Vision Into Digital Solutions.
            </p>
            <div className="d-flex gap-3">
              <a href="#" style={{ color: "white" }}>
                <FaInstagram size={22} />
              </a>
              <a href="#" style={{ color: "white" }}>
                <FaFacebookF size={22} />
              </a>
              <a href="#" style={{ color: "white" }}>
                <FaYoutube size={22} />
              </a>
              <a href="#" style={{ color: "white" }}>
                <FaVideo size={22} />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6} className="mb-4">
            <h5 style={{ color: "#00bcd4" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link></li>
              <li><Link to="/careers" style={{ color: "white", textDecoration: "none" }}>Career</Link></li>
              <li><Link to="/training" style={{ color: "white", textDecoration: "none" }}>Training</Link></li>
              <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
              <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
            </ul>
          </Col>

          {/* Services (all redirect to /services) */}
          <Col lg={3} md={6} className="mb-4">
            <h5 style={{ color: "#00bcd4" }}>Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Website Development</Link></li>
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Mobile App Development</Link></li>
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Digital Marketing</Link></li>
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Branding</Link></li>
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>ECommerce</Link></li>
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Content Creation</Link></li>
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Video Editing</Link></li>
              <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Corporate Training</Link></li>
            </ul>
          </Col>

          {/* Contact Us (updated details) */}
          <Col lg={3} md={6} className="mb-4">
            <h5 style={{ color: "#00bcd4" }}>Contact Us</h5>
            <p>
              <FaMapMarkerAlt className="me-2" />
              WaveyvigTech, Bodinayakanur, Theni – 625513.
            </p>
            <p>
              <FaPhoneAlt className="me-2" /> +91 8248429488
            </p>
            <p>
              <FaEnvelope className="me-2" /> svickyvenkats@gmail.com
            </p>
          </Col>
        </Row>
      </Container>

      {/* Bottom Copyright */}
      <div
        style={{
          backgroundColor: "#36457a",
          textAlign: "center",
          padding: "10px 0",
          fontSize: "14px",
        }}
      >
        © 2025 WaveyvigTech Info Tech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
