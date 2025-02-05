import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function About() {
  return (
    <>
      {/* "Explore Below" section */}
      <section
        id="about"></section>
      {/* About Section */}
      <div
        id="about-section"
        style={{ padding: '80px 0', backgroundColor: '#1e1e1e', color: '#fff' }}
      >
        <Container>
          <Row className="align-items-center">
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
              data-aos="fade-right"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src="/profile 4.png" // Your profile image with transparency
                width="230"
                height="230"
                
                style={{
                  borderRadius: '50%', // Circular image
                  objectFit: 'cover',
                }}
              />
            </Col>
            <Col md={6} data-aos="fade-left">
              <h2><strong>About Me</strong></h2>
              <p style={{ textAlign: 'justify' }}>
                  I am Shrestha Pal, a passionate Computer Science and Engineering student at Techno India University. 
                  I specialize in Python, C, C++, JavaScript, Java, Django, and modern web technologies. 
                  I thrive on building innovative digital solutions that address real-world challenges, 
                  blending technology with creativity to enhance user experiences. My work is driven by a commitment to excellence,
                  problem-solving, and continuous learning in the ever-evolving tech landscape.
                </p>
                <Button
                variant="primary"
                href="/Shrestha_Pal_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
                data-aos="zoom-in"
              >
                Download CV
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
