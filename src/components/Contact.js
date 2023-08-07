import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Card from 'react-bootstrap/Card';
import '../styles/Contact.scss';

function PricingCard() {
    return (
        <div className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="mb-4 text-center">
                <Card.Body>
                    <Card.Title>My Prices</Card.Title>
                    <Card.Text>
                        Service 1: $100
                        <br />
                        Service 2: $200
                        <br />
                        Service 3: $300
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

function Contact() {
    return (
        <div className="form-bg">
            <PricingCard />
            <div className="yek-social">
                <ul className="yek-social__list">
                    <li className="yek-social__item">
                        <a className="yek-social__link" href="mailto:kcparks1234@gmail.com" target="_blank" rel="noopener noreferrer">
                            <span className="yek-social__button yek-social__button--gmail">
                                <FontAwesomeIcon icon={faEnvelope} className="yek-social__icon yek-social__icon--gmail" />
                            </span>
                        </a>
                    </li>
                    <li className="yek-social__item">
                        <a className="yek-social__link" href="https://github.com/goobber33" target="_blank" rel="noopener noreferrer">
                            <span className="yek-social__button yek-social__button--github">
                                <FontAwesomeIcon icon={faGithubAlt} className="yek-social__icon yek-social__icon--github" />
                            </span>
                        </a>
                    </li>
                    <li className="yek-social__item">
                        <a className="yek-social__link" href="https://www.linkedin.com/in/kyle-parks-b0a74017b/" target="_blank" rel="noopener noreferrer">
                            <span className="yek-social__button yek-social__button--linkedin">
                                <FontAwesomeIcon icon={faLinkedinIn} className="yek-social__icon yek-social__icon--linkedin" />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
