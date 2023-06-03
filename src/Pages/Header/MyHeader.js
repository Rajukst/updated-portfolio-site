import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./MyHeader.css"
const MyHeader = () => {
    return (
        <Container fluid>
            <Row>
            <Col xs={12} md={8} lg={8}>
            <div className="allLinks">
                <div className="linkss">
                <Link to="/" className='link'>Home</Link>
                </div>
                <div className="linkss">
                <Link to="/skills" className='link'>Skills</Link>
                </div>
                <div className="linkss">
                <Link to="/projects" className='link'>Projects</Link>
                </div>
                <div className="linkss">
                <Link to="/contact" className='link'>Contacts</Link>
                </div>
                <div className="linkss">
                <Link to="/about" className='link'>About</Link>
                </div>
            </div>
            </Col>
            <Col xs={12} md={4} lg={4}>

            </Col>
            </Row>
           
        </Container>
    );
};

export default MyHeader;