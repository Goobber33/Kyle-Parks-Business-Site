import React from 'react';
import { Col, Card } from 'react-bootstrap';

function AboutMe() {
  return (
    <div className="about-me d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col xs={12} md={6} lg={4}>
            <Card bg="light" className="mb-4" style={{ minHeight: '300px' }}>
                <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>
                        I'm a freelance full stack developer with over 5 years of experience.
                        I specialize in React, Node.js, and MongoDB.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </div>
  );
}

export default AboutMe;
