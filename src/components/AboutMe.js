import React, { useEffect, useRef } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/About.css'

function AboutMe() {
    const ref1 = useRef(null);


    const [isVisible1, setIsVisible1] = React.useState(false);


    const variants = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };

    useEffect(() => {
        const refs = [ref1];
        const isVisibleStates = [setIsVisible1];

        const observers = refs.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    isVisibleStates[index](entry.isIntersecting);
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.5,
                }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        });

        return () => {
            observers.forEach((removeObserver) => removeObserver());
        };
    }, []);

    return (
        <div className="about-me">
            <Row>
                <Col xs={12} md={6} lg={4} className="left-card">
                    <motion.div
                        ref={ref1}
                        variants={variants}
                        initial="hidden"
                        animate={isVisible1 ? 'show' : 'hidden'}
                    >
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Greetings! I'm Kyle Parks, a dedicated Full Stack Developer with a passion for crafting innovative digital solutions.
                                    I specialize in building everything from sophisticated websites to dynamic mobile applications, and intricate databases.
                                    
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


// As the founder and sole developer of this business, my commitment is unmatched.
//                                     My goal? To bring your ideas to life, whether it's an advanced business platform, a creative portfolio, or an interactive web project,
//                                     I strive to create your vision flawlessly. Explore my offerings and get in touch—I'm excited to turn your dream website into a reality.