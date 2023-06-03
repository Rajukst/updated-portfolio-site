import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeWidth">
      <Container fluid>
        <Row>
          <Col xs={12} md={7} className="banner">
            <div className="designs">
              <div className="socialDesign">
                <p className="test2">
                  <i class="fa-brands fa-facebook"></i>
                </p>
                <p className="test2">
                  <i class="fa-brands fa-linkedin-in"></i>
                </p>
                <p className="test2">
                  <i class="fa-brands fa-github"></i>
                </p>
                <p className="test2">
                  <i class="fa-brands fa-hackerrank"></i>
                </p>
                <p className="test23">
                  Follow Me !!
                </p>
              </div>
              <div className="textDesign">
                <div className="wellcome">
                    <h1 className="title">I'm Raju Ahammed</h1>
                </div>
                <div className="animations">
                <h3
                  style={{
                    fontWeight: "normal", textAlign:"left",
                  }}
                >
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    <Typewriter
                      words={[
                        "I Love Coding",
                        "Develop Mobile Apps",
                        "I code Cool Website",
                        "Generate New ideas",
                      ]}
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </div>
                </h3>
                </div>
                <div className="resume">
                <Link
                  className="very-important"
                  to="/Raju Ahammed Roton_Jr Web Developer_Resume.pdf"
                  target="_blank"
                  download
                >
                  <button variant="outline-info" className="mt-5">
                    Download Resume
                  </button>
                </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} className=""></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
/*
 <div className="left-side">
               
              </div>

*/
