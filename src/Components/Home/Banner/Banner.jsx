import React from 'react'
import './Banner.css';
// import banner from '../../../assets/Banner.png'
import banner from '../../../assets/video/Banner_Video-website.mp4'

function Banner() {
  return (
    <div className='banner-main'>
      <video autoPlay loop muted id="myVideo">
        <source src={banner} type="video/mp4" />
      </video>

    </div>
  )
}

export default Banner
