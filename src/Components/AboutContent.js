import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import react1 from "../Assets/pexels-cup-of-couple-6177677.jpg"
import react2 from "../Assets/pexels-toni-cuenca-585752.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I amd a react fron-end developer</p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1}  className="img" alt="nino" />
                    </div>   
                    <div className="img-stack bottom">
                        <img src={react2} className="img" alt="" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent