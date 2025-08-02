import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import Particle from "../Particle";
import pdf from "../../Assets/Avadhut Nangare_Patil_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure PDF.js worker with fallback options
const configurePDFWorker = () => {
  // Try multiple worker sources for better compatibility
  const workerSources = [
    `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`,
    `https://mozilla.github.io/pdf.js/build/pdf.worker.js`
  ];
  
  // Use the first available worker source
  pdfjs.GlobalWorkerOptions.workerSrc = workerSources[0];
  console.log('PDF Worker configured with:', pdfjs.GlobalWorkerOptions.workerSrc);
};

// Configure worker when component loads
configurePDFWorker();

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfSource, setPdfSource] = useState(pdf);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log('PDF loaded successfully with', numPages, 'pages');
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF Loading Error Details:', error);
    console.error('Worker source:', pdfjs.GlobalWorkerOptions.workerSrc);
    console.error('PDF file path:', pdfSource);
    
    // Try fallback to public folder if original fails
    if (pdfSource === pdf) {
      console.log('Trying fallback PDF source...');
      setPdfSource('/resume.pdf');
      setError(null);
      setLoading(true);
      return;
    }
    
    setError(`Failed to load PDF: ${error.message || 'Unknown error'}. Please try downloading it directly.`);
    setLoading(false);
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
    <Container fluid className="resume-section">
      <Particle />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container style={{ maxWidth: '1200px' }}>
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
                My <strong className="purple">Resume</strong>
              </motion.h1>
            </Col>
          </Row>

          <Row className="justify-content-center mb-4">
            <Col xs="auto">
              <motion.div variants={itemVariants}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-btn pulse-btn"
                  size="lg"
                  style={{
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: 'var(--border-radius)',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <AiOutlineDownload size={20} />
                  Download Resume
                </Button>
              </motion.div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <motion.div 
                variants={itemVariants}
                className="resume-viewer"
                style={{
                  background: 'var(--background-card)',
                  padding: '2rem',
                  borderRadius: 'var(--border-radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid rgba(79, 70, 229, 0.1)',
                  maxWidth: '100%',
                  overflow: 'hidden'
                }}
              >
                {loading && (
                  <div className="text-center py-5">
                    <div className="spinner-border" role="status" style={{ color: 'var(--primary-color)' }}>
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>Loading Resume...</p>
                  </div>
                )}

                {error && (
                  <div className="text-center py-5">
                    <div className="alert alert-warning" role="alert">
                      <h5 style={{ color: 'var(--warning-color)' }}>⚠️ PDF Loading Error</h5>
                      <p style={{ color: 'var(--text-secondary)' }}>{error}</p>
                      <Button
                        variant="outline-primary"
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2"
                      >
                        <AiOutlineDownload className="me-2" />
                        Download PDF Directly
                      </Button>
                    </div>
                  </div>
                )}

                {!error && (
                  <Document
                    file={pdfSource}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading=""
                    className="d-flex justify-content-center"
                    options={{
                      cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
                      cMapPacked: true,
                      standardFontDataUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/standard_fonts/',
                    }}
                  >
                    <Page
                      pageNumber={pageNumber}
                      scale={width > 768 ? 1.6 : 0.8}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </Document>
                )}

                {numPages && numPages > 1 && (
                  <div className="text-center mt-3">
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Page {pageNumber} of {numPages}
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        disabled={pageNumber <= 1}
                        onClick={() => setPageNumber(pageNumber - 1)}
                      >
                        Previous
                      </Button>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        disabled={pageNumber >= numPages}
                        onClick={() => setPageNumber(pageNumber + 1)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col xs="auto">
              <motion.div variants={itemVariants}>
                <Button
                  variant="outline-primary"
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-btn"
                  style={{
                    padding: '10px 25px',
                    borderRadius: 'var(--border-radius)',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <AiOutlineDownload size={18} />
                  Download Resume
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </Container>
  );
}

export default ResumeNew;
