import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Loader
} from "lucide-react";
import ParticleNew from "../ParticleNew";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration - Use environment variables for security and flexibility
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const emailConfigOk = Boolean(serviceId && templateId && publicKey);

  // Initialize EmailJS with your public key (only once)
  useEffect(() => {
    if (publicKey) {
      try {
        emailjs.init(publicKey);
      } catch (e) {
        console.error('EmailJS init failed:', e);
      }
    } else {
      console.warn('EmailJS public key is missing. Check your .env.local');
    }
  }, [publicKey]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!emailConfigOk) {
        throw new Error('Email service is not configured. Missing Service ID, Template ID, or Public Key');
      }
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "nangareavadhut@gmail.com",
        reply_to: formData.email
      };

      // Send email using EmailJS (publicKey is already initialized)
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200) {
        toast.success("🎉 Message sent successfully! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // EmailJSResponseStatus exposes 'status' & 'text' fields
      const status = error?.status;
      const detail = error?.text || error?.message || 'Unknown error';
      console.error('EmailJS Error:', { status, detail, error });
      if (!emailConfigOk) {
        toast.error('Email is temporarily unavailable. Please try again later or email me at nangareavadhut@gmail.com');
      } else {
        toast.error(`❌ Failed to send message (${status || 'n/a'}). ${detail}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    return formData.name.trim() !== "" && 
           formData.email.trim() !== "" && 
           formData.subject.trim() !== "" && 
           formData.message.trim() !== "";
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
        <title>Avadhut | Portfolio</title>
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
                              disabled={isSubmitting}
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
                              disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
                          className="modern-input"
                          placeholder="Tell me about your project or how we can work together..."
                          style={{ resize: 'vertical', minHeight: '120px' }}
                        />
                      </Form.Group>
                      <Button 
                        type="submit" 
                        disabled={!validateForm() || isSubmitting || !emailConfigOk}
                        className="modern-btn pulse-btn"
                        size="lg"
                        style={{ 
                          width: '100%',
                          background: isSubmitting ? 'var(--text-secondary)' : 'var(--primary-color)',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: '8px',
                          fontWeight: '600',
                          fontSize: '1.1rem',
                          color: 'white',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          opacity: isSubmitting ? 0.7 : 1,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader size={20} className="me-2" style={{ animation: 'spin 1s linear infinite' }} />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} className="me-2" />
                            {emailConfigOk ? 'Send Message' : 'Email Unavailable'}
                          </>
                        )}
                      </Button>
                      {!emailConfigOk && (
                        <p className="mt-2 mb-0" style={{ color: 'var(--warning-color)', fontSize: '0.9rem' }}>
                          Email service not configured. Please set REACT_APP_EMAILJS_* in .env.local and restart.
                        </p>
                      )}
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
