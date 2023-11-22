import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bankOfJordan from "../../Assets/Projects/bank.png";
import tazkarte from "../../Assets/Projects/tazkarte.png";
import siin from "../../Assets/Projects/siin.png";
import labeb from "../../Assets/Projects/labeb.png";
import investment from "../../Assets/Projects/investment.png";
import sama from "../../Assets/Projects/sama.png";
// import readme from "../../Assets/Projects/readme-img1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a <strong className="purple">few</strong> projects I've worked on recently As backened developer.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={labeb}
              isBlog={false}
              title="Labeb"
              description="The website offers artificial
              intelligence services based on the Chat GPT
              API's. The core concept of the website is to
              assist Arabic speakers in maximizing the
              effectiveness of artificial intelligence."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://labeb.r-link.io/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={garden}
              isBlog={false}
              title="Garden-0f-Eden"
              description="an easy-to-use online flower shop! Explore diverse flower types and categories, including special collections from influencers. Simply pick your favorite flowers, toss them in your cart, and breeze through checkout using your e-payment card. It's a user-friendly and delightful experience for flower enthusiasts like you!"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://garden-of-eden.quantumgate.io/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siin}
              isBlog={false}
              title="Siin-Experience"
              description="Easily browse through events spread across different provinces and times, covering a wide range of categories. Find the perfect event for you, no matter your interests or location. It's the ultimate platform for event enthusiasts!"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://siin-experience-website.r-link.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankOfJordan}
              isBlog={false}
              title="Bank of Jordan Syria"
              description="
              Presenting a convenient survey designed to assist individuals from diverse nationalities in submitting their electronic data to the bank. Simplify the process of opening an electronic account by effortlessly providing the necessary information and submitting required documents through this user-friendly survey."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="http://bank-of-jordan-form.r-link.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investment}
              isBlog={false}
              isApp={true}
              title="Investment App"
              description="
              Introducing a digital real estate investment platform that opens the door for everyone to invest in real estate. Seamlessly navigate the world of property investment with our user-friendly platform, making real estate accessible to all. "
              appLink="https://investment.r-link.io/apk/Investment-1.0.0+1.apk"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sama}
              isBlog={false}
              isApp={true}
              title="Sama App"
              description="A dynamic sports app tailored for basketball enthusiasts, featuring two main roles: user and administration. Stay in the game with up-to-date statistics on basketball matches across diverse Syrian leagues and tournaments. Enjoy news updates, live streaming, and recordings of exciting basketball matches"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
              appLink="https://sama-app.r-link.io/apk/Sama%20Sport%20-1.1.2+8.apk"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tazkarte}
              isBlog={false}
              isApp={true}
              title="Tazkarte"
              description="Introducing an efficient application for reserving seats on inter-provincial buses across various Syrian regions. Simplify your travel plans by seamlessly booking your bus seats through this user-friendly app. Enjoy the convenience of secure and hassle-free seat reservations for your journeys between different provinces."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
              appLink="https://tazkarte.net/apk/Tazkarti-1.0.4+5.apk"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
