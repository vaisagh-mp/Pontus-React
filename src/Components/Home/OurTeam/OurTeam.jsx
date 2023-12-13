import React from 'react'
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';


import './OurTeam.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import slide_image_1 from '../../../assets/team/membera.png';
import slide_image_2 from '../../../assets/team/membera.png';
import slide_image_3 from '../../../assets/team/membera.png';
import slide_image_4 from '../../../assets/team/memberd.png';
import slide_image_5 from '../../../assets/team/membere.png';
import slide_image_6 from '../../../assets/team/membere.png';
import slide_image_7 from '../../../assets/team/membere.png';


function OurTeam() {
    return (
        <section id='our-team' className='ourteam-main'>
            <Container className='ourteam'>
                <div className='ourteam-content'>
                    <div className="sec-title">
                        <h4>OUR TEAM</h4>
                        <h2>Meet The Trendsetters<br />
                            Shaping Your Digital Journey</h2>
                    </div>
                    <p>Hey there! We're the brains and energy behind Pontus, we're a bunch of tech-savvy folks, on the lookout for the next big trend. What sets us apart? Well, we're not just good listeners; we're excellent listeners. Your ideas? We not only hear them; we turn them into digital masterpieces. And hey, we take on-time delivery seriously because we know time is money. Success is a team effort, and we've got your back.</p>
                </div>
                <div className="container ourteam-cont">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        autoplay={{ delay: 2000 }}
                        className="swiper_container"
                    >
                        <SwiperSlide>
                            <h5>Chief Executive Officer</h5>
                            <h3>Lorem ipsum</h3>
                            <img src={slide_image_1} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h5>Chief Executive Officer</h5>
                            <h3>Lorem ipsum</h3>
                            <img src={slide_image_2} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h5>Chief Executive Officer</h5>
                            <h3>Lorem ipsum</h3>
                            <img src={slide_image_3} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h5>Chief Executive Officer</h5>
                            <h3>Lorem ipsum</h3>
                            <img src={slide_image_4} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h5>Chief Executive Officer</h5>
                            <h3>Lorem ipsum</h3>
                            <img src={slide_image_5} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h5>Chief Executive Officer</h5>
                            <h3>Lorem ipsum</h3>
                            <img src={slide_image_6} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <h5>Chief Executive Officer</h5>
                            <h3>Lorem ipsum</h3>
                            <img src={slide_image_7} alt="slide_image" />
                        </SwiperSlide>

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            {/* <div className="swiper-pagination"></div> */}
                        </div>
                    </Swiper>
                </div>

            </Container>
        </section>
    )
}

export default OurTeam
