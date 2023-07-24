import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

function HomePage() {
  return (
    <Container fluid className="px-0">
      {/* Hero Section */}
      <Row className="hero-section m-0 d-flex">
        <div className="hero-text">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Kyle Parks
          </motion.h1>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Full Stack Developer
          </motion.h2>
        </div>
        <div className="d-flex">
          <div className="hero-image"></div>
          <div className="hero-image"></div>
          <div className="hero-image"></div>
          <div className="hero-image"></div>
          <div className="hero-image"></div>
        </div>
      </Row>
    </Container>
  );
}

export default HomePage;
