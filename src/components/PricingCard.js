import React from 'react';
import Card from 'react-bootstrap/Card';

function PricingCard() {
    return (
        <div className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="mb-4 text-center">
                <Card.Body>
                    <Card.Title>My Prices</Card.Title>
                    <Card.Text>
                        <p>Service 1: $100</p>
                        <p>Service 2: $200</p>
                        <p>Service 3: $300</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PricingCard;
