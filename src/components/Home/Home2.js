import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <b className="purple">Junior Software Developer</b> with a strong foundation in full-stack development and a constant drive to learn and improve.
              <br />
              <br />
              I enjoy building responsive and scalable web applications using technologies like{" "}
              <b className="purple">Java, Spring Boot,Python, React.js, HTML, CSS, and JavaScript</b>. I am also familiar with databases like <b className="purple">MySQL</b> and tools like <b className="purple">Git, Postman</b>, and <b className="purple">VS Code</b>.
              <br />
              <br />
              My core interests include developing efficient and user-friendly software solutions. I'm particularly enthusiastic about{" "}
              <b className="purple">web technologies, API development</b>, and emerging areas such as{" "}
              <b className="purple">Machine Learning</b>.
              <br />
              <br />
              I value clean code, collaboration, and continuous learning. As I grow in this field, I aim to contribute to impactful projects and advance my expertise in modern development practices.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Avatar of Avadhut Nangare Patil" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              I'm always open to connect and collaborate. Let's grow together! <br />
              <span className="purple">Feel free to reach out</span> on these platforms:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Anpatil1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/nangare_pa61945"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/avadhut-nangare-patil-470901250/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anpatil2621"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
