import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle
} from "lucide-react";
import ParticleNew from "../ParticleNew";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Container fluid className="contact-section" style={{ padding: '0 15px' }}>
      <Helmet>
        <title>Contact | Portfolio</title>
        <meta name="description" content="Get in touch with me for collaborations, opportunities, or just to say hello!" />
      </Helmet>
      
      <ParticleNew />
      
      <Container style={{ maxWidth: '1200px' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="justify-content-center">
            <Col xs={12}>
              <motion.h1 
                variants={itemVariants}
                className="project-heading text-center mb-5"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  marginBottom: '3rem'
                }}
              >
                Get In <strong className="purple">Touch</strong>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-center mb-5"
                style={{ 
                  fontSize: '1.1rem',
                  maxWidth: '600px',
                  margin: '0 auto 3rem',
                  color: 'var(--text-secondary)'
                }}
              >
                Have a project in mind or want to collaborate? I'd love to hear from you! 
                Let's create something amazing together.
              </motion.p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={8} xl={7} className="mb-4">
              <motion.div variants={itemVariants}>
                <Card className="contact-form-card glass-card">
                  <Card.Body className="p-4 p-lg-5">
                    <h3 className="mb-4 d-flex align-items-center" style={{ color: 'var(--primary-color)' }}>
                      <MessageCircle size={28} className="me-3" />
                      Send a Message
                    </h3>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Full Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="modern-input"
                              placeholder="Enter your full name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Email Address *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="modern-input"
                              placeholder="your.email@example.com"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Subject *</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="modern-input"
                          placeholder="What's this about?"
                        />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold">Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={6}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="modern-input"
                          placeholder="Tell me about your project or how we can work together..."
                          style={{ resize: 'vertical', minHeight: '120px' }}
                        />
                      </Form.Group>
                      <Button 
                        type="submit" 
                        className="modern-btn pulse-btn"
                        size="lg"
                        style={{ 
                          width: '100%',
                          background: 'var(--gradient-secondary)',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: 'var(--border-radius)',
                          fontWeight: '600',
                          fontSize: '1.1rem'
                        }}
                      >
                        <Send size={20} className="me-2" />
                        Send Message
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col lg={4} xl={5}>
              <motion.div variants={itemVariants}>
                <Card className="contact-info-card glass-card mb-4">
                  <Card.Body className="p-4 p-lg-5">
                    <h3 className="mb-4" style={{ color: 'var(--primary-color)' }}>Contact Information</h3>
                    <div className="contact-item mb-4">
                      <Mail size={24} className="contact-icon me-3" style={{ color: 'var(--accent-color)' }} />
                      <div>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Email</strong>
                        <p style={{ 
                          color: 'var(--text-secondary)', 
                          margin: '0.25rem 0 0',
                          fontSize: '1rem',
                          wordBreak: 'break-word'
                        }}>
                          nangareavadhut@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="contact-item mb-4">
                      <Phone size={24} className="contact-icon me-3" style={{ color: 'var(--success-color)' }} />
                      <div>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Phone</strong>
                        <p style={{ 
                          color: 'var(--text-secondary)', 
                          margin: '0.25rem 0 0',
                          fontSize: '1rem'
                        }}>
                          +91 77093 26507
                        </p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <MapPin size={24} className="contact-icon me-3" style={{ color: 'var(--warning-color)' }} />
                      <div>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Location</strong>
                        <p style={{ 
                          color: 'var(--text-secondary)', 
                          margin: '0.25rem 0 0',
                          fontSize: '1rem'
                        }}>
                          Pune, Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <motion.div variants={itemVariants}>
                  <Card className="social-links-card glass-card">
                    <Card.Body className="p-4 p-lg-5">
                      <h3 className="mb-4" style={{ color: 'var(--primary-color)' }}>Connect With Me</h3>
                      <div className="social-links d-flex justify-content-center gap-3">
                        <a href="https://github.com/Anpatil1" className="social-link" target="_blank" rel="noopener noreferrer">
                          <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/avadhut-nangare-patil-470901250/" className="social-link" target="_blank" rel="noopener noreferrer">
                          <Linkedin size={24} />
                        </a>
                        <a href="https://twitter.com/#" className="social-link" target="_blank" rel="noopener noreferrer">
                          <Twitter size={24} />
                        </a>
                      </div>
                      <p className="text-center mt-3 mb-0" style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem'
                      }}>
                        Follow me for updates and insights!
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Contact;
