import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Services.css';

import img1 from '../../../assets/digitalmarketing.png'
import img2 from '../../../assets/seo.png'
import img3 from '../../../assets/website.png'
import img4 from '../../../assets/smmarketing.png'
import img5 from '../../../assets/Branding.png'
import img6 from '../../../assets/Statergyconsulting.png'
import img7 from '../../../assets/googleads.png'
import img8 from '../../../assets/contentmarketing.png'
import img9 from '../../../assets/emailmarketing.png'
import img10 from '../../../assets/Ai.png'

import img11 from '../../../assets/digitalmarketing_back.png'
import img12 from '../../../assets/seo_back.png'
import img13 from '../../../assets/website_back.png'
import img14 from '../../../assets/smmarketing_back.png'
import img15 from '../../../assets/Branding_back.png'
import img16 from '../../../assets/Statergyconsulting_back.png'
import img17 from '../../../assets/googleads_back.png'
import img18 from '../../../assets/contentmarketing_back.png'
import img19 from '../../../assets/emailmarketing_back.png'
import img20 from '../../../assets/Ai_back.png'


const ServicesData = [
  {
    image: img1,
    title: 'Digital \n\n Marketing',
  },
  {
    image: img2,
    title: 'SEO \n\n (Search Engine Optimization)',
  },
  {
    image: img3,
    title: 'Website \n\n Development',
  },

].map(section => ({
  ...section,
  titleLines: section.title.split('\n\n')
}));

const ServicesDataBack = [
  {
    image: img11,
    title: 'Digital \n\n Marketing',
    dec: 'Strategies that captivate and convert.',
  },
  {
    image: img12,
    title: 'SEO \n\n (Search Engine Optimization)',
    dec: 'Strategies that captivate and convert.',
  },
  {
    image: img13,
    title: 'Website \n\n Development',
    dec: 'Strategies that captivate and convert.',
  },

].map(section => ({
  ...section,
  titleLines: section.title.split('\n\n')
}));



const ServicesFinal = [
  {
    image: img8,
    title: 'Content \n\n Marketing',
  },

  {
    image: img9,
    title: 'Email \n\n Marketing',
  },
  {
    image: img10,
    title: 'AI \n\n Transformation',
  },

].map(section => ({
  ...section,
  titleLines: section.title.split('\n\n')
}));
const ServicesFinalBack = [
  {
    image: img18,
    title: 'Content \n\n Marketing',
    dec: 'Strategies that captivate and convert.',
  },

  {
    image: img19,
    title: 'Email \n\n Marketing',
    dec: 'Strategies that captivate and convert.',
  },
  {
    image: img20,
    title: 'AI \n\n Transformation',
    dec: 'Strategies that captivate and convert.',
  },

].map(section => ({
  ...section,
  titleLines: section.title.split('\n\n')
}));

const desiredServices = [
  {
    image: img4,
    title: 'Social \n\n Media Marketing',
  },
  {
    image: img5,
    title: 'Branding',
  },
  {
    image: img6,
    title: 'Strategy \n\n Consulting',
  },
  {
    image: img7,
    title: 'Google \n\n Ads',
  },

].map(section => ({
  ...section,
  titleLines: section.title.split('\n\n')
}));
const desiredServicesBack = [
  {
    image: img14,
    title: 'Social \n\n Media Marketing',
    dec: 'Strategies that captivate and convert.',
  },
  {
    image: img15,
    title: 'Branding',
    dec: 'Strategies that captivate and convert.',
  },
  {
    image: img16,
    title: 'Strategy \n\nConsulting',
    dec: 'Strategies that captivate and convert.',
  },
  {
    image: img17,
    title: 'Google \n\n Ads',
    dec: 'Strategies that captivate and convert.',
  },

].map(section => ({
  ...section,
  titleLines: section.title.split('\n\n')
}));



function Services() {
  return (
    <section id='services' className='services-main'>
      <Container>
        <div className="sec-title">
          <h4 className='services-title'>OUR SERVICES</h4>
          <h2 className='services-head'>Innovate, Transform, Thrive<br />
            And Unlock Your Potential</h2>
        </div>


        <Row className='services'>
          {ServicesData.map((study, index) => (
            <Col lg={4} md={4} key={index} className='services-card'>
              <div className="services-item">
                <div className='services-card-item-front'>
                  <div className="ser-card-front-img">
                    <img src={study.image} alt='' />
                  </div>
                  <div className="ser-front-title">
                    {study.titleLines.map((line, i) => (
                      <h3 key={i}>{line}</h3>
                    ))}
                  </div>
                </div>
                <div className='services-card-item-back'>
                  <Row className='ser-back-row'>
                    <Col className='ser-back-title' lg={8}>
                      <h3>{ServicesDataBack[index].title}</h3>
                    </Col>
                    <Col lg={4}>
                      <div className="ser-back-img">
                        <img src={ServicesDataBack[index].image} alt="" />
                      </div>
                    </Col>
                  </Row>
                  <div className="ser-back-content">
                    <p>{ServicesDataBack[index].dec}</p>
                  </div>
                  <div className="ser-read-more-btn">
                    <a href='#'>Read more</a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className='services'>
          {desiredServices.map((service, index) => (
            <Col lg={3} md={3} key={index} className='services-card'>
              <div className="services-item">
                <div className='services-card-item-front-center'>
                  <div className="ser-card-front-center-img">
                    <img src={service.image} alt='' />
                  </div>
                  <div className="ser-front-title"><h3>{service.title}</h3>
                  </div>
                </div>

                <div className='services-card-item-back-center'>
                  <Row className='ser-back-row'>
                    <Col className='ser-back-title' lg={7}>
                      <h3>{desiredServicesBack[index].title}</h3>
                    </Col>
                    <Col lg={5}>
                      <div className="ser-back-center-img">
                        <img src={desiredServicesBack[index].image} alt="" />
                      </div>
                    </Col>
                  </Row>
                  <div className="ser-back-content">
                    <p>{desiredServicesBack[index].dec}</p>
                  </div>
                  <div className="ser-read-more-btn">
                    <a href='#'>Read more</a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className='services'>
          {ServicesFinal.map((study, index) => (
            <Col lg={4} md={4} key={index} className='services-card'>
              <div className="services-item">

                <div className='services-card-item-front'>
                  <div className="ser-card-front-img">
                    <img src={study.image} alt='' />
                  </div>
                  <div className="ser-front-title">
                    <h3>{study.title}</h3>
                  </div>
                </div>

                <div className='services-card-item-back'>
                  <Row className='ser-back-row'>
                    <Col className='ser-back-title' lg={8}>
                      <h3>{ServicesFinalBack[index].title}</h3>
                    </Col>
                    <Col lg={4}>
                      <div className="ser-back-img">
                        <img src={ServicesFinalBack[index].image} alt="" />
                      </div>
                    </Col>
                  </Row>
                  <div className="ser-back-content">
                    <p>{ServicesFinalBack[index].dec}</p>
                  </div>
                  <div className="ser-read-more-btn">
                    <a href='#'>Read more</a>
                  </div>
                </div>

              </div>

            </Col>
          ))}
        </Row>
      </Container>

    </section>
  )
}

export default Services
