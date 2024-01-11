import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import homeAnimiation from "../../Assets/Animation - 1701755741636.json";
import homeAnimiation2 from "../../Assets/Animation - 1701755892761.json";
import homeAnimiation3 from "../../Assets/Animation - 1701756655433.json";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Player } from "@lottiefiles/react-lottie-player";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Abdulrhman Aboukalam</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
              <Player
                src={homeAnimiation3}
                className="player"
                loop
                autoplay
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>

  );
}

export default Home;
