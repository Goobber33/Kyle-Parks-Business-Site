import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Sample data, replace with your real data
const clientsData = [
  { name: "Client 1", logo: "/path/to/logo1.png" },
  { name: "Client 2", logo: "/path/to/logo2.png" },
  { name: "Client 3", logo: "/path/to/logo3.png" },
  // add more clients as needed
];

function Clients() {
  return (
    <Container>
      <h2>Our Clients</h2>
      <Row>
        {clientsData.map((client, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={client.logo} />
              <Card.Body>
                <Card.Title>{client.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Clients;
