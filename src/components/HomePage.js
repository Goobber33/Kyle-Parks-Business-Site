import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AboutMe from './AboutMe';

function HomePage() {
  return (
    <Container fluid className="px-0">
      {/* Hero Section */}
      <Row className="hero-section m-0">
        <Col>
          <h1>Hello, I'm Kyle Parks</h1>
          <h2>Full Stack Developer</h2>
          <p>Welcome to my personal freelance website</p>
          <Button variant="primary">Hire me</Button>
        </Col>
      </Row>

      <AboutMe />
    </Container>
  );
}

export default HomePage;
