import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';

function Header() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about'); // Change 'about' to your next section's ID
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-section">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better visibility */}
      <div className="video-overlay"></div>

      {/* Content */}
      <Container className="hero-content text-center">
        <h1 data-aos="zoom-in"><strong>Hi! I'm Shrestha Pal. Welcome to My Portfolio</strong></h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Crafting experiences through design and code
        </p>
        <a href="#contact" className="btn btn-primary" data-aos="fade-up" data-aos-delay="400">
          Hire Me
        </a>
      </Container>

    {/* Clickable Explore Below */}
    
    <div className="explore-hint" onClick={scrollToNextSection}>
        <span className="down-arrow">▼</span>
      </div>

    </header>
  );
}

export default Header;
