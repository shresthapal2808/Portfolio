import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';

// Initialize AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1200,
  once: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);