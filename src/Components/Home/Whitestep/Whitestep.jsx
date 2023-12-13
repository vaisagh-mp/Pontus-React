import React from 'react'
import Container from 'react-bootstrap/Container';
import 'animate.css';
import './Whitestep.css'

function Whitestep() {
  return (
    <Container fluid className='whitestep-main'>
        <div className="whitestep-wrapper">
            <div id='whitestep-1' className='whitestep animate__animated animate__fadeInUp'></div>
            <div id='whitestep-2' className='whitestep animate__animated animate__fadeInUp'></div>
            <div id='whitestep-3' className='whitestep animate__animated animate__fadeInUp'></div>
        </div>
    </Container>
  )
}

export default Whitestep
