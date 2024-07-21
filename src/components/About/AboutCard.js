import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Huzaifa Khan </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently a student at Thakur College of Engineering and Technology.
            <br />
            I pursuing my BTech in Artificial Intelligence and Data Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Jo Mann kar rah hai woh karo, baad ka baad me dekha jaayega xD"{" "}
          </p>
          <footer className="blockquote-footer">Huzaifa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
