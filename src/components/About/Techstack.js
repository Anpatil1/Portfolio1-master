import React from "react";
import { Col, Row } from "react-bootstrap";
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
  const frontendTechnologies = [
    { icon: <DiReact />, name: "React.js", category: "Frontend Framework" },
    { icon: <SiNextdotjs />, name: "Next.js", category: "React Framework" },
    { icon: <DiJavascript1 />, name: "JavaScript", category: "Programming Language" },
    { icon: <SiTypescript />, name: "TypeScript", category: "Programming Language" },
    { icon: <DiHtml5 />, name: "HTML5", category: "Markup Language" },
    { icon: <DiCss3 />, name: "CSS3", category: "Styling Language" },
  ];

  const backendTechnologies = [
    { icon: <DiJava />, name: "Java", category: "Programming Language" },
    { icon: <SiSpringboot />, name: "Spring Boot", category: "Java Framework" },
    { icon: <DiNodejs />, name: "Node.js", category: "JavaScript Runtime" },
    { icon: <SiExpress />, name: "Express.js", category: "Node.js Framework" },
    { icon: <DiPython />, name: "Python", category: "Programming Language" },
  ];

  const databaseTechnologies = [
    { icon: <DiMysql />, name: "MySQL", category: "Relational Database" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Relational Database" },
    { icon: <DiMongodb />, name: "MongoDB", category: "NoSQL Database" },
    { icon: <SiRedis />, name: "Redis", category: "In-Memory Database" },
    { icon: <SiFirebase />, name: "Firebase", category: "Cloud Database" },
  ];

  const stylingTechnologies = [
    { icon: <DiBootstrap />, name: "Bootstrap", category: "CSS Framework" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", category: "Utility-First CSS" },
    { icon: <SiRedux />, name: "Redux", category: "State Management" },
  ];

  const devOpsTechnologies = [
    { icon: <SiDocker />, name: "Docker", category: "Containerization" },
    { icon: <DiGit />, name: "Git", category: "Version Control" },
  ];

  const renderTechnologySection = (title, technologies, bgColor) => (
    <div className="tech-category-section" style={{ marginBottom: '3rem' }}>
      <h3 className="tech-category-title" style={{ 
        color: 'var(--primary-color)', 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontSize: '1.5rem',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
        {technologies.map((tech, index) => (
          <Col xs={4} sm={6} md={4} lg={3} xl={2} className="tech-icons" key={index}>
            <div className="tech-item" style={{ backgroundColor: bgColor }}>
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
              <div className="tech-name">
                {tech.name}
              </div>
              <div className="tech-category">
                {tech.category}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <div style={{ paddingBottom: "50px" }}>
      {renderTechnologySection("Frontend Development", frontendTechnologies, "rgba(79, 70, 229, 0.05)")}
      {renderTechnologySection("Backend Development", backendTechnologies, "rgba(16, 185, 129, 0.05)")}
      {renderTechnologySection("Database Technologies", databaseTechnologies, "rgba(245, 158, 11, 0.05)")}
      {renderTechnologySection("UI/UX & Styling", stylingTechnologies, "rgba(236, 72, 153, 0.05)")}
      {renderTechnologySection("DevOps & Cloud", devOpsTechnologies, "rgba(239, 68, 68, 0.05)")}
    </div>
  );
}

export default Techstack;
