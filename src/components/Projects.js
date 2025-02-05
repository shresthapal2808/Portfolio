// src/components/Projects.js

import React from 'react';
import Slider from 'react-slick';
import Tilt from 'react-parallax-tilt';
import { Container } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'House Price Prediction',
      client: 'Self-made Project',
      description: 'Predicted house prices using a linear regression model.',
      image: '/images/house_price_prediction.jpg',
      link: 'https://github.com/shresthapal2808/Predicting_House_Price.git',
    },
    {
      title: 'Bank Customer Churn Prediction Model',
      client: 'Self-made Project',
      description: 'Predicted customer churn using logistic regression.',
      image: '/images/bank_churn_prediction.jpg',
      link: 'https://github.com/shresthapal2808/Bank-Customer-Churn-Prediction.git',
    },
    {
      title: 'Population Demographic Segmentation',
      client: 'Self-made Project',
      description: 'Segmented regions by demographics using KNN.',
      image: '/images/demographic_segmentation.jpg',
      link: 'https://github.com/shresthapal2808/demographic_clustering',
    },
    {
      title: 'Crop Recommendation Model',
      client: 'IBM Bootcamp project',
      description: 'Optimized crop selection using IBM watsonx.ai.',
      image: '/images/crop_recommendation.jpg',
      link: 'https://github.com/shresthapal2808/Crop-Recommendation-Model.git',
    },
    {
      title: 'Heart Attack Risk Prediction Model',
      client: 'IBM Bootcamp project',
      description: 'Predicted heart attack risk using AI models.',
      image: '/images/heart_attack_prediction.jpg',
      link: 'https://github.com/shresthapal2808/Heart-Attack-Risk-Prediction-Model',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container className="my-5" id="projects">
      <h2 className="text-center mb-4" data-aos="fade-in">
        <strong>My Latest Projects</strong>
      </h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-3" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Tilt className="Tilt" options={{ max: 15, scale: 1.05, speed: 300 }}>
                <div className="project-card">
                  <img src={project.image} alt={`${project.title} Screenshot`} />
                  <div className="card-overlay d-flex flex-column justify-content-center align-items-center">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </Tilt>
            </a>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Projects;
