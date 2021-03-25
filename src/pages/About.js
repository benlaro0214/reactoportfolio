import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import myface from "./myface2.jpeg"
function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>ABOUT ME...</h1> 
            <img src={myface}></img>
            <p></p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am an IT professional with 22 years of experience in the field, Specializing in finding economical IT solutions for medium-sized and small businesses, Non-profit organizations, from the smallest desktop to social media marketing. 
            Much of my work has been with providing IT services ranging from tier1 and tier2 support, e-waste salvaging, network configuration, and building both virtual and physical servers. I am also an expert-level Linux user and as such, you would benefit from my particular expertise as I have been using various distributions of Linux since 2002. 
            I have also participated in the bridging of video-conferencing sessions for the House Of Commons and the Senate Of Canada internally and to parties across the world. I was also in charge of taking care of the video-conferencing infrastructure in the company’s datacenter. 
            Recently, I was part of a non-profit group that recycles computers and distributes them to those on social assistance (reBOOT Canada). 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
