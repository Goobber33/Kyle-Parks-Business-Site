import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import '../styles/Testimonials.scss';

import TestimonialImage1 from '../assets/images/jen.jpeg'; // Import the first image
import TestimonialImage2 from '../assets/images/casey.jpeg';
import TestimonialImage3 from '../assets/images/george.jpg'; // Import the third image

const testimonialsData = [
  { feedback: "Having Kyle design my website for my gym was a great decision. I love how easy my new site is to view and overall look. Working with Kyle was Easy. He checked in regularly, while designing it and took the time to ask important questions and gathering information, so my website represents what The Shed is about." },
  { feedback: "Kyle and I studied together during the University of Washington Bootcamp and I am very thankful that he was there. Kyle is an extremely hard worker and captured complex topics and issues quickly. Kyle was quick to assist other students (including myself at times) and troubleshoot bugs no matter when the due date was. Kyle frequently took learning to the next level and challenged himself to learn additional languages and tricks during the bootcamp which he always shared with others. Kyle is ambitious and follows through on his plans and is already successfully designing websites and applications for his clients. Kyle would be a great addition to any team." },
  { feedback: "I've had the pleasure of working alongside Kyle in our group project together during our time in the University of Washington's coding bootcamp, Kyle has an exceptional skill in problem-solving, He is quick to diagnose and troubleshoot issues, he helped our group fix various issues that came up during our development that allowed us to successfully connect our front-end interface with our backend systems that utilized mySQL and a RESTful API structure. Kyle is a reliable team player with excellent communication skills and problem-solving ability. Anyone would be fortunate to have him as part of their team, and I wholeheartedly recommend him for any roles that leverage his technical skills in Full Stack Web Development including but not limited to: Javascript, mySQL, HTML, CSS, ReactJS, MongoDB, and RESTful API implementation." },
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
