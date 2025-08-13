import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Calendar, 
  Code, 
  TrendingUp,
  Award,
  Globe
} from "lucide-react";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Java Developer",
      company: "It Shaala, Pune",
      location: "Pune, Maharashtra",
      duration: "Jan 2024 - Sep 2024",
      type: "Internship",
      status: "Completed",
      description: "Developed enterprise web applications using Java Spring Boot and React.js. Worked on microservices architecture and implemented modern development practices during 9-month intensive program.",
      technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Docker", "Git"],
      achievements: [
        "Built 3 full-stack applications with 99.9% uptime",
        "Reduced API response time by 40% through optimization",
        "Collaborated with 5-member development team"
      ],
      icon: <Code size={18} />,
      color: "#4f46e5"
    },
    {
      id: 2,
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      duration: "Dec 2024 - Present",
      type: "Freelance",
      status: "Active",
      description: "Providing custom web development solutions for clients across various industries. Specializing in modern web technologies and responsive design.",
      technologies: ["React.js", "Node.js", "MongoDB", "Firebase", "Tailwind CSS","java", "Spring Boot","Docker","Python"],
      achievements: [
        "Completed 12+ successful projects",
        "Maintained 5-star client rating",
        "Implemented CI/CD pipelines for faster deployments",
      ],
      icon: <Globe size={18} />,
      color: "#059669"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row>
            <Col xs={12}>
              <motion.div variants={itemVariants} className="text-center mb-5">
                <h1 className="section-heading">
                  Professional <span className="highlight-text">Experience</span>
                </h1>
                <p className="section-subheading">
                  My journey in software development and the value I bring to organizations
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="timeline-container">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  >
                    <div className="experience-card">
                      <div className="card-header">
                        <div className="company-icon" style={{ backgroundColor: `${exp.color}20`, color: exp.color }}>
                          {exp.icon}
                        </div>
                        <div className="title-section">
                          <h3 className="position-title">{exp.title}</h3>
                          <h4 className="company-name">{exp.company}</h4>
                          <div className="meta-info">
                            <span className="duration">
                              <Calendar size={12} />
                              {exp.duration}
                            </span>
                            <span className="location">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                            <span className={`status ${exp.type.toLowerCase()}`}>
                              {exp.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <p className="description">{exp.description}</p>

                        <div className="achievements-section">
                          <h5>Key Achievements</h5>
                          <ul className="achievements-list">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>
                                <Award size={10} />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="technologies-section">
                          <h5>Technologies Used</h5>
                          <div className="tech-tags">
                            {exp.technologies.map((tech, idx) => (
                              <span key={idx} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={12} className="text-center">
              <motion.div variants={itemVariants} className="opportunity-section">
                <div className="opportunity-card">
                  <TrendingUp size={32} className="opportunity-icon" />
                  <h3>Open to New Opportunities</h3>
                  <p>
                    I'm actively seeking challenging full-time positions in software development. 
                    Ready to contribute to innovative projects and grow with a dynamic team.
                  </p>
                  <div className="opportunity-interests">
                    <span className="interest-tag">Full Stack Development</span>
                    <span className="interest-tag">Java Enterprise</span>
                    <span className="interest-tag">React Applications</span>
                    <span className="interest-tag">Microservices</span>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Experience;
