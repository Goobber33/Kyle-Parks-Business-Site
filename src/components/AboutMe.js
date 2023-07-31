import React, { useEffect, useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import '../styles/About.css';

function AboutMe() {
    const [shouldScroll, setShouldScroll] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setShouldScroll(true);
        }
    }, [inView]);

    return (
        <ScrollIntoViewIfNeeded
            active={shouldScroll}
            options={{ behavior: 'smooth', block: 'center' }}
        >
            <div className="about-me" ref={ref}>
                <div className={`cover-top ${inView ? 'animate-away' : ''}`}></div>
                <div className={`cover-bottom ${inView ? 'animate-away' : ''}`}></div>
                <Row className="card-row">
                    <Col xs={12} md={6} lg={4} className="left-card">
                        <Card>
                            <div className="card-image" />
                            <Card.Body>
                                <Card.Text>
                                    Greetings! I'm Kyle Parks, a dedicated Full Stack Developer with a passion for crafting innovative digital solutions.
                                    I specialize in building everything from sophisticated websites to dynamic mobile applications, and intricate databases.
                                    As the founder and sole developer of this business, my commitment is unmatched.
                                    Explore my offerings and get in touch—I'm excited to turn your dream website into a reality.  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </ScrollIntoViewIfNeeded>
    );
}

export default AboutMe;
