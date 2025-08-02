import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Container fluid className="error-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={8} lg={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="error-code"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.h1>
              <h2 className="error-title mb-4">Page Not Found</h2>
              <p className="error-description mb-5">
                Oops! The page you're looking for doesn't exist. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
              <div className="error-actions">
                <Button 
                  as={Link} 
                  to="/" 
                  className="modern-btn me-3"
                  size="lg"
                >
                  <Home size={18} className="me-2" />
                  Go Home
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.history.back()}
                  size="lg"
                >
                  <ArrowLeft size={18} className="me-2" />
                  Go Back
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ErrorPage;
