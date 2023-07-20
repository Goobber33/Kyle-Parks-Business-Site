import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutMe() {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>About Me</h2>
          <p>
            I'm a freelance full stack developer with over 5 years of experience.
            I specialize in React, Node.js, and MongoDB.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
