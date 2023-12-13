
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './Clients.css';


import splendore from '../../../assets/clients/splendore.png';
import ALMABROUK_logo from '../../../assets/clients/ALMABROUK_logo.png';
import Nereus from '../../../assets/clients/Nereus.png';
import Floral_Allure from '../../../assets/clients/Floral_Allure.png';
import shane from '../../../assets/clients/shane.png';
import Rukn from '../../../assets/clients/Rukn.png';
import Artboard from '../../../assets/clients/Artboard.png';
import Al_Mabrouk from '../../../assets/clients/Al_Mabrouk.png';
import Serene_Green from '../../../assets/clients/Serene_Green.png';
import cieco from '../../../assets/clients/cieco.png';
import eighteenstep from '../../../assets/clients/eighteenstep.png';
import jac from '../../../assets/clients/jac.png';
import henn from '../../../assets/clients/henn.png';
import Ampes from '../../../assets/clients/Ampes.png';
import soteria from '../../../assets/clients/soteria.png';

const clientData = [
  { id: 1, name: 'Splendore', logo: splendore },
  { id: 2, name: 'Al-Mabrouk', logo: ALMABROUK_logo },
  { id: 3, name: 'Nereus', logo: Nereus },
  { id: 4, name: 'Floral_Allure', logo: Floral_Allure },
  { id: 5, name: 'shane', logo: shane },
  { id: 6, name: 'Rukn-AL-KHidma', logo: Rukn },
  { id: 7, name: 'Artboard ', logo: Artboard },
  { id: 8, name: 'Al_Mabrouk', logo: Al_Mabrouk },
  { id: 9, name: 'Serene_Green', logo: Serene_Green },
  { id: 10, name: 'cieco', logo: cieco },
  { id: 11, name: '18th step', logo: eighteenstep },
  { id: 12, name: 'jac', logo: jac },
  { id: 13, name: 'Hennesea', logo: henn },
  { id: 14, name: 'Ampes', logo: Ampes },
  { id: 15, name: 'soteria', logo: soteria },

];

import splendorembl from '../../../assets/clients/splendorembl.png';
import ALMABROUKmbl from '../../../assets/clients/ALMABROUKmbl.png';
import Nereusmbl from '../../../assets/clients/Nereusmbl.png';
import Floral_Allurembl from '../../../assets/clients/Floral_Allurembl.png';
import shanembl from '../../../assets/clients/shanembl.png';
import Ruknmbl from '../../../assets/clients/Ruknmbl.png';
import Artboardmbl from '../../../assets/clients/Artboardmbl.png';
import Al_Mabroukmbl from '../../../assets/clients/Al_Mabroukmbl.png';
import Serene_Greenmbl from '../../../assets/clients/Serene_Greenmbl.png';
import ciecombl from '../../../assets/clients/ciecombl.png';
import eighteenstepmbl from '../../../assets/clients/eighteenstepmbl.png';
import jacmbl from '../../../assets/clients/jacmbl.png';
import hennmbl from '../../../assets/clients/hennmbl.png';
import Ampesmbl from '../../../assets/clients/Ampesmbl.png';
import soteriambl from '../../../assets/clients/soteriambl.png';

const clientMblData = [
  { id: 1, name: 'Splendore', logo: splendorembl },
  { id: 2, name: 'Al-Mabrouk', logo: ALMABROUKmbl },
  { id: 3, name: 'Nereus', logo: Nereusmbl },
  { id: 4, name: 'Floral_Allure', logo: Floral_Allurembl },
  { id: 5, name: 'shane', logo: shanembl },
  { id: 6, name: 'Rukn-AL-KHidma', logo: Ruknmbl },
  { id: 7, name: 'Artboard ', logo: Artboardmbl },
  { id: 8, name: 'Al_Mabrouk', logo: Al_Mabroukmbl },
  { id: 9, name: 'Serene_Green', logo: Serene_Greenmbl },
  { id: 10, name: 'cieco', logo: ciecombl },
  { id: 11, name: '18th step', logo: eighteenstepmbl },
  { id: 12, name: 'jac', logo: jacmbl },
  { id: 13, name: 'Hennesea', logo: hennmbl },
  { id: 14, name: 'Ampes', logo: Ampesmbl },
  { id: 15, name: 'soteria', logo: soteriambl },

];

function Clients() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <section className='clients-main'>
          <Container className='clients'>
            <div className="sec-title">
              <h4>Clients</h4>
              <h2>Our Trusted Partners</h2>
            </div>
            <div className="clients-wrapper">
              {clientData.map(client => (
                <div className="client-logo" key={client.id}>
                  <img src={client.logo} alt={`${client.name} logo`} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : (
        <section className='clients-main'>
          <Container className='mbl-client'>
            <div className='sec-title'>
              <h4>Clients</h4>
              <h2 id='client-sub-title'>Our Trusted Partners</h2>
            </div>
            <div className="client-mbl-wrapper">
              {clientMblData.map(client => (
                <div className="client-mbl-logo" key={client.id}>
                  <img src={client.logo} alt={`${client.name} logo`} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

export default Clients;