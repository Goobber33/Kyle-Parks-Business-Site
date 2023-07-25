import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Navbar.css'

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="#home">Kyle Parks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
