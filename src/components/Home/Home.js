import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import myImg from "../../Assets/avatar.svg";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin,
  Briefcase,
  Award
} from "lucide-react";
import Type from "./Type";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const heroStats = [
    { label: "Years Experience", value: "1+", icon: <Briefcase size={14} /> },
    { label: "Projects Completed", value: "5+", icon: <Code2 size={14} /> },
    { label: "Technologies", value: "10+", icon: <Database size={14} /> },
    { label: "Client Satisfaction", value: "100%", icon: <Award size={14} /> }
  ];

  return (
    <section className="hero-section">
      <Container fluid className="hero-container">
        {/* Professional Background Grid */}
        <div className="hero-bg">
          <div className="bg-grid"></div>
          <div className="bg-gradient"></div>
        </div>

        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="hero-content"
          >
            <Row className="align-items-center min-vh-100">
              {/* Main Content */}
              <Col lg={8} xl={7}>
                <motion.div variants={itemVariants} className="hero-text">
                  <div className="hero-badge">
                    <span className="badge-text">Available for Full-Time Opportunities</span>
                    <div className="badge-indicator"></div>
                  </div>
                  
                  <h1 className="hero-title">
                    Hi, I'm <span className="name-highlight">Avadhut Nangare Patil</span>
                  </h1>
                  
                  <div className="hero-subtitle">
                    <span className="role-text">Full Stack Java Developer</span>
                    <Type />
                  </div>
                  
                  <p className="hero-description">
                    Passionate software developer with expertise in <strong>Java Spring Boot</strong> and 
                    <strong> React.js</strong>. Currently contributing as an intern at a tech company in Pune 
                    while building innovative solutions for clients worldwide.
                  </p>

                  <div className="hero-actions">
                    <Button 
                      className="primary-action"
                      href="#contact"
                    >
                      <Mail size={14} />
                      <span>Let's Connect</span>
                      <ArrowRight size={12} />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="secondary-action"
                      href="/Avadhut_Nangare_Patil_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={14} />
                      <span>Download CV</span>
                    </Button>
                  </div>

                  <div className="social-links">
                    <a href="https://github.com/Anpatil1" className="social-link" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/avadhut-nangare-patil-470901250/" className="social-link" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </motion.div>
              </Col>

              {/* Professional Avatar & Stats */}
              <Col lg={4} xl={5}>
                <motion.div variants={itemVariants} className="hero-visual">
                  <div className="avatar-container">
                    <div className="avatar-frame">
                      <img src={myImg} alt="Avadhut Nangare Patil" className="profile-image" />
                    </div>
                  </div>

                  <div className="hero-stats">
                    {heroStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="stat-card"
                      >
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-content">
                          <h3 className="stat-value">{stat.value}</h3>
                          <p className="stat-label">{stat.label}</p>
                        </div>
                      </motion.div>
                    ))}
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
