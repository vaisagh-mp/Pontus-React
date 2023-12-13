import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import './Embrace.css';
import arrow from '../../../assets/ButtonArrow_w.svg';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    heading: 'We embrace every customer encounter as an opportunity to assist them in overcoming a challenge or attaining a goal',
    buttonText: 'Learn More'
  },
  // {
  //   id: 2,
  //   heading: "Our focus isn't merely selling a product or service; it's about understanding your needs and collaboratively finding solutions that genuinely make a difference in your journey.",
  //   buttonText: 'Learn More'
  // },
  // {
  //   id: 3,
  //   heading: 'Thriving businesses are powered by successful sales, making it the ultimate factor for satisfaction and happiness.',
  //   buttonText: 'Learn More'
  // },
  // {
  //   id: 4,
  //   heading: 'Get Spotted With Us. Partner with us, and let\'s achieve this goal together',
  //   buttonText: 'Learn More'
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", 'end start']
  });

  const y = useTransform(scrollYProgress, [0,1], [300,-300]);

  return (
    <section className='embrace-main'>

      <Container>

      <div key={item.id} className='embrace'>
        <h2>{item.heading}</h2>
        <button type='submit' className='quote-btn'>
          <img src={arrow} alt="arrow button" />
          {item.buttonText}
        </button>
        </div>
      </Container>

    </section>
  )
}

function Embrace() {
  return (

    <>
      {items.map(item => (
        <Single item={item}>
        </Single>
      ))}
    </>

  );
}

export default Embrace;