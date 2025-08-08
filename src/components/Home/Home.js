import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { HiMail, HiSparkles } from "react-icons/hi";
import { FaCode, FaRocket, FaDownload, FaStar, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section>
      <Container fluid className="home-section-modern" id="home">
        {/* Enhanced Animated Background Elements */}
        <div className="home-bg-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          
          {/* Interactive Mouse Follower */}
          <motion.div
            className="mouse-follower"
            animate={{
              x: mousePosition.x - 100,
              y: mousePosition.y - 100,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            style={{
              position: 'fixed',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1), transparent)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 1,
              filter: 'blur(20px)'
            }}
          />
        </div>
        
        <Container className="home-content-modern">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row className="align-items-center min-vh-100">
              <Col lg={7} className="home-header-modern">
                <motion.div variants={itemVariants} className="greeting-section">
                  <motion.span 
                    className="greeting-badge"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCode className="me-2" />
                    <HiSparkles className="me-1" />
                    Hello World!
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      style={{ marginLeft: '8px' }}
                    >
                      <FaStar size={12} />
                    </motion.div>
                  </motion.span>
                  
                  <motion.h1 
                    className="main-heading"
                    variants={itemVariants}
                  >
                    Hi, I'm{" "}
                    <motion.span 
                      className="name-highlight"
                      whileHover={{ scale: 1.02 }}
                    >
                      Avadhut Nangare Patil
                      <motion.span 
                        className="wave" 
                        role="img" 
                        aria-labelledby="wave"
                        animate={{ rotate: [0, 20, -10, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        style={{ display: 'inline-block', marginLeft: '10px' }}
                      >
                        👋🏻
                      </motion.span>
                    </motion.span>
                  </motion.h1>
                </motion.div>
                
                <motion.div variants={itemVariants} className="role-section">
                  <div className="role-container">
                    <motion.span 
                      className="role-label"
                      variants={floatVariants}
                      animate="animate"
                    >
                      <FaLightbulb className="me-2" />
                      I am a
                    </motion.span>
                    <h2 className="role-title">
                      <motion.span 
                        className="typing-text"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        Full Stack Developer
                      </motion.span>
                      <motion.span 
                        className="cursor-blink"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        |
                      </motion.span>
                    </h2>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="description-section">
                  <p className="main-description">
                    Crafting <motion.span 
                      className="highlight"
                      whileHover={{ scale: 1.05, color: "#a78bfa" }}
                    >
                      innovative digital experiences
                    </motion.span> with cutting-edge technologies.
                    Specialized in <span className="tech-highlight">Java</span>, <span className="tech-highlight">Spring Boot</span>, 
                    and <span className="tech-highlight">React.js</span> to build scalable, performant, and user-centric applications.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="cta-section">
                  <div className="button-group">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        className="primary-cta"
                        href="https://github.com/Anpatil1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillGithub className="btn-icon" />
                        <span>Explore My Work</span>
                        <FaRocket className="btn-arrow" />
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        className="secondary-cta"
                        href="#contact"
                      >
                        <HiMail className="btn-icon" />
                        <span>Let's Connect</span>
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        className="download-cta"
                        href="/Avadhut Nangare_Patil_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaDownload className="btn-icon" />
                        <span>Resume</span>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
              
              <Col lg={5} className="avatar-section-modern">
                <motion.div 
                  variants={itemVariants}
                  className="avatar-container"
                >
                  <div className="avatar-glow"></div>
                  <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={1000}
                    transitionSpeed={1500}
                    scale={1.05}
                    gyroscope={true}
                  >
                    <motion.div 
                      className="avatar-frame"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={myImg} 
                        className="avatar-image" 
                        alt="Avadhut Nangare Patil"
                      />
                    </motion.div>
                  </Tilt>
                  <div className="floating-icons">
                    <motion.div 
                      className="tech-icon icon-1"
                      variants={floatVariants}
                      animate="animate"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      ⚛️
                    </motion.div>
                    <motion.div 
                      className="tech-icon icon-2"
                      variants={floatVariants}
                      animate="animate"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ delay: 1 }}
                    >
                      ☕
                    </motion.div>
                    <motion.div 
                      className="tech-icon icon-3"
                      variants={floatVariants}
                      animate="animate"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ delay: 2 }}
                    >
                      🚀
                    </motion.div>
                    <motion.div 
                      className="tech-icon icon-4"
                      variants={floatVariants}
                      animate="animate"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ delay: 3 }}
                    >
                      💻
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
