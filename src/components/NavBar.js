import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/Navbar.scss';
import '../styles/NavQuery.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <div style={{ zIndex: '9999', position: 'relative', width: '100%' }}>
      
        <div className="navbar-wrapper">
          <Navbar variant="dark" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="centered-toggle" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav className="m-auto">
                <Link 
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className="nav-link"
                >Home</Link>
                <Link 
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={120}
                  duration={0}
                  className="nav-link"
                >About</Link>
                <Link 
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className="nav-link"
                >Clients</Link>
                <Link 
                  activeClass="active"
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className="nav-link"
                >Testimonials</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
     
    </div>
  );
}

export default NavigationBar;