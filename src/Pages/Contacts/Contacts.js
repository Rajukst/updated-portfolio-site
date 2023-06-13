import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Shared/Header";
import "./Contact.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Contacts = () => {
  return (
    <Container>
      <Header />
      <Row className="heigths">
        <Col xs={12} md={6} lg={7}>
          <div className="contactText">
            <h6>Name:</h6>
            <input type="text" className="allInput" />
          </div>
          <div className="contactText">
            <h6>Email:</h6>
            <input type="text" className="allInput" />
          </div>
          <div className="contactText">
            <h6>Comment:</h6>
            <textarea className="allInput"></textarea>
          </div>
          <div className="contactText">
            <button className="Buttins">Submit</button>
          </div>
        </Col>
        <Col xs={12} md={6} lg={5}>
          <div className="animation">
            <h6 className="mb-4">I Always Prefer to listen from You</h6>
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_xlbwcmun.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
