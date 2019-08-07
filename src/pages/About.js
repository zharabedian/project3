import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://static.onecms.io/wp-content/uploads/sites/35/2019/06/27205558/woman-running-alone-wide.jpg">
        <h1>Zel Button</h1>
        <h2>Safety in any situation.</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Zel Button!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Here we will describe the button. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
