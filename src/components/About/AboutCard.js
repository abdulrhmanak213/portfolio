import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdulrhman Aboukalam </span>
            from <span className="purple"> Damascus, Syria.</span>
            <br />
            I am currently employed as a Backend Engineer at  <a className="purple" href="https://www.r-link.io" target="_blank">R-link.io</a>.
            <br />
            In additional, I'm a fifth-year IT Engineering student at Damascus University, specializing in Software Engineering
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Beatufull Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying Delicious Food
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "with work & love we can make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdulrhman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
