import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="form-bg">
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
                        <a className="yek-social__link" href="https://www.instagram.com/kcparks33" target="_blank" rel="noopener noreferrer">
                            <span className="yek-social__button yek-social__button--instagram">
                                <FontAwesomeIcon icon={faInstagram} className="yek-social__icon yek-social__icon--instagram" />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
