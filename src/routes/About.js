import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg2 from '../Components/HeroImg2'
import Footer from '../Components/Footer'
import AboutContent from '../Components/AboutContent'
const About = () => {
  return (<div>
    <Navbar/>
    <HeroImg2 heading="About" text="Website Developed on ReactJS"/>
    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About