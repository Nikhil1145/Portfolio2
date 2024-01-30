import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikhil Jain </span>
            from <span className="purple"> Jaipur, India.</span>
            <br />
            I am currently looking for MERN stack Jobs.
            <br />
           I am a final year student at Arya College Jaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight />Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nikhil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
