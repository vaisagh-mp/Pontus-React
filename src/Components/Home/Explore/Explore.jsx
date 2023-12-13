import React from 'react';
import Container from 'react-bootstrap/Container';
import './Explore.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import arrow from '../../../assets/ButtonArrow_w.svg';
import explore_img from '../../../assets/exploreimg.png';

function Explore() {

    return (
        <>
            <section className='explore-main'>
                <Container className='explore'>
                    <div className="explore-wrapper">
                        <Row>
                            <Col lg={6} className='explore-left'>
                                <div className="explore-img">
                                    <img src={explore_img} alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="sec-title">
                                    <h4>our creative universe</h4>
                                    <h2>A visual narrative of innovation, creativity, and success. Explore our digital masterpieces</h2>
                                </div>

                                <form className='contact-form'>
                                    <Row className='form-field-main'>
                                        <Col lg={6} className='form-field'>
                                            <input className='formControl' type='text' name='name' placeholder='Full Name' required />
                                        </Col>
                                        <Col lg={6} className='form-field'>
                                            <input className='formControl' type='tel' name='phone' placeholder='Phone Number' required />
                                        </Col>
                                        <Col lg={12} className='form-field'>
                                            <input className='formControl' type='email' name='email' placeholder='Email Id' required />
                                        </Col>
                                        <Col lg={12} className='form-submit'>
                                            <div className="explore-btn">
                                                <button type='submit' className='abt-btn'><img src={arrow} alt="arrow button" />
                                                    Download Now
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className='explore-btm'></section>
        </>
    );
}

export default Explore;
