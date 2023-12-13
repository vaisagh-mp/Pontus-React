import React from 'react'
import Container from 'react-bootstrap/Container';
import './Step.css'
import 'animate.css';


function Step() {
  return (
    <Container fluid className='step-main'>
        <div className="step-wrapper">
            <div id='step-1' className='step animate__animated animate__fadeInUp'></div>
            <div id='step-2' className='step step animate__animated animate__fadeInUp'></div>
            <div id='step-3' className='step step animate__animated animate__fadeInUp'></div>
        </div>
    </Container>
  )
}

export default Step
