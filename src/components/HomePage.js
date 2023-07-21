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
      <Row className="hero-section m-0">
        <div className="hero-text">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Hello, My name is Kyle Parks
          </motion.h1>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
           Specializing in building comprehensive, dynamic websites and applications, my expertise lies in an array of technologies that facilitate powerful, responsive, and user-friendly solutions.
          From conceptualizing intuitive front-end interfaces to crafting robust back-end databases, my comprehensive approach ensures that every project I undertake is meticulously designed, rigorously tested, and effectively implemented.
          Please explore further for a deeper understanding of my offerings, along with a showcase of my previous work, encapsulating the breadth and depth of my capabilities.
          </motion.p>
        </div>
        <div className="hero-image"></div>
      </Row>
    </Container>
  );
}

export default HomePage;
