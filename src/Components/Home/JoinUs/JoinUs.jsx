import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Joinusvideo from '../../../assets/JoinUs/joinusvideo2.mp4'
import Joinusvideo2 from '../../../assets/JoinUs/joinusvideo1.mp4'
import Container from 'react-bootstrap/Container';

import './JoinUs.css'

import { FreeMode, Navigation, Thumbs } from "swiper/modules";


const slideVideo = [

 
  {
    id: 2,
    url: 'https://swiperjs.com/demos/images/nature-3.jpg',
    title: 'Image 1'
  },
  {
    id: 3,
    url: 'https://swiperjs.com/demos/images/nature-4.jpg',
    title: 'Image 1'
  },
  {
    id: 4,
    url: 'https://swiperjs.com/demos/images/nature-5.jpg',
    title: 'Image 1'
  },
  {
    id: 5,
    url: 'https://swiperjs.com/demos/images/nature-6.jpg',
    title: 'Image 1'
  },
  {
    id: 6,
    url: 'https://swiperjs.com/demos/images/nature-7.jpg',
    title: 'Image 1'
  },
  {
    id: 7,
    url: 'https://swiperjs.com/demos/images/nature-8.jpg',
    title: 'Image 1'
  },
  {
    id: 8,
    url: 'https://swiperjs.com/demos/images/nature-9.jpg',
    title: 'Image 1'
  },
  {
    id: 9,
    url: 'https://swiperjs.com/demos/images/nature-10.jpg',
    title: 'Image 1'
  },

]

function JoinUs() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className='join-us-main'>
      <Container>
        <div className="sec-title">
          <h4> Here what we have to say</h4>
          <h2>Join Us For Candid <br />
            Conversations And Insider Tips </h2>
        </div>

        <div className="join-us-slider-wrapper">

          <Swiper
            // style={{
            //   "--swiper-navigation-color": "#fff",
            //   "--swiper-pagination-color": "#fff",
            // }}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="joinus-1"
          >
            <SwiperSlide>
              <video width="100%" height="100%" controls>
                <source src={Joinusvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video width="100%" height="100%" controls>
                <source src={Joinusvideo2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>

            {slideVideo.map((item) => (
              <SwiperSlide key={item.id}>
                    <img src={item.url}/>
              </SwiperSlide>
            ))}

          </Swiper>


          <Swiper
            // onSwiper={setThumbsSwiper}
            onClick={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            activeIndex={0}
            className="joinus-2"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>

        </div>



      </Container>

    </section>
  )
}

export default JoinUs
