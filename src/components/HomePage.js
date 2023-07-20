import React from 'react';
import { Container, Row } from 'react-bootstrap';

function HomePage() {
  return (
    <Container fluid className="px-0">
      {/* Hero Section */}
      <Row className="hero-section m-0">
        <div className="hero-text">
          <h1>Hello, I'm Kyle Parks</h1>
          <h2>Full Stack Developer</h2>
          <p>Welcome to my personal freelance website</p>
        </div>
        <div className="hero-image"></div>
      </Row>

    </Container>
  );
}

export default HomePage;
