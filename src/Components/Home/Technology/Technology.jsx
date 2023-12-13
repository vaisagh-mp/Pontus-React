import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import android from '../../../assets/tech/android.png';
import java from '../../../assets/tech/java.png';
import Swift from '../../../assets/tech/Swift.png';
import react_native from '../../../assets/tech/react_native.png';
import Kotlin from '../../../assets/tech/Kotlin.png';
import flutter from '../../../assets/tech/flutter.png';

import angular from '../../../assets/tech/angular.png';
import react from '../../../assets/tech/react.png';
import WordPress from '../../../assets/tech/WordPress.png';
import codepen from '../../../assets/tech/codepen.png';
import webflow from '../../../assets/tech/webflow.png';
import sass from '../../../assets/tech/sass.png';

import node from '../../../assets/tech/node.png';
import dotnet from '../../../assets/tech/dotnet.png';
import springboot from '../../../assets/tech/springboot.png';
import php from '../../../assets/tech/php.png';


import graphql from '../../../assets/tech/graphql.png';
import firestore from '../../../assets/tech/firestore.png';
import postgresql from '../../../assets/tech/postgresql.png';
import mysql from '../../../assets/tech/mysql.png';
import MongoDB from '../../../assets/tech/MongoDB.png';

import './Technology.css';



