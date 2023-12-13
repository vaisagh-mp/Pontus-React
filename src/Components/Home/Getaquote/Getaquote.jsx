import React from 'react'
import './Getaquote.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import arrow from '../../../assets/ButtonArrow_w.svg';

function Getaquote() {
    return (
        <section id='contact-us' className='get-quote-main'>
            <Container className='get-quote'>
                <Row>
                    <Col lg={6} md={6} className='quote-content'>
                        <div className="sec-title">
                        <h2>Join us for candid conversations <br /> and insider tips on everything<br /> digital marketing</h2>
                        </div>
                        <div className="quote-btn">
                        <button type='submit' className='quote-btn'><img src={arrow} alt="arrow button" />
                        Get A Quote
                        </button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='quote-map'>
                        <div className='location-detail'>
                            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3579131655565!2d76.2505343140652!3d9.98726477599545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081397f0df7a9b%3A0x696657403af7f8d9!2sPontus%20Digimark%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1661858670501!5m2!1sen!2sin'></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Getaquote
