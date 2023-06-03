import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Skills.css"
import htmlPhoto from "../../Assets/html.png"
import cssPhoto from "../../Assets/css.png"
import jsPhoto from "../../Assets/js.png"
import reactPhoto from "../../Assets/reacts.png"
import reduxPhoto from "../../Assets/reduxs.png"
import nodePhoto from "../../Assets/nodes.png"
import expressPhoto from "../../Assets/express.png"
import mui from "../../Assets/muis.png"
import reactBoostrap from "../../Assets/reactboostrap.png"
import Mongo from "../../Assets/mongos.png"
const Skills = () => {
    return (
        <Container>
      <Row>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            html
            <img style={{height: "50px", width:"50px"}} src={htmlPhoto} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            css
            <img style={{height: "50px", width:"50px"}} src={cssPhoto} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            javaScript
            <img style={{height: "50px", width:"50px"}} src={jsPhoto} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            react
            <img style={{height: "50px", width:"50px"}} src={reactPhoto} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            redux
            <img style={{height: "50px", width:"50px"}} src={reduxPhoto} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            node.js
            <img style={{height: "50px", width:"50px"}} src={nodePhoto} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            express.js
            <img style={{height: "50px", width:"50px"}} src={expressPhoto} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            Material UI
            <img style={{height: "50px", width:"50px"}} src={mui} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            Bootstrap
            <img style={{height: "50px", width:"50px"}} src={reactBoostrap} alt="" />
        </span>
    </div>
        </Col>
        <Col xs={12} md={6} lg={2}>
        <div class="center">
        <div class="ring"></div>
        <span className='mySpan'>
            MongoDB
            <img style={{height: "50px", width:"50px"}} src={Mongo} alt="" />
        </span>
    </div>
        </Col>
      </Row>
    </Container>
    );
};

export default Skills;