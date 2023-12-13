import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Home/Banner/Banner'
import Embrace from './Components/Home/Embrace/Embrace'
import OurWorks from './Components/Home/Ourworks/OurWorks'
import Sevices from './Components/Home/Services/Services'
import AboutUs from './Components/Home/AboutUs/AboutUs'
import WhatWeDo from './Components/Home/Whatwedo/WhatWeDo'
import Footer from './Components/Footer/Footer'
import Explore from './Components/Home/Explore/Explore'
import Step from './Components/Home/Step/Step'
import Whitestep from './Components/Home/Whitestep/Whitestep'
import CaseStudies from './Components/Home/CaseStudies/CaseStudies'
import Getaquote from './Components/Home/Getaquote/Getaquote'
import Technology from './Components/Home/Technology/Technology'
import Clients from './Components/Home/Clients/Clients'
import OurTeam from './Components/Home/OurTeam/OurTeam'
import JoinUs from './Components/Home/joinUs/joinUs'



function App() {
  return (
    <div className="js-cont">
      <div className="js-scroll">
        <Header />
        <Banner />
        <Step />
        <Embrace />
        <CaseStudies />
        <Step />
        <Sevices />
        <Technology />
        <Explore />
        <Whitestep />
        <AboutUs />
        <WhatWeDo />
        <Step />
        <OurTeam />
        <JoinUs/>
        <Whitestep />
        <Clients />
        <Step />
        <Getaquote />
        <Footer />
      </div>
    </div>
  )
}

export default App
