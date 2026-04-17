import React, { useState, useEffect } from "react";
import { Modal, Button, Image } from "react-bootstrap";

const PopupModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show only on first visit per session
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShow(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Body className="text-center">
        {/* Replace with your own image */}
        <Image
          src="https://via.placeholder.com/200"
          alt="Welcome"
          fluid
          className="mb-3"
        />
        <h4 style={{ color: "#04dead" }}>Hiii 👋</h4>
        <p>Welcome to my website!</p>
        <Button variant="primary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default PopupModal;
