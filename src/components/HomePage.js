import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/Home.scss'
import '../styles/HomeMediaQueries.scss'

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
    }, 10);  // Delay time before heading1 appears

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
    <div style={{ zIndex: '9998', position: 'relative' }}>
      <Container fluid className="px-0">
        <Row className="hero-section m-0 d-flex">
          <div className="hero-text">
            <h1 className={showText.heading1 ? "text-appear" : ""}>{content.heading1}</h1>
            <h2 className={showText.heading2 ? "text-appear" : ""}>{content.heading2}</h2>
            <div className="paragraph-box">
              <p>{text.para}</p>
            </div>

            <div className="script">
              <lottie-player className="lottie-animation" src="https://lottie.host/ff533659-9bc3-441b-8126-acb3446b42c7/KMemBJ1wH1.json" background="transparent" speed="1" style={{ width: 300, height: 300 }} loop autoplay></lottie-player>
            </div>
          </div>

          <div className="d-flex">
            <div className="text-1">Food Trucks</div>
            <div className="hero-image hero-image-1">
              <div className="hero-image-caption">Food trucks are awesome! They bring local and world foods to our doorstep. Plus, you get to chat with the owners. They are some of my favorite clients!</div>
            </div>
            <div className="text-2">Gyms</div>
            <div className="hero-image hero-image-2">
              <div className="hero-image-caption">Gyms are the embodiment of strength and community. I take pride in providing them with custom digital solutions, creating seamless booking systems and interactive online platforms. Seeing these physical spaces extend their reach online is truly gratifying!</div>
            </div>
            <div className="text-3">Restaurants</div>
            <div className="hero-image hero-image-3">
              <div className="hero-image-caption">For restaurants, every detail counts. I enjoy amplifying their culinary passion online with tailored digital experiences, including interactive menus and easy online ordering. Helping these establishments enhance their digital presence is always a delight!</div>
            </div>
            <div className="text-4">Portfolios</div>
            <div className="hero-image hero-image-4">
              <div className="hero-image-caption">A personal portfolio is a powerful showcase. Whether it's a visual artist or a professional writer, I love crafting bespoke digital galleries to highlight their work. It's rewarding to build these unique windows to my clients' worlds!</div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
