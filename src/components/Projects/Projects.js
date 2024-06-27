import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expense from "../../Assets/Projects/expense.png";
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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IPl}
              isBlog={false}
              title="Ipl Winner Pridictor Web App"
              description="Built a machine learning model to predict the winner of IPL matches using Python and Scikit-learn.• Utilized pandas for data preprocessing and Matplotlib/Seaborn for data visualization.• Deployed the application using Streamlit for an interactive user interface."
              ghLink="https://github.com/Anpatil1/ipl-win-prediction."
              demoLink="https://ipl-winner-prediction-webapp.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sentiment}
              isBlog={false}
              title="Sentiment analysis Of Engg Colleges"
              description="This project is a Flask web application designed to collect, analyze, and visualize sentiment feedback about different colleges. Users can submit their feedback, view sentiment analysis results, and manage their accounts. in that webapp sentiment college data "
              ghLink="https://github.com/Anpatil1/sentiment-analysis"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Management Web Application "
              description="The Expense Management Application is a web-based tool designed to help users track and manage their expenses. It leverages JSP, Servlets, and JDBC for server-side operations, ensuring a robust and dynamic user experience."
              ghLink="https://github.com/Anpatil1/expense-management-web-application"
                       
            />
          </Col>

         

         
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
