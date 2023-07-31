import React, { useState, useEffect } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';
import '../styles/About.css';

function AboutMe() {
    const [revealed, setRevealed] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setRevealed(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className="about-me">
            {!revealed && (
                <div>
                    <Slide direction="up">
                        <div className="upper-half" style={{backgroundColor: '#2EC4B6', height: '50vh', position: 'fixed', width: '100%'}} />
                    </Slide>
                    <Slide direction="down">
                        <div className="lower-half" style={{backgroundColor: '#2EC4B6', height: '50vh', position: 'fixed', bottom: 0, width: '100%'}} />
                    </Slide>
                </div>
            )}

            <Row className="card-row">
                <Col xs={12} md={6} lg={4} className="left-card">
                    <Card>
                        <div className="card-image" />
                        <Card.Body>
                            <Card.Text>
                                Greetings! I'm Kyle Parks, a dedicated Full Stack Developer with a passion for crafting innovative digital solutions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4} className="right-card">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                I specialize in building everything from sophisticated websites to dynamic mobile applications, and intricate databases.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4} className="left-card-two">
                    <Card>
                        <Card.Body>
                            <Card.Text className="ctext">
                                As the founder and sole developer of this business, my commitment is unmatched.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4} className="right-card-two">
                    <Card>
                        <Card.Body>
                            <Card.Text className="ctext">
                                Explore my offerings and get in touch—I'm excited to turn your dream website into a reality.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default AboutMe;
