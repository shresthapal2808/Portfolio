// src/components/Contact.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'animate.css/animate.min.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const data = new FormData(form);

    const endpoint = 'https://formspree.io/f/mldgnnjg'; // Use your actual endpoint

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          setStatus(result.errors[0].message);
        } else {
          setStatus('ERROR');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5" id="contact">
      <Row>
        <Col md={6} className="text-center d-flex align-items-center justify-content-center" data-aos="fade-in">
          <h2><strong>Get in Touch</strong></h2>
        </Col>
        <Col md={6}>
          {status === 'SUCCESS' && (
            <Alert variant="success" onClose={() => setStatus('')} dismissible>
              <h4>Thank you!</h4>
              <p>Your message has been sent successfully.</p>
            </Alert>
          )}
          {status === 'ERROR' && (
            <Alert variant="danger" onClose={() => setStatus('')} dismissible>
              Oops! There was an error sending your message. Please try again later.
            </Alert>
          )}
          {status !== 'SUCCESS' && (
            <Form onSubmit={handleSubmit} data-aos="fade-up">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Your Email" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} placeholder="Your Message" required />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading} className="mt-3">
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
