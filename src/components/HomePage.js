import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Home.css'

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
          <div className="hero-image hero-image-1">
            <div className="hero-image-caption">Food trucks are awesome! They bring local and world foods to our doorstep. Plus, you get to chat with the owners. They are some of my favorite clients!</div>
          </div>
          <div className="hero-image hero-image-2">
            <div className="hero-image-caption"></div>
          </div>
          <div className="hero-image hero-image-3">
            <div className="hero-image-caption">Caption 3</div>
          </div>
          <div className="hero-image hero-image-4">
            <div className="hero-image-caption">Caption 4</div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default HomePage;
