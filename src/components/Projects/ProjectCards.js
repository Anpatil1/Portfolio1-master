import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsArrowRight, BsCode, BsEye } from "react-icons/bs";

function ProjectCards(props) {
  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0
    },
    hover: { 
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1, filter: "brightness(0.8)" },
    hover: { 
      scale: 1.1, 
      filter: "brightness(1.1)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="project-card-container"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      style={{ perspective: "1000px" }}
    >
      <Card className="modern-project-card">
        <div className="card-image-container">
          <motion.div
            className="card-image-wrapper"
            variants={imageVariants}
          >
            <Card.Img 
              variant="top" 
              src={props.imgPath} 
              alt="project-preview" 
              className="project-image"
            />
          </motion.div>
          
          <motion.div 
            className="card-overlay"
            variants={overlayVariants}
          >
            <div className="overlay-content">
              <BsEye size={24} className="preview-icon" />
              <span>View Project</span>
            </div>
          </motion.div>

          <div className="card-tech-badges">
            <span className="tech-badge">
              <BsCode size={14} />
            </span>
          </div>
        </div>

        <Card.Body className="modern-card-body">
          <div className="card-header-section">
            <Card.Title className="modern-card-title">
              {props.title}
            </Card.Title>
            <div className="title-underline"></div>
          </div>
          
          <Card.Text className="modern-card-description">
            {props.description}
          </Card.Text>

          <div className="card-actions">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline-primary" 
                href={props.ghLink} 
                target="_blank" 
                className="modern-action-btn github-btn"
              >
                <BsGithub size={18} />
                <span>{props.isBlog ? "Blog" : "Code"}</span>
                <BsArrowRight size={16} className="btn-arrow" />
              </Button>
            </motion.div>

            {!props.isBlog && props.demoLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  className="modern-action-btn demo-btn"
                >
                  <CgWebsite size={18} />
                  <span>Live Demo</span>
                  <BsArrowRight size={16} className="btn-arrow" />
                </Button>
              </motion.div>
            )}
          </div>
        </Card.Body>

        <div className="card-glow-effect"></div>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
