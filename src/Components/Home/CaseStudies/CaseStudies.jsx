import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CaseStudies.css';

import img1 from '../../../assets/caseshiping1.png';
import img2 from '../../../assets/caseshiping2.png';
import img3 from '../../../assets/caseshiping3.png';
import arrow from '../../../assets/ButtonArrow.svg'

const caseStudiesData = [
    {
        image: img1,
        title: 'Shipping',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
        image: img2,
        title: 'Online Shopping',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
        image: img3,
        title: 'Online Shopping',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
];



function CaseStudies() {
    return (
        <section id='case-study' className='case-main'>
            <Container>
                <div className="sec-title">
                    <h4 className='sec-title'>Case studies</h4>
                    <h2 className='sec-head'>
                        See How Challenges Become <br />
                        Success Stories For Our Clients
                    </h2>
                </div>

                <Row className='case-study'>
                    {caseStudiesData.map((study, index) => (
                        <Col lg={4} md={4} key={index} className='case-study-card'>
                            <div className='case-card'>
                                <img src={study.image} alt='' />
                            </div>
                            <h3>{study.title}</h3>
                            <p className='animate__animated animate__fadeInLeft'>{study.description}</p>
                        </Col>
                    ))}
                </Row>
                <div className="case-btn-main">
                    <button className='case-btn'>View All Case Studies<img src={arrow} alt="arrow button" /></button>
                </div>

            </Container>
        </section>
    );
}

export default CaseStudies;
