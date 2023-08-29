import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/Navbar.scss';
import '../styles/NavQuery.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showToggle, setShowToggle] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition < scrollPosition) {
        setShowToggle(true);
      } else if (currentScrollPosition > 50) {
        setShowToggle(false);
      }
      setScrollPosition(currentScrollPosition);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollPosition]);

  return (
    <div style={{ zIndex: '9999', position: 'relative', width: '100%' }}>
      <div className="navbar-wrapper">
        <Navbar variant="dark" expand={false}>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`centered-toggle${showToggle ? '' : ' hidden'}`}
            onClick={() => setNavOpen(!navOpen)}
          />
          <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center${navOpen ? ' show' : ' collapse-hidden'}`}>
            <Nav className="m-auto">
              {windowWidth <= 1024 ? (
                <>
                  <Link activeClass="active" to="home" spy={true} smooth={true} duration={0} className="nav-link">Home</Link>
                  <Link activeClass="active" to="about" spy={true} smooth={true} offset={120} duration={0} className="nav-link">About</Link>
                  <Link activeClass="active" to="projects" spy={true} smooth={true} duration={0} className="nav-link">Clients</Link>
                  <Link activeClass="active" to="testimonials" spy={true} smooth={true} duration={0} className="nav-link">Testimonials</Link>
                </>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {windowWidth > 1024 && (
          <Nav className="desktop-nav">
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={0} className="nav-link">Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={120} duration={0} className="nav-link">About</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={0} className="nav-link">Clients</Link>
            <Link activeClass="active" to="testimonials" spy={true} smooth={true} duration={0} className="nav-link">Testimonials</Link>
          </Nav>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
