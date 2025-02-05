import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import 'animate.css/animate.min.css';

function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}
      id="contact"
    >
      <Container className="text-center">
        <h4><strong>Contact Me</strong></h4>
        <p>
          <a href="mailto:palshrestha28tiu@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
            Email: <span>palshrestha28tiu@gmail.com</span>
          </a>
        </p>
        <p>
          <a href="tel:+917439746416" style={{ color: 'white', textDecoration: 'none' }}>
            Phone: <span>+91 7439746416</span>
          </a>
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/shrestha-pal-339523251/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none', margin: '0 8px' }}
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/shresthapal2808"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none', margin: '0 8px' }}
          >
            <FaGithub size={30} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
