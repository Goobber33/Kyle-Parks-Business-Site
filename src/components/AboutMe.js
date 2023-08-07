import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import '../styles/About.scss';
import kyleImage from '../assets/images/kyle.jpeg';

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

    const handleHover = () => {
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
                        <div
                            className={`flip-card ${isFlipped ? "hover" : ""}`}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="image-and-title">
                                        <img className="my-image" src={kyleImage} alt="Kyle" />
                                        <h1 className='h1-text'>Founder <span style={{ color: '#2EC4B6' }}>/</span> Owner</h1>
                                    </div>
                                    <div className="front-text">
                                        <p>Hello! My name is Kyle Parks, I am the founder and owner of this business.</p>
                                        <p><span style={{ textDecoration: 'underline', textDecorationColor: '#2EC4B6' }}>Hover</span> or <span style={{ textDecoration: 'underline', textDecorationColor: '#2EC4B6' }}>click</span> here to learn more about me!</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <p>
                                        Greetings! I'm Kyle Parks, a dedicated Full Stack Developer with a passion for crafting innovative digital solutions.
                                        I specialize in building everything from sophisticated websites to dynamic mobile applications, and intricate databases.
                                        As the founder and sole developer of this business, my commitment is unmatched.
                                        Explore my offerings and get in touch—I'm excited to turn your dream website into a reality.
                                    </p>
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
