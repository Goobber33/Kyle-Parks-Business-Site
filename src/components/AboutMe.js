import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/About.css';

function AboutMe() {
    const variants1 = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };

    const variants2 = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
            },
        },
    };

    const variants3 = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1.0,
            },
        },
    };

    const variants4 = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1.5,
            },
        },
    };

    return (
        <div className="about-me">
            <Row className="card-row">
                <Col xs={12} md={6} lg={4} className="left-card">
                    <motion.div
                        variants={variants1}
                        initial="hidden"
                        animate="show"
                    >
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Greetings! I'm Kyle Parks, a dedicated Full Stack Developer with a passion for crafting innovative digital solutions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>

                <Col xs={12} md={6} lg={4} className="right-card">
                    <motion.div
                        variants={variants2}
                        initial="hidden"
                        animate="show"
                    >
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    I specialize in building everything from sophisticated websites to dynamic mobile applications, and intricate databases.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>

                <Col xs={12} md={6} lg={4} className="left-card-two">
                    <motion.div
                        variants={variants3}
                        initial="hidden"
                        animate="show"
                    >
                        <Card>
                            <Card.Body>
                                <Card.Text className="ctext">
                                As the founder and sole developer of this business, my commitment is unmatched. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>

                <Col xs={12} md={6} lg={4} className="right-card-two">
                    <motion.div
                        variants={variants4}
                        initial="hidden"
                        animate="show"
                    >
                        <Card>
                            <Card.Body>
                                <Card.Text className="ctext">
                                Explore my offerings and get in touch—I'm excited to turn your dream website into a reality. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
        </div>
    );
}

export default AboutMe;
