import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
    SiPhpstorm,
    SiAmazonaws,
    SiXampp,
    SiLaragon, SiWebstorm, SiGithub, SiGitlab,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiPhpstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiXampp/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLaragon/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGitlab/>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
        <Si />
      </Col> */}
        </Row>
    );
}

export default Toolstack;
