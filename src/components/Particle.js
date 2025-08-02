import React, { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
import { useTheme } from "./ThemeProvider";

function Particle() {
  const { isDarkMode } = useTheme();
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional callback when particles are loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none"
      }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: isDarkMode 
              ? ["#cd5ff8", "#c770f0", "#623686", "#ffffff", "#8A2BE2"]
              : ["#6366f1", "#8b5cf6", "#06b6d4", "#1e293b"],
          },
          links: {
            color: isDarkMode ? "#cd5ff8" : "#6366f1",
            distance: 150,
            enable: true,
            opacity: isDarkMode ? 0.5 : 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 1.5,
            straight: false,
            angle: {
              offset: 0,
              value: 90
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 120,
          },
          opacity: {
            value: isDarkMode ? 0.7 : 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.5,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
