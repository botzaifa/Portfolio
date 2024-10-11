import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>

        <Col md="4" className="footer-copywright">
          <h3> </h3>
        </Col>
        
        {/* <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by: Huzaifa Khan </h3>
        </Col> */}
        
        <Col md="4" className="footer-copywright">
          <h3>Crafted with love, caffeine, and a lot of brainstorming by: Huzi </h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3> </h3>
        </Col>


        {/* <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/botzaifa"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/botzaifa"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/botzaifa"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/botzaifa"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col> */}

      </Row>
    </Container>
  );
}

export default Footer;
