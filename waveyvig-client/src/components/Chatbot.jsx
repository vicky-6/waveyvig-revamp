import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ChatBot = () => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am here to assist you. May I know your name and email or mobile number?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState({ name: '', contact: '', qualification: '' });
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setStep(0);
    setMessages([
      { sender: 'bot', text: 'Hello! I am here to assist you. May I know your name and email or mobile number?' },
    ]);
    setUserData({ name: '', contact: '', qualification: '' });
  };
  const handleShow = () => setShow(true);

  const handleSend = () => {
    const newMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, newMessage]);

    // Handle next steps based on current step
    if (step === 0) {
      // Parse name and contact
      const [name, contact] = userInput.split(',').map(s => s.trim());
      setUserData(prev => ({ ...prev, name, contact }));
      setUserInput('');
      setMessages(prev => [...prev, { sender: 'bot', text: 'What is your qualification?' }]);
      setStep(1);
    } else if (step === 1) {
      setUserData(prev => ({ ...prev, qualification: userInput }));
      // Send data to backend
      setLoading(true);
      fetch('/api/saveUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, qualification: userInput }),
      })
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          // Show final message
          setMessages(prev => [
            ...prev,
            { sender: 'bot', text: 'Our team will contact you shortly.' },
          ]);
        })
        .catch(() => {
          setLoading(false);
          alert('Error sending data');
        });
      setStep(2);
    }
    setUserInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && userInput.trim() !== '') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Icon Button */}
      <Button
        variant="primary"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={handleShow}
      >
        <i className="bi bi-chat-dots" style={{ fontSize: '28px' }}></i>
      </Button>

      {/* Chat Modal */}
      <Modal show={show} onHide={handleClose} size="lg" style={{ margin: 0, height: '100vh', maxWidth: '400px', marginLeft: 'auto' }}>
        <Modal.Header>
          <Modal.Title>Chat with us</Modal.Title>
          <Button variant="outline-secondary" onClick={handleClose}>
            <i className="bi bi-x"></i>
          </Button>
        </Modal.Header>
        <Modal.Body style={{ display: 'flex', flexDirection: 'column', height: '400px', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ textAlign: msg.sender === 'bot' ? 'left' : 'right', margin: '10px 0' }}>
              <div
                style={{
                  display: 'inline-block',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: msg.sender === 'bot' ? '#e9ecef' : '#0d6efd',
                  color: msg.sender === 'bot' ? '#000' : '#fff',
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </Modal.Body>
        {step < 2 && (
          <Modal.Footer>
            <Form.Control
              type="text"
              placeholder={
                step === 0
                  ? 'Enter name, email or mobile (e.g., John, john@example.com)'
                  : 'Enter your qualification'
              }
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <Button onClick={handleSend} disabled={loading || userInput.trim() === ''}>
              Send
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default ChatBot;