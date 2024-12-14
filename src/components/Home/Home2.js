import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> WHO AM I</span> , YOU ASK?
            </h1>

            <p className="home-about-body">
             I fell in love with programming and, believe it or not, I've actually learned a thing or two… (maybe)
              
              <br />
              
              <br />My fluent languages are
              <i>
                <b className="purple"> Python, HTML, CSS, Javascript. </b>
              </i>
              No, I don't mean talking to my computer in these languages, though sometimes it feels that way.

              <br />
              
              <br />
              My fields of interest include &nbsp;

              <i>
                <b className="purple">Artificial Intelligence, Machine Learning, Data Analytics,</b> and <b className="purple">Automation. </b>
              </i>
              Basically, I enjoy making computers smarter so they can eventually take over the world (just kidding... or am I?).

              
            <br />

              <br />
              Whenever I feel bored, I either whip up a Game or create something that automates the boring stuff in life. 
              Because why do things manually when you can spend countless hours programming a solution, right?
              
              <br />
              
              



            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/botzaifa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/botzaifa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/botzaifa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/botzaifa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            
            </ul>
            
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
