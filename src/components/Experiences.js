import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import 'animate.css/animate.min.css';
import './Experiences.css';

function Experiences() {
  const experiences = [
    {
      title: 'Smart India Hackathon - College Finalist',
      company: 'September 2024',
      duration: '2024',
      description:
        'Developed an interactive gamified platform to simplify the Indian Constitution with games & animations making it accessible to children and citizens.',
      link: '#',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django'],
    },
    {
      title: 'CodTech AICTE Internship - Software Development Intern',
      company: 'July 2024',
      duration: '2024',
      description:
        'Selected for a 4-week software development internship at CodTech through AICTE. Built a real-time chat app and an e-commerce website clone.',
      link: '#',
      skills: ['Django', 'Websockets', 'JavaScript', 'Bootstrap'],
    },
    {
      title: 'Machine Learning Training - Trainee',
      company: 'Internshala',
      duration: '2024',
      description:
        'Completed a virtual training focused on Machine Learning. Learned about data exploration, regression, decision trees, and clustering algorithms.',
      link: '#',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length
    );
  };

  return (
    <Container className="my-5" id="experiences">
      <h2 className="text-center mb-4" data-aos="fade-in">
        My Experiences
      </h2>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="carousel-container position-relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-100 experience-card" style={{ cursor: 'pointer' }}>
                  <Card.Body>
                    <Card.Title>{experiences[currentIndex].title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {experiences[currentIndex].company}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>Duration:</strong> {experiences[currentIndex].duration}
                    </Card.Text>
                    <Card.Text>{experiences[currentIndex].description}</Card.Text>
                    <Card.Text>
                      <strong>Skills:</strong> {experiences[currentIndex].skills.join(', ')}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Left and Right Arrow Buttons Outside of the Card */}
            <div
              className="carousel-arrow left-arrow"
              onClick={goToPrevious}
            >
              &#8592;
            </div>
            <div
              className="carousel-arrow right-arrow"
              onClick={goToNext}
            >
              &#8594;
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Experiences;
