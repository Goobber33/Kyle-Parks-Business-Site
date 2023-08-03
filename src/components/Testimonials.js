import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Testimonials.css';

import TestimonialImage from '../assets/images/jen.jpeg'; // Import the image

const testimonialsData = [
  { name: "Jen Barden | Owner / The Shed", feedback: "Great service!" },
  { name: "Customer 2", feedback: "Amazing experience." },
  { name: "Customer 3", feedback: "Highly recommended." },
  // add more testimonials as needed
];

function Testimonials() {
  return (
    <div className="testimonials">
    <Container>
      <div className="chat">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={`message-container ${index % 2 === 0 ? "yours messages" : "mine messages"}`}>
            {index === 0 && <img src={TestimonialImage} alt="description" className="testimonial-image" />}
            <div className="message last">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
}

export default Testimonials;
