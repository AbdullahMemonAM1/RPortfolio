import "./FooterStyles.css"
import { FaHome,FaPhone,FaMailBulk,FaLinkedin } from "react-icons/fa";
import React from 'react'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    
                    <div>
                        <p>123 Housing Society</p>
                        <p>Pakistan</p>
                    </div>
                    </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 1-2345-6789</h4>
              
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> info@gmail.com</h4>
              
                </div>
               </div>
                

                <div className="right">
                    <h4 className="about1">About Me!</h4>
                    <p>Hello! My name is Abdullah Memon.
                        I am a passionate Web Developer, Data Analyst and Programmer
                    </p>
                    <div className="social">
                     < FaLinkedin size={30} style={{ color: "#fff", marginRight: "1.5rem"  }} />
                    </div>
                    <div className="linked">
                    <h3 >www.linkedin.com/in/abdullah-memon-aba937237</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer