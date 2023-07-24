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
                            Specializing in building comprehensive, dynamic websites and applications, my expertise lies in an array of technologies that facilitate powerful, responsive, and user-friendly solutions.
                            From conceptualizing intuitive front-end interfaces to crafting robust back-end databases, my comprehensive approach ensures that every project I undertake is meticulously designed, rigorously tested, and effectively implemented.
                            Please explore further for a deeper understanding of my offerings, along with a showcase of my previous work, encapsulating the breadth and depth of my capabilities.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default AboutMe;
