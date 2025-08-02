import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontWeight: '700'
              }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontWeight: '700'
              }}>
                I'm{" "}
                <span className="purple">Avadhut Nangare Patil</span>
              </h1>
              
              <div style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                fontWeight: '500'
              }}>
                <span className="purple">Full Stack Developer</span>
              </div>
              
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 0 3rem 0',
                lineHeight: '1.7'
              }}>
                Passionate about building modern web applications with{" "}
                <span className="purple">Java</span>,{" "}
                <span className="purple">Spring Boot</span>, and{" "}
                <span className="purple">React.js</span>
                <br />
                I love creating clean, efficient, and user-friendly solutions.
              </p>

              <div className="home-buttons" style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-start',
                flexWrap: 'wrap'
              }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  href="https://github.com/Anpatil1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn-custom"
                  style={{
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'var(--primary-color)',
                    borderColor: 'var(--primary-color)',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <AiFillGithub size={20} />
                  View My Work
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  href="#contact"
                  className="contact-btn-custom"
                  style={{
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'transparent',
                    color: 'var(--primary-color)',
                    border: '2px solid var(--primary-color)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <HiMail size={20} />
                  Contact Me
                </Button>
              </div>
            </Col>
            
            <Col md={5} className="myAvtar">
              <Tilt>
                <img 
                  src={myImg} 
                  className="img-fluid" 
                  alt="avatar"
                  style={{
                    maxHeight: '450px',
                    width: 'auto',
                    filter: 'drop-shadow(0 10px 25px rgba(79, 70, 229, 0.3))'
                  }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Add wave animation */}
      <style jsx>{`
        .wave {
          animation-name: wave-animation;
          animation-duration: 2.1s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        
        @keyframes wave-animation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
}

export default Home;
