import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import projectOne from "../../../src/Assets/projectPic.png";
import "./Projects.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="project">
      <Container>
        <Row>
          <Col>
            <div className="head">
              <img className="img-fluid" src={projectOne} alt="" />
            </div>
            <div className="bodys">
              <h5>Project Name: Eco-Cart</h5>
              <p>
                This is a MERN Stack dynamic E-commerce Website. Anyone can view
                the products from product list, add to the cart, add to
                Wishlist, increase quantity, decrease quantity, add specific
                quantity and many more.
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
          <Col>
            <div className="head">
              <img className="img-fluid" src={projectOne} alt="" />
            </div>
            <div className="bodys">
              <h5>Project Name: Eco-Cart</h5>
              <p>
                This is a MERN Stack dynamic E-commerce Website. Anyone can view
                the products from product list, add to the cart, add to
                Wishlist, increase quantity, decrease quantity, add specific
                quantity and many more.
              </p>
            </div>
          </Col>
          <Col>
            <div className="head">
              <img className="img-fluid" src={projectOne} alt="" />
            </div>
            <div className="bodys">
              <h5>Project Name: Eco-Cart</h5>
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
