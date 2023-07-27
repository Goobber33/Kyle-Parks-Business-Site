import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/Home.css'

const content = {
  heading1: "Kyle Parks",
  heading2: "Full Stack Developer",
  para: `Your Ideas, My Expertise. Let's Build Something Amazing Together!`
};

const typeWriter = (setText, textProp) => {
  let i = 0;
  return new Promise((resolve) => {
    const timerId = setInterval(() => {
      setText((prev) => ({
        ...prev,
        [textProp]: content[textProp].slice(0, i)
      }));

      i++;

      if (i > content[textProp].length) {
        clearInterval(timerId);
        resolve();
      }
    }, 40);  // Adjust speed here, lower value means faster typing
  });
};

function HomePage() {
  const [text, setText] = useState({
    heading1: "",
    heading2: "",
    para: ""
  });

  const [showText, setShowText] = useState({
    heading1: false,
    heading2: false
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowText({
        heading1: true,
        heading2: true
      });
    }, 400);  // Delay time before text appears

    const typeAll = async () => {
      await typeWriter(setText, "para");
    };
    setTimeout(typeAll, 1600);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Container fluid className="px-0">
      <Row className="hero-section m-0 d-flex">
        <div className="hero-text">
          <h1 className={showText.heading1 ? "text-appear" : ""}>{content.heading1}</h1>
          <h2 className={showText.heading2 ? "text-appear" : ""}>{content.heading2}</h2>
          <div className="paragraph-box">
            <p>{text.para}</p>
          </div>
        </div>

        <div className="d-flex">
          <div className="hero-image hero-image-1">
            <div className="hero-image-caption">Food trucks are awesome! They bring local and world foods to our doorstep. Plus, you get to chat with the owners. They are some of my favorite clients!</div>
          </div>
          <div className="hero-image hero-image-2">
            <div className="hero-image-caption">fghftghfgh</div>
          </div>
          <div className="hero-image hero-image-3">
            <div className="hero-image-caption">Hello World!</div>
          </div>
          <div className="hero-image hero-image-4">
            <div className="hero-image-caption">Hello World!</div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default HomePage;
