import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import '../styles/Testimonials.scss';
import '../styles/TestimonialsQueries.scss'

import TestimonialImage1 from '../assets/images/jen.jpeg'; // Import the first image
import TestimonialImage2 from '../assets/images/casey.jpeg';
import TestimonialImage3 from '../assets/images/george.jpg'; // Import the third image

const testimonialsData = [
  { feedback: "Having Kyle design my website for my gym was a great decision. I love how easy my new site is to view and overall look. Working with Kyle was Easy. He checked in regularly, while designing it and took the time to ask important questions and gathering information, so my website represents what The Shed is about." },
  { feedback: "I studied with Kyle at the University of Washington Bootcamp and can vouch for his hard work and quick grasp of complex topics. He's not just a problem solver; he elevates the whole team, helping us troubleshoot bugs and sharing insights from additional languages he took the initiative to learn. Kyle's already successfully designing client projects and would be a fantastic addition to any team." },
  { feedback: "Kyle was an invaluable teammate during our group project at the University of Washington's coding bootcamp. His problem-solving skills are exceptional; he quickly diagnosed and fixed issues, enabling seamless integration between our front-end and back-end systems. Kyle excels in Full Stack Web Development, including Javascript, mySQL, HTML, CSS, ReactJS, MongoDB, and RESTful API implementation. He's a reliable team player with great communication skills—I highly recommend him." },
  // add more testimonials as needed
];

function Testimonials() {
  return (
    <div className="testimonials">
      <Container>
        <div className="chat">
          {testimonialsData.map((testimonial, index) => {
            let messageClass = "";
            if (index % 3 === 0) {
              messageClass = "yours";
            } else if (index % 3 === 1) {
              messageClass = "mine";
            } else {
              messageClass = "others";
            }
            return (
              <Fade direction={index % 3 === 0 ? "left" : (index % 3 === 1 ? "right" : "up")} damping={0.1} triggerOnce key={index}>
                <div className={`${messageClass} messages message-container message-box-${index}`}>
                  {index === 0 &&
                    <img src={TestimonialImage1} alt="description" className="testimonial-image" />}
                  {index === 2 &&
                    <img src={TestimonialImage3} alt="description" className="testimonial-image3" />}
                  <div className={`message last message-box-content-${index}`}>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.feedback}</p>
                  </div>
                  {index === 1 &&
                    <img src={TestimonialImage2} alt="description" className="testimonial-image2" />}
                </div>
              </Fade>
            )
          })}
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
