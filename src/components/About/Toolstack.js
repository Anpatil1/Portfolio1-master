import React, { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPostman,
  SiGithub,
  SiVercel,
  SiPycharm,
  SiIntellijidea,
  SiNetlify,
  SiHeroku,
  SiDocker,
  SiFigma,
  SiGitlab,
  SiLinux,
  SiNpm,
  SiYarn,
  SiJira,
  SiUbuntu,
  SiAmazonwebservices,
  SiRender,
  SiAnaconda,
  SiGooglecolab,
  SiKaggle,
  SiTableau,
} from "react-icons/si";
import { 
  Code, 
  Terminal, 
  Cloud, 
  Monitor, 
  Globe,
  Palette,
  Package,
  GitBranch,
  Zap,
  ChevronDown,
  Eye,
  EyeOff,
  Brain,
  BarChart3
} from "lucide-react";

function Toolstack() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    development: true,
    apiTesting: true,
    versionControl: true,
    deployment: true,
    aimlTools: true,
    dataAnalytics: false,
    design: false,
    projectMgmt: false,
    packageMgmt: false,
    os: false,
    terminal: false
  });

  const handleIconClick = (tool) => {
    setSelectedTool(tool);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTool(null);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleAllSections = () => {
    const allExpanded = Object.values(expandedSections).every(val => val);
    const newState = Object.keys(expandedSections).reduce((acc, key) => {
      acc[key] = !allExpanded;
      return acc;
    }, {});
    setExpandedSections(newState);
  };

  const developmentTools = [
    { icon: <Code />, name: "VS Code", category: "Code Editor", color: "#007ACC", description: "Lightweight but powerful source code editor" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA", category: "IDE", color: "#000000", description: "Integrated development environment for Java" },
    { icon: <SiPycharm />, name: "PyCharm", category: "Python IDE", color: "#000000", description: "Python IDE for professional developers" },
  ];

  const apiTestingTools = [
    { icon: <SiPostman />, name: "Postman", category: "API Testing", color: "#FF6C37", description: "API platform for building and using APIs" },
    { icon: <Globe />, name: "Thunder Client", category: "VS Code Extension", color: "#4FC3F7", description: "Lightweight Rest API client for VS Code" },
    { icon: <Zap />, name: "REST Client", category: "API Testing", color: "#FFD700", description: "REST client extension for VS Code" },
  ];

  const versionControlTools = [
    { icon: <SiGithub />, name: "GitHub", category: "Git Hosting", color: "#181717", description: "Web-based hosting service for version control" },
    { icon: <SiGitlab />, name: "GitLab", category: "DevOps Platform", color: "#FC6D26", description: "Complete DevOps platform" },
    { icon: <GitBranch />, name: "Git", category: "Version Control", color: "#F05032", description: "Distributed version control system" },
    { icon: <Cloud />, name: "Bitbucket", category: "Git Hosting", color: "#0052CC", description: "Git repository management solution" },
  ];

  const deploymentTools = [
    { icon: <SiVercel />, name: "Vercel", category: "Frontend Deployment", color: "#000000", description: "Platform for frontend frameworks and static sites" },
    { icon: <SiNetlify />, name: "Netlify", category: "Static Site Hosting", color: "#00C7B7", description: "Platform for automating modern web projects" },
    { icon: <SiRender />, name: "Render", category: "Cloud Platform", color: "#46E3B7", description: "Cloud platform for hosting web services" },
    { icon: <SiHeroku />, name: "Heroku", category: "Cloud Platform", color: "#430098", description: "Cloud platform as a service" },
    { icon: <SiAmazonwebservices />, name: "AWS", category: "Cloud Services", color: "#FF9900", description: "Comprehensive cloud computing platform" },
    { icon: <SiDocker />, name: "Docker", category: "Containerization", color: "#2496ED", description: "Platform for developing, shipping, and running applications" },
    { icon: <Cloud />, name: "Azure", category: "Cloud Platform", color: "#0078D4", description: "Microsoft's cloud computing service" },
    { icon: <Cloud />, name: "Google Cloud", category: "Cloud Platform", color: "#4285F4", description: "Google's cloud computing services" },
  ];

  const aimlTools = [
    { icon: <SiAnaconda />, name: "Anaconda", category: "Data Science Platform", color: "#44A833", description: "Distribution platform for Python and R programming" },
    { icon: <SiGooglecolab />, name: "Google Colab", category: "Cloud Notebook", color: "#F9AB00", description: "Cloud-based Jupyter notebook environment" },
    { icon: <SiKaggle />, name: "Kaggle", category: "Data Science Platform", color: "#20BEFF", description: "Platform for data science competitions and datasets" },
    { icon: <Brain />, name: "Jupyter Lab", category: "Development Environment", color: "#F37626", description: "Next-generation web-based interface for Project Jupyter" },
  ];

  const dataAnalyticsTools = [
        { icon: <SiTableau />, name: "Tableau", category: "Data Visualization", color: "#E97627", description: "Powerful data visualization and business intelligence" },
    { icon: <BarChart3 />, name: "Excel", category: "Spreadsheet", color: "#217346", description: "Microsoft spreadsheet application" },
    { icon: <BarChart3 />, name: "Google Sheets", category: "Cloud Spreadsheet", color: "#34A853", description: "Web-based spreadsheet application" },
  ];

  const designTools = [
    { icon: <SiFigma />, name: "Figma", category: "UI/UX Design", color: "#F24E1E", description: "Web-based UI and UX design application" },
    { icon: <Palette />, name: "Adobe XD", category: "Design Tool", color: "#FF61F6", description: "Vector-based user experience design tool" },
    { icon: <Palette />, name: "Sketch", category: "UI Design", color: "#F7B500", description: "Digital design platform for macOS" },
    { icon: <Palette />, name: "Photoshop", category: "Image Editor", color: "#31A8FF", description: "Raster graphics editor for image editing" },
    { icon: <Palette />, name: "Canva", category: "Graphic Design", color: "#00C4CC", description: "Online graphic design platform" },
  ];

  const projectManagementTools = [
    { icon: <SiJira />, name: "Jira", category: "Project Management", color: "#0052CC", description: "Issue tracking and project management tool" },
  ];

  const packageManagers = [
    { icon: <SiNpm />, name: "NPM", category: "Node Package Manager", color: "#CB3837", description: "Package manager for JavaScript" },
    { icon: <SiYarn />, name: "Yarn", category: "Package Manager", color: "#2C8EBB", description: "Fast, reliable, and secure dependency management" },
    { icon: <Package />, name: "pnpm", category: "Fast Package Manager", color: "#F69220", description: "Fast, disk space efficient package manager" },
    { icon: <Package />, name: "Composer", category: "PHP Package Manager", color: "#885630", description: "Dependency manager for PHP" },
    { icon: <Package />, name: "pip", category: "Python Package Manager", color: "#3776AB", description: "Package installer for Python" },
    { icon: <Package />, name: "Maven", category: "Java Build Tool", color: "#C71A36", description: "Build automation tool for Java projects" },
  ];

  const operatingSystemsTools = [
    { icon: <Monitor />, name: "Windows", category: "Operating System", color: "#0078D6", description: "Microsoft Windows operating system" },
    { icon: <Monitor />, name: "macOS", category: "Operating System", color: "#000000", description: "Apple's desktop operating system" },
    { icon: <SiLinux />, name: "Linux", category: "Operating System", color: "#FCC624", description: "Open-source Unix-like operating system" },
    { icon: <SiUbuntu />, name: "Ubuntu", category: "Linux Distribution", color: "#E95420", description: "Popular Linux distribution" },
  ];

  const terminalTools = [
    { icon: <Terminal />, name: "Terminal", category: "Command Line", color: "#000000", description: "Command-line interface for system interaction" },
    { icon: <Terminal />, name: "PowerShell", category: "Command Shell", color: "#012456", description: "Microsoft's command-line shell and scripting language" },
    { icon: <Terminal />, name: "Bash", category: "Unix Shell", color: "#4EAA25", description: "Unix shell and command language" },
    { icon: <Terminal />, name: "Zsh", category: "Shell", color: "#F15A24", description: "Extended Bourne shell with improvements" },
  ];

  const renderToolSection = (title, tools, bgGradient, sectionKey, sectionIndex) => (
    <motion.div 
      className="tool-category-section" 
      style={{ marginBottom: '2rem' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: sectionIndex * 0.1 }}
    >
      <div 
        className="tool-section-header"
        onClick={() => toggleSection(sectionKey)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
          borderRadius: '12px',
          cursor: 'pointer',
          marginBottom: '1rem',
          border: `2px solid ${expandedSections[sectionKey] ? 'var(--secondary-color)' : 'transparent'}`,
          transition: 'all 0.3s ease'
        }}
      >
        <h3 style={{ 
          color: 'var(--secondary-color)', 
          margin: 0,
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {title}
          <span style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            marginLeft: '0.5rem',
            fontWeight: '400'
          }}>
            ({tools.length} tools)
          </span>
        </h3>
        <motion.div
          animate={{ rotate: expandedSections[sectionKey] ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--secondary-color)' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {expandedSections[sectionKey] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <Row style={{ justifyContent: "center", gap: "0.5rem", margin: 0 }}>
              {tools.map((tool, index) => (
                <Col xs={6} sm={4} md={3} lg={2} className="tool-icons-new" key={index} style={{ marginBottom: '1.5rem', padding: '0.25rem' }}>
                  <motion.div 
                    className="tool-item-new" 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    style={{ 
                      background: bgGradient,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '16px',
                      padding: '1.5rem 1rem',
                      border: '2px solid transparent',
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onClick={() => handleIconClick(tool)}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      borderColor: tool.color,
                      boxShadow: `0 15px 30px rgba(0,0,0,0.1), 0 0 15px ${tool.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="tool-icon-wrapper-new" style={{
                      fontSize: 'clamp(2rem, 6vw, 3rem)',
                      color: tool.color,
                      textAlign: 'center',
                      marginBottom: '0.5rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}>
                      {tool.icon}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      textAlign: 'center',
                      lineHeight: '1.2'
                    }}>
                      {tool.name}
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <>
      <div style={{ paddingBottom: "30px" }}>
        {/* Global Toggle Button */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(124, 58, 237, 0.1)'
        }}>
          <h2 style={{
            color: 'var(--secondary-color)',
            marginBottom: '1rem',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '700'
          }}>
            Professional Tools & Platforms
          </h2>
          <Button
            variant="outline-secondary"
            onClick={toggleAllSections}
            style={{
              borderRadius: '25px',
              padding: '0.5rem 1.5rem',
              fontWeight: '600',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '0 auto',
              borderColor: 'var(--secondary-color)',
              color: 'var(--secondary-color)'
            }}
          >
            {Object.values(expandedSections).every(val => val) ? (
              <>
                <EyeOff size={16} />
                Collapse All
              </>
            ) : (
              <>
                <Eye size={16} />
                Expand All
              </>
            )}
          </Button>
        </div>

        {renderToolSection("Development Environment", developmentTools, "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)", "development", 0)}
        {renderToolSection("API Testing & Development", apiTestingTools, "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)", "apiTesting", 1)}
        {renderToolSection("Version Control & Git", versionControlTools, "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)", "versionControl", 2)}
        {renderToolSection("Deployment & Cloud", deploymentTools, "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)", "deployment", 3)}
        {renderToolSection("AI/ML & Data Science Tools", aimlTools, "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)", "aimlTools", 4)}
        {renderToolSection("Data Analytics & Visualization", dataAnalyticsTools, "linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)", "dataAnalytics", 5)}
        {renderToolSection("Design & Prototyping", designTools, "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)", "design", 6)}
        {renderToolSection("Project Management", projectManagementTools, "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)", "projectMgmt", 7)}
        {renderToolSection("Package Managers & Build Tools", packageManagers, "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)", "packageMgmt", 8)}
        {renderToolSection("Operating Systems", operatingSystemsTools, "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)", "os", 9)}
        {renderToolSection("Terminal & Command Line", terminalTools, "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)", "terminal", 10)}
      </div>
      
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton style={{ 
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          color: 'white',
          border: 'none'
        }}>
          <Modal.Title style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            fontSize: '1.5rem',
            fontWeight: '700'
          }}>
            {selectedTool && (
              <>
                <span style={{ 
                  fontSize: '2rem', 
                  color: selectedTool.color,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}>
                  {selectedTool.icon}
                </span>
                {selectedTool.name}
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ 
          padding: '2rem',
          background: 'var(--background-card)',
          color: 'var(--text-primary)'
        }}>
          {selectedTool && (
            <div>
              <div style={{ 
                background: `linear-gradient(135deg, ${selectedTool.color}20, ${selectedTool.color}10)`,
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                border: `2px solid ${selectedTool.color}30`
              }}>
                <h5 style={{ 
                  color: selectedTool.color, 
                  margin: '0 0 0.5rem 0',
                  fontWeight: '600'
                }}>
                  {selectedTool.category}
                </h5>
                <p style={{ 
                  margin: 0, 
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  {selectedTool.description}
                </p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Toolstack;
