import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import { faGlobe, faMobileAlt, faUserCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/About.scss';
import '../styles/AboutQueries.scss';

function AboutMe() {
    const [shouldScroll, setShouldScroll] = useState(false);
    const [isFlipped, setFlipped] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setShouldScroll(true);
        }
    }, [inView]);

    const handleClick = () => {
        setFlipped(!isFlipped);
    }

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
                        <div className="flip-card">
                            <div className={`flip-card-inner ${isFlipped ? "flip" : ""}`}>
                                <div className="flip-card-front">
                                    <div className="header-container">
                                        <h1>Your Business Online</h1>
                                        <h2>Why Local Businesses Need a Strong Digital Presence</h2>
                                    </div>

                                    <div className="front-text">
                                        <div className="statistics">
                                            <div className="stat-item">
                                                <FontAwesomeIcon icon={faGlobe} /><p>97% of consumers search online for local services.</p>
                                            </div>
                                            <div className="stat-item">
                                                <FontAwesomeIcon icon={faMobileAlt} /><p>52% of all online traffic comes from mobile devices.</p>
                                            </div>
                                            <div className="stat-item">
                                                <FontAwesomeIcon icon={faUserCheck} /><p>75% of consumers judge company credibility by website design.</p>
                                            </div>
                                            <div className="stat-item">
                                                <FontAwesomeIcon icon={faChartLine} /><p>Small businesses with websites grow 15.7% faster.</p>
                                            </div>
                                        </div>
                                        <Button className="my-button" onClick={handleClick}>Next</Button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <Button className="my-button" onClick={handleClick}>Back</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </ScrollIntoViewIfNeeded>
    );
}

export default AboutMe;
