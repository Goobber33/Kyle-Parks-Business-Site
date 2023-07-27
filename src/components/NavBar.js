import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Navbar.css'

function NavigationBar() {
  return (
    <div className="navbar-wrapper">
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Clients</Nav.Link>
            <Nav.Link href="#contact">Testimonials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
