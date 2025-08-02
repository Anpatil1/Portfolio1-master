import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Avadhut Nangare Patil</span>, a dedicated and enthusiastic 
            <span className="purple"> Java Full Stack Developer</span> based in <span className="purple">Maharashtra, India</span>.
            <br />
            <br />
            I hold a <span className="purple">B.Tech in Computer Science & Engineering</span> from AMGOI, Kolhapur (2024), 
            where I developed a strong foundation in software development principles and modern programming practices.
            <br />
            <br />
            My expertise spans across <span className="purple">full-stack development</span> with proficiency in 
            <span className="purple"> Java, Spring Boot,Python, React.js, MySQL</span>, and modern web technologies. 
            I'm passionate about creating efficient, scalable solutions and writing clean, maintainable code.
            <br />
            <br />
            I believe in continuous learning and staying updated with emerging technologies. My goal is to contribute 
            to meaningful projects that make a positive impact while growing as a professional developer.
            <br />
            <br />
            When I'm not coding, here are some activities I enjoy:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            <li className="about-activity" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '0.8rem',
              padding: '0.5rem',
              borderRadius: '8px',
              background: 'rgba(79, 70, 229, 0.05)',
              border: '1px solid rgba(79, 70, 229, 0.1)'
            }}>
              <ImPointRight style={{ 
                color: 'var(--primary-color)', 
                marginRight: '10px', 
                fontSize: '1.2rem' 
              }} /> 
              <span style={{ color: 'var(--text-primary)' }}>
                Exploring new programming languages and frameworks
              </span>
            </li>
            <li className="about-activity" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '0.8rem',
              padding: '0.5rem',
              borderRadius: '8px',
              background: 'rgba(79, 70, 229, 0.05)',
              border: '1px solid rgba(79, 70, 229, 0.1)'
            }}>
              <ImPointRight style={{ 
                color: 'var(--primary-color)', 
                marginRight: '10px', 
                fontSize: '1.2rem' 
              }} /> 
              <span style={{ color: 'var(--text-primary)' }}>
                Contributing to open-source projects
              </span>
            </li>
            <li className="about-activity" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '0.8rem',
              padding: '0.5rem',
              borderRadius: '8px',
              background: 'rgba(79, 70, 229, 0.05)',
              border: '1px solid rgba(79, 70, 229, 0.1)'
            }}>
              <ImPointRight style={{ 
                color: 'var(--primary-color)', 
                marginRight: '10px', 
                fontSize: '1.2rem' 
              }} /> 
              <span style={{ color: 'var(--text-primary)' }}>
                Reading tech blogs and staying updated with industry trends
              </span>
            </li>
            <li className="about-activity" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '0.8rem',
              padding: '0.5rem',
              borderRadius: '8px',
              background: 'rgba(79, 70, 229, 0.05)',
              border: '1px solid rgba(79, 70, 229, 0.1)'
            }}>
              <ImPointRight style={{ 
                color: 'var(--primary-color)', 
                marginRight: '10px', 
                fontSize: '1.2rem' 
              }} /> 
              <span style={{ color: 'var(--text-primary)' }}>
                Building personal projects to experiment with new technologies
              </span>
            </li>
            <li className="about-activity" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '0.8rem',
              padding: '0.5rem',
              borderRadius: '8px',
              background: 'rgba(79, 70, 229, 0.05)',
              border: '1px solid rgba(79, 70, 229, 0.1)'
            }}>
              <ImPointRight style={{ 
                color: 'var(--primary-color)', 
                marginRight: '10px', 
                fontSize: '1.2rem' 
              }} /> 
              <span style={{ color: 'var(--text-primary)' }}>
                Playing strategy games and problem-solving puzzles
              </span>
            </li>
            <li className="about-activity" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '0.8rem',
              padding: '0.5rem',
              borderRadius: '8px',
              background: 'rgba(79, 70, 229, 0.05)',
              border: '1px solid rgba(79, 70, 229, 0.1)'
            }}>
              <ImPointRight style={{ 
                color: 'var(--primary-color)', 
                marginRight: '10px', 
                fontSize: '1.2rem' 
              }} /> 
              <span style={{ color: 'var(--text-primary)' }}>
                Traveling and experiencing different cultures
              </span>
            </li>
          </ul>

          <p style={{ color: "var(--primary-color)", fontStyle: "italic", fontSize: "1.1em", marginTop: "2rem", fontWeight: "600" }}>
            "Code is like humor. When you have to explain it, it's bad. I strive to write code that speaks for itself 
            and creates solutions that make a difference."
          </p>
          <footer className="blockquote-footer" style={{ color: "var(--text-secondary)", marginTop: "1rem", fontSize: "1rem" }}>
            Avadhut Nangare Patil
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
