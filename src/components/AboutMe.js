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
                            Greetings! I'm Kyle Parks, a dedicated Full Stack Developer with a passion for crafting innovative digital solutions.
                            I specialize in building everything from sophisticated websites to dynamic mobile applications, and intricate databases.
                            As the founder and sole developer of this business, my commitment is unmatched.
                            My goal? To bring your ideas to life, whether it's an advanced business platform, a creative portfolio, or an interactive web project,
                            I strive to create your vision flawlessly. Explore my offerings and get in touch—I'm excited to turn your dream website into a reality.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default AboutMe;