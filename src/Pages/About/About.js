import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Shared/Header";
import "./About.css";
import images from "../../Assets/education.png";
const About = () => {
  return (
    <Container>
      <Header />
      <Row className="heigths">
        <Col xs={12} md={6} lg={6}>
          <div className="image">
            <img className=" myImages" src={images} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <div className="allTexs">
            <h2>About Me !!</h2>
            <h4>HI,</h4>
            <p className="paragraphs">
              I am Raju Ahammed Roton. I am a web designer and developer both
              front-end and back-end. I have several kinds of skills. I am very
              capable to turn your thought and dream into a modern and
              responsive website. You can fully depend on my task because I
              never give up and never keep any project incomplete.
            </p>
          </div>
          <div className="allTexs">
            <h2>Personal Information !!</h2>
            <h6>Name: Raju Ahammed Roton</h6>
            <h6>Address: 125, Anwar Yousuf Road, Barkhada, Kushtia, Bangladesh</h6>
            <h6>Contact: +8801765629262</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
