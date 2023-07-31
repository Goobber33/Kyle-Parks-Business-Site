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
    const timerId1 = setTimeout(() => {
      setShowText(prev => ({ ...prev, heading1: true }));
    }, 300);  // Delay time before heading1 appears

    const timerId2 = setTimeout(() => {
      setShowText(prev => ({ ...prev, heading2: true }));
    }, 600);  // Delay time before heading2 appears

    const typeAll = async () => {
      await typeWriter(setText, "para");
    };
    setTimeout(typeAll, 2600);

    return () => {
      clearTimeout(timerId1);
      clearTimeout(timerId2);
    };
  }, []);

  return (
    <div style={{zIndex: '9998', position: 'relative'}}>
    <Container fluid className="px-0">
      <Row className="hero-section m-0 d-flex">
        <div className="hero-text">
          <h1 className={showText.heading1 ? "text-appear" : ""}>{content.heading1}</h1>
          <h2 className={showText.heading2 ? "text-appear" : ""}>{content.heading2}</h2>
          <div className="paragraph-box">
            <p>{text.para}</p>
          </div>
  
            <div className="script">
                <lottie-player src="https://lottie.host/ff533659-9bc3-441b-8126-acb3446b42c7/KMemBJ1wH1.json" background="transparent" speed="1" style={{ width: 300, height: 300 }} loop autoplay></lottie-player>
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
    </div>
  );
}

export default HomePage;
