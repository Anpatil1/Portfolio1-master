import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroBanner = () => {
  const [currentTech, setCurrentTech] = useState(0);
  
  const techStack = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'JavaScript', icon: '🟨', color: '#F7DF1E' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' }
  ];

  const innovations = [
    'Full Stack Developer',
    'Problem Solver',
    'Code Architect', 
    'Tech Innovator',
    'Digital Creator'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="animated-hero-banner">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              variants={floatingVariants}
              animate="animate"
              style={{
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Code Rain Effect */}
        <div className="code-rain">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="code-line"
              style={{
                left: `${(i * 7) % 100}%`, // Distribute across width
                animationDelay: `${i * 0.3}s`
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ 
                y: typeof window !== 'undefined' ? window.innerHeight : 800,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
            >
              {['<div>', 'function()', '{...}', 'const =>', 'return', '{ }', 'API', 'JSON'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <motion.div 
        className="hero-content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Rotating Tech Stack Circle */}
        <motion.div className="tech-orbit">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`tech-item ${index === currentTech ? 'active' : ''}`}
              style={{
                '--angle': `${(360 / techStack.length) * index}deg`,
                '--color': tech.color
              }}
              animate={{
                scale: index === currentTech ? 1.3 : 1,
                opacity: index === currentTech ? 1 : 0.7
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Innovation Text */}
        <motion.div 
          className="innovation-center"
          variants={itemVariants}
        >
          <motion.h1 className="innovation-title">
            {innovations.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
                className="innovation-word"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div 
            className="innovation-subtitle"
            variants={itemVariants}
          >
            <span className="typing-text">Building Tomorrow's Web Today</span>
          </motion.div>
        </motion.div>

        {/* Skill Bars Animation */}
        <motion.div 
          className="skill-showcase"
          variants={itemVariants}
        >
          {[
            { skill: 'Frontend', level: 95 },
            { skill: 'Backend', level: 90 },
            { skill: 'Database', level: 85 },
            { skill: 'DevOps', level: 80 }
          ].map((item, index) => (
            <motion.div
              key={item.skill}
              className="skill-bar"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
            >
              <div className="skill-label">{item.skill}</div>
              <div className="skill-progress">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.level}%` }}
                  transition={{ delay: 1.5 + index * 0.2, duration: 1, ease: "easeOut" }}
                />
                <span className="skill-percentage">{item.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Code Block */}
        <motion.div 
          className="code-preview"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="code-header">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="code-title">portfolio.js</span>
          </div>
          <div className="code-content">
            <div className="code-line">
              <span className="code-keyword">const</span>
              <span className="code-variable"> developer</span>
              <span className="code-operator"> = </span>
              <span className="code-string">{"{"}</span>
            </div>
            <div className="code-line">
              <span className="code-property">  name:</span>
              <span className="code-string"> "Avadhut Nangare Patil"</span>,
            </div>
            <div className="code-line">
              <span className="code-property">  role:</span>
              <span className="code-string"> "Full Stack Developer"</span>,
            </div>
            <div className="code-line">
              <span className="code-property">  passion:</span>
              <span className="code-string"> "Innovation & Excellence"</span>
            </div>
            <div className="code-line">
              <span className="code-string">{"}"}</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHeroBanner;
