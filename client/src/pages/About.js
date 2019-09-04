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
            <h3>Welcome To Zel Button</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Zel Button keeps you safe in any situation, and is completely customizable to fit your specific needs. 
            </p>
            <p>
              Go to "Sign Up" if you've just received your new Zel Button. "Sign In" if you've registered your button and need to make changes.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