function Technology() {

    

    const techData = [
        {
            category: 'Mobile App Development',
            logos: [android, java, Swift, react_native, Kotlin, flutter],
        },
        {
            category: 'Web Application',
            logos: [angular, react, WordPress, codepen, webflow, sass],
        },
        {
            category: 'Backend & Microservices',
            logos: [node, dotnet, springboot, php],
        },
        {
            category: 'Database',
            logos: [graphql, firestore, postgresql, mysql, MongoDB],
        },
    ];

    const MobileImage = [
        {
          id: 1,
          image: android,
          title: 'Image 1'
        },
        {
          id: 2,
          image: java,
          title: 'Image 2'
        },
        {
          id: 3,
          image: Swift,
          title: 'Image 3'
        },
        {
          id: 4,
          image: react_native,
          title: 'Image 4'
        },
        {
          id: 5,
          image: Kotlin,
          title: 'Image 5'
        },
        {
          id: 6,
          image: flutter,
          title: 'Image 6'
        }
      ];

    const webImage = [
        {
          id: 1,
          image: angular,
          title: 'Image 1'
        },
        {
          id: 2,
          image: react,
          title: 'Image 2'
        },
        {
          id: 3,
          image: WordPress,
          title: 'Image 3'
        },
        {
          id: 4,
          image: codepen,
          title: 'Image 4'
        },
        {
          id: 5,
          image: webflow,
          title: 'Image 5'
        },
        {
          id: 6,
          image: sass,
          title: 'Image 6'
        }
      ];

    const databaseImage = [
        {
          id: 1,
          image: graphql,
          title: 'Image 1'
        },
        {
          id: 2,
          image: firestore,
          title: 'Image 2'
        },
        {
          id: 3,
          image: postgresql,
          title: 'Image 3'
        },
        {
          id: 4,
          image: mysql,
          title: 'Image 4'
        },
        {
          id: 5,
          image: MongoDB,
          title: 'Image 5'
        },
      ];

    const backendImage = [
        {
          id: 1,
          image: node,
          title: 'Image 1'
        },
        {
          id: 2,
          image: dotnet,
          title: 'Image 2'
        },
        {
          id: 3,
          image: springboot,
          title: 'Image 3'
        },
        {
          id: 4,
          image: php,
          title: 'Image 4'
        },
        
      ];


    return (
        <>

            <section id='technology' className='technology'>
                <Container className='tech'>
                    <div className="sec-title">
                        <h4>Technology Stack </h4>
                        <h2>Your tech ally, seamless integration of cutting-edge<br /> tools, tailored just for you</h2>
                    </div>

                    <Row id='Mobile' className='tech-row'>
                        <Col lg={2} className='tech-content-colm'>
                            <h3>
                                Mobile App <br />Development
                            </h3>
                        </Col>

                        <Col lg={10} className='tech-logo-colm'>
                            <Row className='tech-logo'>
                                <Col lg={2} className='t-logo'>
                                    <img src={android} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={java} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={Swift} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={react_native} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={Kotlin} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={flutter} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className='tech-right'>

                        <Row id='Web' className='tech-row'>
                            <Col lg={10} className='tech-logo-colm'>
                                <Row className='tech-logo'>
                                    <Col lg={2} className='t-logo'>
                                        <img src={angular} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={react} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={WordPress} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={codepen} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={webflow} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={sass} alt="" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} className='tech-content-colm'>
                                <h3>
                                    Web
                                    <br />Application
                                </h3>
                            </Col>
                        </Row>

                    </div>

                    <Row id='Backend' className='tech-row'>
                        <Col lg={2} className='tech-content-colm'>
                            <h3>
                                Backend & <br />Microservices
                            </h3>
                        </Col>
                        <Col lg={10} className='tech-logo-colm'>
                            <Row className='tech-logo'>
                                <Col lg={2} className='t-logo'>
                                    <img src={node} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={dotnet} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={java} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={springboot} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src={php} alt="" />
                                </Col>
                                <Col lg={2} className='t-logo'>
                                    <img src="" alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className='tech-right'>
                        <Row id='Database' className='tech-row'>
                            <Col lg={10} className='tech-logo-colm'>
                                <Row className='tech-logo'>
                                    <Col lg={2} className='-+'>
                                        <img src={graphql} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={firestore} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={postgresql} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={mysql} alt="" />
                                    </Col>
                                    <Col lg={2} className='t-logo'>
                                        <img src={MongoDB} alt="" />
                                    </Col>

                                </Row>
                            </Col>
                            <Col lg={2} className='tech-content-colm'>
                                <h3>
                                    Database
                                </h3>
                            </Col>
                        </Row>
                    </div>


                </Container>
            </section>

            <section className='technolog-mobile'>

            <div className="sec-title">
                        <h4>Technology Stack </h4>
                        {/* <h2>Your tech ally, seamless integration of cutting-edge<br /> tools, tailored just for you</h2> */}
                    </div>

                <Container>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                        }}
                        className='tech-mb'
                    >
                        <SwiperSlide >
                            <div className="tech-mb-item">
                                <div className="tech-mb-item-header">
                                    <h3>Mobile App Development</h3>

                                </div>
                                <div className="tech-mb-item-card">
                                    <Row xs={3}>
                                        {MobileImage.map((item) => (
                                            <Col key={item.id}>
                                                <img src={item.image} alt={item.title} />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="tech-mb-item">
                                <div className="tech-mb-item-header">
                                    <h3>Web Application</h3>
                                </div>
                                <div className="tech-mb-item-card">
                                    <Row xs={3}>
                                        {webImage.map((item) => (
                                            <Col key={item.id}>
                                                <img src={item.image} />
                                            </Col>

                                        ))}
                                    </Row>
                                </div>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="tech-mb-item">
                                <div className="tech-mb-item-header">
                                    <h3>Backend & Microservices</h3>
                                </div>
                                <div className="tech-mb-item-card">
                                    <Row xs={3}>
                                        {backendImage.map((item) => (
                                            <Col key={item.id}>
                                                <img src={item.image} />
                                            </Col>

                                        ))}
                                    </Row>
                                </div>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="tech-mb-item">
                                <div className="tech-mb-item-header">
                                    <h3>Database</h3>
                                </div>
                                <div className="tech-mb-item-card">
                                    <Row xs={3}>
                                        {databaseImage.map((item) => (
                                            <Col key={item.id}>
                                                <img src={item.image} />
                                            </Col>

                                        ))}
                                    </Row>
                                </div>

                            </div>

                        </SwiperSlide>

                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default Technology


