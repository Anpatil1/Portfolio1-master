import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expense from "../../Assets/Projects/expense.png";
import expense1 from "../../Assets/Projects/web_expense.png";
import Chat from "../../Assets/Projects/QuickChat.png";
import IPl from "../../Assets/Projects/ipl.png";
import Sentiment from "../../Assets/Projects/sentiment.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are some of the recent projects I have worked on, showcasing my skills and expertise in full-stack development and data analysis.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IPl}
              isBlog={false}
              title="IPL Winner Predictor Web App"
              description="Developed a machine learning model using Python and Scikit-learn to predict IPL match winners. The app features a user-friendly interface built with Streamlit for real-time predictions and data visualization."
              ghLink="https://github.com/Anpatil1/ipl-win-prediction"
              demoLink="https://ipl-winner-prediction-webapp.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sentiment}
              isBlog={false}
              title="Sentiment Analysis of Engineering Colleges"
              description="Created a Flask-based web app to perform sentiment analysis on user feedback for engineering colleges. Leveraged Python and NLP techniques to analyze sentiment trends, offering valuable insights through interactive visualizations."
              ghLink="https://github.com/Anpatil1/sentiment-analysis"
              demoLink="https://sentiment-analysis-6o30.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense1}
              isBlog={false}
              title="Expense Management Web Application"
              description="Built a full-stack web app using Spring Boot and React.js to manage personal and organizational expenses. Features include user authentication, real-time data visualization, and CSV bulk import functionality."
              ghLink="https://github.com/Anpatil1/expense-management-web-application"
              demoLink="https://expense-management-app1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Management System"
              description="Developed a dynamic JSP, Servlets, and JDBC-based web application to track and manage expenses, providing users with a robust and seamless experience."
              ghLink="https://github.com/Anpatil1/expense-mgmt-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="QuickChat - Real-time Chat Application"
              description="Designed a real-time chat application using Spring Boot and WebSocket. Implemented secure messaging with Spring Security and built responsive templates using Thymeleaf for enhanced user experience."
              ghLink="https://github.com/Anpatil1/real-spring-chat"
              demoLink="https://real-spring-chat.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
