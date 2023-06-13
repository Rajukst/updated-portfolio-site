import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import projectOne from "../../../src/Assets/projectPic.png";
import projectTwo from "../../../src/Assets/Screenshot_1.png";
import "./Projects.css";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header";
const Projects = () => {
  return (
    <div className="project">
      <Container>
        <Header />
        <Row className="prodjectSRC">
          <Col xs={12} md={4} lg={4}>
            <div className="head">
              <img className="img-fluid projectPic" src={projectOne} alt="" />
            </div>
            <div className="bodys">
              <h5>Project Name: Eco-Cart</h5>
              <p>
                This is a MERN Stack dynamic E-commerce Website. Anyone can view
                the products from product list, add to the cart, add to
                Wishlist, increase quantity, decrease quantity, add specific
                quantity and many more.
                Registration and login system are implemented. User can register
                with email and password or signup with Google.It has a user Dashboard where a user can see his/her orders,
                account information, order status.
              </p>
            </div>
            <div className="buttons">
              <Link to="https://eco-cart.netlify.app/" target="_blank">
                <button>Live Site</button>
              </Link>
              <Link to="https://eco-cart-admin.netlify.app/" target="_blank">
                <button>Admin Site</button>
              </Link>
              <Link to="https://github.com/Rajukst/w-commerce" target="_blank">
                {" "}
                <button>Github</button>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="head">
              <img className="img-fluid projectPic" src={projectTwo} alt="" />
            </div>
            <div className="bodys">
              <h5>Project Name: Cloth Bangladesh</h5>
              <p>
                This is a MERN Stack dynamic E-commerce Website. Anyone can view
                the products from product list, add to the cart, add to
                Wishlist, increase quantity, decrease quantity, add specific
                quantity and many more.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="head">
              <img className="img-fluid" src={projectOne} alt="" />
            </div>
            <div className="bodys">
              <h5>Project Name: Cloth Bangladesh</h5>
              <p>
                This is a MERN Stack dynamic E-commerce Website. Anyone can view
                the products from product list, add to the cart, add to
                Wishlist, increase quantity, decrease quantity, add specific
                quantity and many more.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
