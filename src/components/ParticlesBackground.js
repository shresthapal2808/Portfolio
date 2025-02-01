
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    console.log("Initializing tsParticles..."); // Debugging Log
    try {
      await loadFull(engine); // Correct initialization method
    } catch (error) {
      console.error("Error initializing tsParticles:", error);
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#121212",
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: ["#00bfff", "#1e90ff", "#00ff7f"],
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;

