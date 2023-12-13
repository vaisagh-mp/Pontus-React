import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css';
import BrandLogo from './images/pontus-footer-logo.png';
import LinkedIn from './images/icons/linkedin-icon.png';
import Facebook from './images/icons/facebook-icon.png';
import Instagram from './images/icons/instagram-icon.png';
import Twitter from './images/icons/x-icon.png'

function Footer() {
    return (
        <footer className='footer-main'>
            <Container>
                <Row>
                    <Col lg={5} className='ftr-top-right'>
                        <div className="fte-logo">
                            <img src={BrandLogo} alt="Pontus Digimark Logo" />
                        </div>
                        <p className='ftr-desc'>Pontus Digimark Pte. Ltd. is a Singapore registered company which aims to offer end-to-end digital marketing solutions to businesses, ensuring that you are seen and heard by your target audience. We’re all storytellers at heart, and our teams have distinguished capabilities in idealization, design, digital, and client services.</p>
                    </Col>
                    <Col lg={7} className='ftr-top-left'>
                        <div className='ftr-quick-links'>
                            <ul>
                                <li>
                                    <a href='#case-study'>Case study</a>
                                    </li>
                                    <li>
                                    <a href='#services'>Services</a>
                                    </li>
                                    <li>
                                    <a href='#about-us'>About us</a>
                                    </li>
                                    <li>
                                    <a href='#technology'>Technology</a>
                                    </li>
                                    <li>
                                    <a href='#our-team'>Our team</a>
                                    </li>
                                    <li>
                                    <a href='#'>Blog</a>
                                    </li>
                                    <li>
                                    <a href='#contact-us'>Contact Us</a>
                                    </li>
                                
                            </ul>
                        </div>
                        <div className='ftr-office-info'>
                            <Row>
                                <Col lg={3} md={3}>
                                    <h5>Head Office</h5>
                                    <p>30 Cecil Street #19-08,Prudential Tower, Singapore, 049712</p>
                                </Col>
                                <Col lg={3} md={3}>
                                    <h5>Regional Office</h5>
                                    <p>Alfa Horizon, Goshree Rd, Vallarpadam, Ernakulam, Kerala 682504</p>
                                </Col>
                                <Col lg={3} md={3}>
                                    <h5>Phone</h5>
                                    <a href='tel:+91 90370 25858'>+91 90370 25858</a>
                                </Col>
                                <Col lg={3} md={3}>
                                    <h5>Email</h5>
                                    <a href='mailto:contact@pontusdigi.com'>contact@pontusdigi.com</a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <div className='btm-ftr'>
                    <Row>
                        <Col lg={5} className='btm-ftr-left'>
                            <div className='ftr-social-media'>
                                <ul>
                                    <li><a href='#'>
                                        <img src={LinkedIn} alt="LinkedIn Icon" />
                                    </a>
                                    </li>
                                    <li><a href='#'>
                                        <img src={Facebook} alt="Facebook Icon" />
                                    </a>
                                    </li>
                                    <li><a href='#'>
                                        <img src={Instagram} alt="Instagram Icon" />
                                    </a>
                                    </li>
                                    <li><a href='#'>
                                        <img src={Twitter} alt="Twitter Icon " />
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7} className='btm-ftr-right'>
                            <Row>
                                <Col lg={3} md={3}>
                                    <h5>We Are Here Too</h5>
                                </Col>
                                <Col lg={9} md={9}>
                                    <Row>
                                        <Col lg={3} md={3}>
                                            <p>Singapore</p>
                                        </Col>
                                        <Col lg={3} md={3}>
                                            <p>Malaysia</p>
                                        </Col>
                                        <Col lg={3} md={3}>
                                            <p>Dubai</p>
                                        </Col>
                                        <Col lg={3} md={3}>
                                            <p>Australia</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>

    )
}

export default Footer