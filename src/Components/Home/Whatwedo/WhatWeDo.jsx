import React from 'react';
import Container from 'react-bootstrap/Container';
import './WhatWeDo.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrow from '../../../assets/ButtonArrow.svg';
import getSpotted from '../../../assets/getSpotted.png';
import getSpotted1 from '../../../assets/Dodifferent.png';
import getSpotted2 from '../../../assets/ResultOriented.png';

const sectionsData = [
  {
    // image: getSpotted,
    image: getSpotted1,
    title: "What We Do Differently?",
    description: "We get it sales fuel success for your business. That's why our take on digital marketing isn't just a service; it's the secret that turns possibilities into profits, the ultimate factor for your brand’s growth. We know the power of the right strategy can open doors, enhance your brand identity, and turn heads. With the right combo of strategic digital marketing and transformative AI, partner with us to redefine what's possible in the digital world.",
    buttonText: "Learn More"
  },
  {
    image: getSpotted2,
    title: "Result Oriented \n\n Digital Marketing Agency",
    description: "We're all about results that you can see and feel. Working with clients from all walks of life, we've turned goals into reality in just a few months. From making brands shine to turning clicks into conversions, our success stories are a reflection of the genuine energy and passion we put into every project",
    buttonText: "Learn More"
  },

].map(section => ({
  ...section,
  titleLines: section.title.split('\n\n')
}));

function WhatWeDo() {
  return (
    <section className='whatwedo-main'>
      <Container className='whatwedo'>
        {sectionsData.map((section, index) => (
          <Row key={index}>
            {index % 2 === 0 ? (
              <>
                <Col lg={4} className='left-sec'>
                  <div className="get-spot-left">
                    <img src={section.image} alt="Get Spotted" />
                  </div>
                  <div id='img_main1' className="img-container">

                  </div>
                </Col>
                <Col lg={8} md={8} className='right-sec'>
                  <div className="wwd-content">
                    <div className="sec-title">
                      <h2>{section.title}</h2>
                    </div>
                    <p>{section.description}</p>
                    <div className="wwd-btn">
                      <button className='abt-btn'> <img src={arrow} alt="arrow button" />{section.buttonText}</button>
                    </div>

                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col lg={8} className='left-sec order-1'>
                  <div className="wwd-content">
                    <div className="sec-title">
                      {section.titleLines.map((line, i) => (
                        <h2 key={i}>{line}</h2>
                      ))}
                    </div>
                    <p>{section.description}</p>
                    <div className="wwd-btn">
                      <button className='abt-btn'> <img src={arrow} alt="arrow button" />{section.buttonText}</button>
                    </div>

                  </div>
                </Col>
                <Col lg={4} className='left-sec order-md-1'>
                  <div className="get-spot-right">
                    <img src={section.image} alt="Get Spotted" />
                  </div>
                  <div id='img_main2' className="img-container">

                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default WhatWeDo;
