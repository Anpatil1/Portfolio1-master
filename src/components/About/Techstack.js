import React, { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";
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
} from "react-icons/si";

function Techstack() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const handleIconClick = (tech) => {
    setSelectedTech(tech);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTech(null);
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

  const stylingTechnologies = [
    { icon: <DiBootstrap />, name: "Bootstrap", category: "CSS Framework", color: "#7952B3", description: "Popular CSS framework for responsive design" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", category: "Utility-First CSS", color: "#06B6D4", description: "Utility-first CSS framework" },
    { icon: <SiRedux />, name: "Redux", category: "State Management", color: "#764ABC", description: "Predictable state container for JavaScript apps" },
  ];

  const devOpsTechnologies = [
    { icon: <SiDocker />, name: "Docker", category: "Containerization", color: "#2496ED", description: "Platform for developing, shipping, and running applications" },
    { icon: <DiGit />, name: "Git", category: "Version Control", color: "#F05032", description: "Distributed version control system" },
  ];

  const renderTechnologySection = (title, technologies, bgGradient, sectionIndex) => (
    <div className="tech-category-section" style={{ marginBottom: '4rem' }}>
      <h3 className="tech-category-title" style={{ 
        color: 'var(--primary-color)', 
        textAlign: 'center', 
        marginBottom: '3rem',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>
        {title}
      </h3>
      <Row style={{ justifyContent: "center", gap: "1rem" }}>
        {technologies.map((tech, index) => (
          <Col xs={6} sm={4} md={3} lg={2} className="tech-icons-new" key={index} style={{ marginBottom: '2rem' }}>
            <div 
              className="tech-item-new" 
              style={{ 
                background: bgGradient,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: '20px',
                padding: '2rem 1rem',
                border: '2px solid transparent',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => handleIconClick(tech)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.borderColor = tech.color;
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.1), 0 0 20px ${tech.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
              }}
            >
              <div className="tech-icon-wrapper-new" style={{
                fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                color: tech.color,
                textAlign: 'center',
                marginBottom: '1rem',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}>
                {tech.icon}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <>
      <div style={{ paddingBottom: "50px" }}>
        {renderTechnologySection("Frontend Development", frontendTechnologies, "linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(97, 218, 251, 0.05) 100%)", 0)}
        {renderTechnologySection("Backend Development", backendTechnologies, "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)", 1)}
        {renderTechnologySection("Database Technologies", databaseTechnologies, "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)", 2)}
        {renderTechnologySection("UI/UX & Styling", stylingTechnologies, "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)", 3)}
        {renderTechnologySection("DevOps & Cloud", devOpsTechnologies, "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)", 4)}
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
