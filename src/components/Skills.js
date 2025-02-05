import React from 'react';
import './Skills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaReact,
} from 'react-icons/fa';
import { SiDjango, SiCplusplus, SiBootstrap, SiC } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'C', icon: <SiC />, color: '#A8B9CC' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    // Add more skills as needed
  ];

  return (
    <div className="skills-section" id="skills">
      <h2 className="text-center mb-4"><strong>My Skills</strong></h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
