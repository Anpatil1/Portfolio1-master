import React, { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiPython,
  DiGit,
  DiJava,
  DiMongodb,
  DiBootstrap,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiDocker,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiOpencv,
  SiScikitlearn,
  SiKeras,
  SiAmazonwebservices,
  SiGooglecloud,
} from "react-icons/si";
import { ChevronDown, Eye, EyeOff } from "lucide-react";

function Techstack() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    frontend: true,
    backend: true,
    database: true,
    aiml: true,
    styling: false,
    devops: false,
    cloud: false
  });

  const handleIconClick = (tech) => {
    setSelectedTech(tech);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTech(null);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleAllSections = () => {
    const allExpanded = Object.values(expandedSections).every(val => val);
    const newState = Object.keys(expandedSections).reduce((acc, key) => {
      acc[key] = !allExpanded;
      return acc;
    }, {});
    setExpandedSections(newState);
  };
  const frontendTechnologies = [
    { icon: <DiReact />, name: "React.js", category: "Frontend Framework", color: "#61DAFB", description: "A JavaScript library for building user interfaces" },
    { icon: <SiNextdotjs />, name: "Next.js", category: "React Framework", color: "#000000", description: "The React Framework for Production" },
    { icon: <DiJavascript1 />, name: "JavaScript", category: "Programming Language", color: "#F7DF1E", description: "High-level programming language for web development" },
    { icon: <SiTypescript />, name: "TypeScript", category: "Programming Language", color: "#3178C6", description: "Typed superset of JavaScript" },
    { icon: <DiHtml5 />, name: "HTML5", category: "Markup Language", color: "#E34F26", description: "Standard markup language for web pages" },
    { icon: <DiCss3 />, name: "CSS3", category: "Styling Language", color: "#1572B6", description: "Style sheet language for web styling" },
  ];

  const backendTechnologies = [
    { icon: <DiJava />, name: "Java", category: "Programming Language", color: "#ED8B00", description: "Object-oriented programming language" },
    { icon: <SiSpringboot />, name: "Spring Boot", category: "Java Framework", color: "#6DB33F", description: "Java-based framework for microservices" },
    { icon: <DiNodejs />, name: "Node.js", category: "JavaScript Runtime", color: "#339933", description: "JavaScript runtime for server-side development" },
    { icon: <SiExpress />, name: "Express.js", category: "Node.js Framework", color: "#000000", description: "Fast web framework for Node.js" },
    { icon: <DiPython />, name: "Python", category: "Programming Language", color: "#3776AB", description: "High-level programming language" },
  ];

  const databaseTechnologies = [
    { icon: <DiMysql />, name: "MySQL", category: "Relational Database", color: "#4479A1", description: "Popular relational database management system" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Relational Database", color: "#336791", description: "Advanced open-source relational database" },
    { icon: <DiMongodb />, name: "MongoDB", category: "NoSQL Database", color: "#47A248", description: "Document-oriented NoSQL database" },
    { icon: <SiRedis />, name: "Redis", category: "In-Memory Database", color: "#DC382D", description: "In-memory data structure store" },
    { icon: <SiFirebase />, name: "Firebase", category: "Cloud Database", color: "#FFCA28", description: "Google's mobile and web application platform" },
  ];

  const aimlTechnologies = [
    { icon: <SiTensorflow />, name: "TensorFlow", category: "ML Framework", color: "#FF6F00", description: "Open-source machine learning framework by Google" },
    { icon: <SiPytorch />, name: "PyTorch", category: "ML Framework", color: "#EE4C2C", description: "Open-source machine learning library by Facebook" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn", category: "ML Library", color: "#F7931E", description: "Machine learning library for Python" },
    { icon: <SiPandas />, name: "Pandas", category: "Data Analysis", color: "#150458", description: "Data manipulation and analysis library" },
    { icon: <SiNumpy />, name: "NumPy", category: "Scientific Computing", color: "#013243", description: "Library for large, multi-dimensional arrays" },
    { icon: <SiJupyter />, name: "Jupyter", category: "Development Environment", color: "#F37626", description: "Interactive development environment for data science" },
    { icon: <SiOpencv />, name: "OpenCV", category: "Computer Vision", color: "#5C3EE8", description: "Computer vision and machine learning library" },
    { icon: <SiKeras />, name: "Keras", category: "Neural Networks", color: "#D00000", description: "High-level neural networks API" },
  ];

  const cloudTechnologies = [
    { icon: <SiAmazonwebservices />, name: "AWS", category: "Cloud Platform", color: "#FF9900", description: "Amazon Web Services cloud platform" },
    { icon: <SiGooglecloud />, name: "Google Cloud", category: "Cloud Platform", color: "#4285F4", description: "Google Cloud Platform services" },
  ];

  const stylingTechnologies = [
    { icon: <DiBootstrap />, name: "Bootstrap", category: "CSS Framework", color: "#7952B3", description: "Popular CSS framework for responsive design" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", category: "Utility-First CSS", color: "#06B6D4", description: "Utility-first CSS framework" },
    { icon: <SiRedux />, name: "Redux", category: "State Management", color: "#764ABC", description: "Predictable state container for JavaScript apps" },
  ];

  const devOpsTechnologies = [
    { icon: <SiDocker />, name: "Docker", category: "Containerization", color: "#2496ED", description: "Platform for developing, shipping, and running applications" },
    { icon: <DiGit />, name: "Git", category: "Version Control", color: "#F05032", description: "Distributed version control system" },
  ];

  const renderTechnologySection = (title, technologies, bgGradient, sectionKey, sectionIndex) => (
    <motion.div 
      className="tech-category-section" 
      style={{ marginBottom: '2rem' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: sectionIndex * 0.1 }}
    >
      <div 
        className="tech-section-header"
        onClick={() => toggleSection(sectionKey)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
          borderRadius: '12px',
          cursor: 'pointer',
          marginBottom: '1rem',
          border: `2px solid ${expandedSections[sectionKey] ? 'var(--primary-color)' : 'transparent'}`,
          transition: 'all 0.3s ease'
        }}
      >
        <h3 style={{ 
          color: 'var(--primary-color)', 
          margin: 0,
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {title}
          <span style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            marginLeft: '0.5rem',
            fontWeight: '400'
          }}>
            ({technologies.length} technologies)
          </span>
        </h3>
        <motion.div
          animate={{ rotate: expandedSections[sectionKey] ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--primary-color)' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {expandedSections[sectionKey] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <Row style={{ justifyContent: "center", gap: "0.5rem", margin: 0 }}>
              {technologies.map((tech, index) => (
                <Col xs={6} sm={4} md={3} lg={2} className="tech-icons-new" key={index} style={{ marginBottom: '1.5rem', padding: '0.25rem' }}>
                  <motion.div 
                    className="tech-item-new" 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    style={{ 
                      background: bgGradient,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '16px',
                      padding: '1.5rem 1rem',
                      border: '2px solid transparent',
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onClick={() => handleIconClick(tech)}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      borderColor: tech.color,
                      boxShadow: `0 15px 30px rgba(0,0,0,0.1), 0 0 15px ${tech.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="tech-icon-wrapper-new" style={{
                      fontSize: 'clamp(2rem, 6vw, 3rem)',
                      color: tech.color,
                      textAlign: 'center',
                      marginBottom: '0.5rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}>
                      {tech.icon}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      textAlign: 'center',
                      lineHeight: '1.2'
                    }}>
                      {tech.name}
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <>
      <div style={{ paddingBottom: "30px" }}>
        {/* Global Toggle Button */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(79, 70, 229, 0.1)'
        }}>
          <h2 style={{
            color: 'var(--primary-color)',
            marginBottom: '1rem',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '700'
          }}>
            Technical Stack
          </h2>
          <Button
            variant="outline-primary"
            onClick={toggleAllSections}
            style={{
              borderRadius: '25px',
              padding: '0.5rem 1.5rem',
              fontWeight: '600',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '0 auto'
            }}
          >
            {Object.values(expandedSections).every(val => val) ? (
              <>
                <EyeOff size={16} />
                Collapse All
              </>
            ) : (
              <>
                <Eye size={16} />
                Expand All
              </>
            )}
          </Button>
        </div>

        {renderTechnologySection("Frontend Development", frontendTechnologies, "linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(97, 218, 251, 0.05) 100%)", "frontend", 0)}
        {renderTechnologySection("Backend Development", backendTechnologies, "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)", "backend", 1)}
        {renderTechnologySection("Database Technologies", databaseTechnologies, "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)", "database", 2)}
        {renderTechnologySection("AI & Machine Learning", aimlTechnologies, "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)", "aiml", 3)}
        {renderTechnologySection("UI/UX & Styling", stylingTechnologies, "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)", "styling", 4)}
        {renderTechnologySection("DevOps & Tools", devOpsTechnologies, "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)", "devops", 5)}
        {renderTechnologySection("Cloud Platforms", cloudTechnologies, "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)", "cloud", 6)}
      </div>
      
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton style={{ 
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          color: 'white',
          border: 'none'
        }}>
          <Modal.Title style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            fontSize: '1.5rem',
            fontWeight: '700'
          }}>
            {selectedTech && (
              <>
                <span style={{ 
                  fontSize: '2rem', 
                  color: selectedTech.color,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}>
                  {selectedTech.icon}
                </span>
                {selectedTech.name}
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ 
          padding: '2rem',
          background: 'var(--background-card)',
          color: 'var(--text-primary)'
        }}>
          {selectedTech && (
            <div>
              <div style={{ 
                background: `linear-gradient(135deg, ${selectedTech.color}20, ${selectedTech.color}10)`,
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                border: `2px solid ${selectedTech.color}30`
              }}>
                <h5 style={{ 
                  color: selectedTech.color, 
                  margin: '0 0 0.5rem 0',
                  fontWeight: '600'
                }}>
                  {selectedTech.category}
                </h5>
                <p style={{ 
                  margin: 0, 
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  {selectedTech.description}
                </p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Techstack;
