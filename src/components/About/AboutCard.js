import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I am <span className="purple">Huzaifa Khan </span>
            from Mumbai, India.
            <br />
            I am a student of BTech in Artificial Intelligence and Data Science at Thakur College of Engineering and Technology.
            <br />
            My Grades Last Semester were 9.52 out of 10.
            <br />
            <br />
            Apart from Data Science and AI, My certain other hobbies are as follows:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess and Sudoku
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Jo Mann kar rah hai woh karo, baad ka, baad me dekha jaayega xD"{" "}
          </p>
          <footer className="blockquote-footer">Huzaifa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
