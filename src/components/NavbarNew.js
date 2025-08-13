import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import {
  Home,
  User,
  Monitor,
  FileText,
  Github,
  Star,
  Sun,
  Moon,
  Menu,
  X,
  BookOpen,
  Mail,
  Briefcase
} from "lucide-react";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    updateExpanded(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  window.addEventListener("scroll", scrollHandler);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <motion.div 
              className="brand-logo-text" 
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <span className="logo-letter">A</span>
              <span className="logo-letter">N</span>
              <span className="logo-letter">P</span>
            </motion.div>
          </Navbar.Brand>
          
          <div className="navbar-actions">
            <Button
              variant="outline"
              className="theme-toggle-btn me-3"
              onClick={toggleTheme}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </Button>
            
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(expand ? false : "expanded");
              }}
              className="custom-toggle"
            >
              <motion.div
                animate={{ rotate: expand ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {expand ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
                  <Home size={16} style={{ marginBottom: "2px", marginRight: "5px" }} /> 
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>
                  <User size={16} style={{ marginBottom: "2px", marginRight: "5px" }} /> 
                  About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('experience')} style={{ cursor: 'pointer' }}>
                  <Briefcase size={16} style={{ marginBottom: "2px", marginRight: "5px" }} /> 
                  Experience
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>
                  <Monitor size={16} style={{ marginBottom: "2px", marginRight: "5px" }} /> 
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>
                  <Mail size={16} style={{ marginBottom: "2px", marginRight: "5px" }} /> 
                  Contact
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('resume')} style={{ cursor: 'pointer' }}>
                  <FileText size={16} style={{ marginBottom: "2px", marginRight: "5px" }} /> 
                  Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/blog" onClick={() => updateExpanded(false)}>
                  <BookOpen size={16} style={{ marginBottom: "2px", marginRight: "5px" }} /> 
                  Blog
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/Anpatil1"
                  target="_blank"
                  className="fork-btn-inner"
                  title="View on GitHub"
                >
                  <Github size={16} style={{ marginRight: "5px" }} />
                  <Star size={16} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;
