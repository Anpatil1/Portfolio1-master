import React from "react";
import { Col, Row } from "react-bootstrap";
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
  Zap
} from "lucide-react";

function Toolstack() {
  const developmentTools = [
    { icon: <Code />, name: "VS Code", category: "Code Editor" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA", category: "IDE" },
    { icon: <SiPycharm />, name: "PyCharm", category: "Python IDE" },
  ];

  const apiTestingTools = [
    { icon: <SiPostman />, name: "Postman", category: "API Testing" },
    { icon: <Globe />, name: "Thunder Client", category: "VS Code Extension" },
    { icon: <Zap />, name: "REST Client", category: "API Testing" },
  ];

  const versionControlTools = [
    { icon: <SiGithub />, name: "GitHub", category: "Git Hosting" },
    { icon: <SiGitlab />, name: "GitLab", category: "DevOps Platform" },
    { icon: <GitBranch />, name: "Git", category: "Version Control" },
    { icon: <Cloud />, name: "Bitbucket", category: "Git Hosting" },
  ];

  const deploymentTools = [
    { icon: <SiVercel />, name: "Vercel", category: "Frontend Deployment" },
    { icon: <SiNetlify />, name: "Netlify", category: "Static Site Hosting" },
    { icon: <SiRender />, name: "Render", category: "Cloud Platform" },
    { icon: <SiHeroku />, name: "Heroku", category: "Cloud Platform" },
    { icon: <SiAmazonwebservices />, name: "AWS", category: "Cloud Services" },
    { icon: <SiDocker />, name: "Docker", category: "Containerization" },
    { icon: <Cloud />, name: "Azure", category: "Cloud Platform" },
    { icon: <Cloud />, name: "Google Cloud", category: "Cloud Platform" },
  ];

  const designTools = [
    { icon: <SiFigma />, name: "Figma", category: "UI/UX Design" },
    { icon: <Palette />, name: "Adobe XD", category: "Design Tool" },
    { icon: <Palette />, name: "Sketch", category: "UI Design" },
    { icon: <Palette />, name: "Photoshop", category: "Image Editor" },
    { icon: <Palette />, name: "Canva", category: "Graphic Design" },
  ];

  const projectManagementTools = [
    { icon: <SiJira />, name: "Jira", category: "Project Management" },
  ];

  const packageManagers = [
    { icon: <SiNpm />, name: "NPM", category: "Node Package Manager" },
    { icon: <SiYarn />, name: "Yarn", category: "Package Manager" },
    { icon: <Package />, name: "pnpm", category: "Fast Package Manager" },
    { icon: <Package />, name: "Composer", category: "PHP Package Manager" },
    { icon: <Package />, name: "pip", category: "Python Package Manager" },
    { icon: <Package />, name: "Maven", category: "Java Build Tool" },
  ];

  const operatingSystemsTools = [
    { icon: <Monitor />, name: "Windows", category: "Operating System" },
    { icon: <Monitor />, name: "macOS", category: "Operating System" },
    { icon: <SiLinux />, name: "Linux", category: "Operating System" },
    { icon: <SiUbuntu />, name: "Ubuntu", category: "Linux Distribution" },
  ];

  const terminalTools = [
    { icon: <Terminal />, name: "Terminal", category: "Command Line" },
    { icon: <Terminal />, name: "PowerShell", category: "Command Shell" },
    { icon: <Terminal />, name: "Bash", category: "Unix Shell" },
    { icon: <Terminal />, name: "Zsh", category: "Shell" },
  ];

  const renderToolSection = (title, tools, bgColor) => (
    <div className="tool-category-section" style={{ marginBottom: '3rem' }}>
      <h3 className="tool-category-title" style={{ 
        color: 'var(--secondary-color)', 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontSize: '1.5rem',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
        {tools.map((tool, index) => (
          <Col xs={4} sm={6} md={4} lg={3} xl={2} className="tech-icons" key={index}>
            <div className="tech-item" style={{ backgroundColor: bgColor }}>
              <div className="tech-icon-wrapper">
                {tool.icon}
              </div>
              <div className="tech-name">
                {tool.name}
              </div>
              <div className="tech-category">
                {tool.category}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <div style={{ paddingBottom: "50px" }}>
      {renderToolSection("Development Environment", developmentTools, "rgba(59, 130, 246, 0.05)")}
      {renderToolSection("API Testing & Development", apiTestingTools, "rgba(16, 185, 129, 0.05)")}
      {renderToolSection("Version Control & Git", versionControlTools, "rgba(245, 158, 11, 0.05)")}
      {renderToolSection("Deployment & Cloud", deploymentTools, "rgba(239, 68, 68, 0.05)")}
      {renderToolSection("Design & Prototyping", designTools, "rgba(236, 72, 153, 0.05)")}
      {renderToolSection("Project Management", projectManagementTools, "rgba(34, 197, 94, 0.05)")}
      {renderToolSection("Package Managers & Build Tools", packageManagers, "rgba(249, 115, 22, 0.05)")}
      {renderToolSection("Operating Systems", operatingSystemsTools, "rgba(168, 85, 247, 0.05)")}
      {renderToolSection("Terminal & Command Line", terminalTools, "rgba(6, 182, 212, 0.05)")}
    </div>
  );
}

export default Toolstack;
