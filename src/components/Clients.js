import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import Shed from '../assets/images/shed.jpg'
import '../styles/Clients.scss'
import '../styles/ClientQueries.scss'

// Sample data, replace with your real data
const clientsData = [
  {
    name: "The Shed",
    logo: "/path/to/logo1.png",
    description: "This project is a web application for The Shed, a local gym in Sandpoint, Idaho owned by Jen Barden. It offers information about the gym, services provided, contact details, and much more!",
    website: "https://goobber33.github.io/The-Shed/"
  },
  
  // add more clients as needed
];

function Clients() {
  const handleClick = (website) => {
    window.open(website, "_blank");
  };

  return (
    <Container style={{ backgroundColor: "#1A535C",height: "140vh", overflow: "auto", position: "relative", zIndex: 9996 }}>
      <h2 className="text-center" style={{ color: "white", marginTop: "12rem", marginBottom: "8rem", fontWeight: "600", fontSize: "4rem", fontFamily: "'Orbitron', sans-serif" }}>My Clients</h2>
      {clientsData.map((client, index) => (
        <Fade key={index} direction={index % 2 === 0 ? "left" : "right"} triggerOnce fraction={0.4}>
          <Row className="align-items-center my-3">
            <Col xs={12} className="text-center">
              <img
                src={Shed}
                alt="Shed"
                className="my-5 client-image"
                style={{ width: "100%", maxWidth: "55rem", height: "auto", borderRadius: "45px", transition: "box-shadow .3s" }}
                onClick={() => handleClick(client.website)}
              />
              <h3 className="text-center" style={{ color: "white", fontWeight: "600", fontSize: "4rem" }}>
                <span style={{ color: '#dde04b' }}>THE</span>
                <span style={{ color: '#54b04d' }}> SHED</span>
              </h3>
              <p style={{ color: "white", fontWeight: "400", fontSize: "1.5rem", width: "60%", margin: "0 auto" }} className="my-4">{client.description}</p>
            </Col>
          </Row>
        </Fade>
      ))}
    </Container>
  );
}

export default Clients;
