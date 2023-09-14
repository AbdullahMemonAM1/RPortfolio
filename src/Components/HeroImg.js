import "./HeroImgStyle.css";
import React from 'react';
import { Link } from "react-router-dom";
import IntroImg from "../Assets/pexels-pixabay-356056.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="img" />
      </div>
      <div className="content">
        <p>Hi, I AM A PROGRAMMER</p>
        <h1>DEVELOPER</h1>
        <Link to="/project" className="btn">
        Projects
      </Link>
      <Link to="/contact" className="btn btn-light">
        Contacts
      </Link>
      </div>
      
    </div>
  );
};

export default HeroImg;