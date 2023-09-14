import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import Work from "../Components/Work"

const project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my recent Work"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default project