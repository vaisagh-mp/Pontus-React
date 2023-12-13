import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import img from '../../../assets/Aboutimg.png'
import arrow from '../../../assets/ButtonArrow.svg'


function AboutUs() {
  return (
    <section id='about-us' className='aboutUs-main'>
      <Container className='aboutUs'>
        <div className="about-wrapper">
          <Row>
            <Col lg={6} className='abt-content order-1'>
              <div className="sec-title">
                <h4>WHO WE ARE </h4>
                <h2>More Than a Company<br />
                  We Are Your Digital Growth Partners</h2>
              </div>
              <p>At Pontus, we are not just engineers; we are storytellers, weaving narratives that transform your aspirations into a digital reality. In our approach, we make sure innovation meets emotion and fuels progress by seamlessly integrating AI to build your path forward.</p>
              <p>As architects of progress, we mould brand identities that resonate, creating connections that last. At Pontus, success isn't a mere goal; it's a spotlight we cast on you. We craft campaigns that linger in minds and strategies that spark change. Join us in fostering progress, building brands, and delivering ideas that don't just stand out but make a lasting difference in this digital reality and move brands forward.</p>
              <div className="about-btn">
              <button className='abt-btn'> <img src={arrow} alt="arrow button" />Learn More</button>
              </div>
            </Col>
            <Col lg={6} className='abt-right-col order-md-1'>
              <div className="abt-img-bg-shape">
              </div>
              <div className="abt-img">
                <img src={img} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default AboutUs
