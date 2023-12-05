import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="left">
          <div>
            <h4 className="about1" style={{ marginBottom: "1vh" }}>
              Contact Information:
            </h4>
          </div>
          <div className="location">
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />

            <div>
              <Link
                to="https://github.com/AbdullahMemonAM1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>https://github.com/AbdullahMemonAM1</h3>
              </Link>
            </div>
          </div>

          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              +92-308-9000465
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              abdullah.memon.7.am3@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4 className="about1">About Me!</h4>
          <p>
            Hello! My name is Abdullah Memon. I am a passionate Web Developer,
            Data Analyst and Programmer
          </p>
          <div className="social">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
          </div>
          <div className="linked">
            <Link
              to="https://linkedin.com/in/abdullah-memon-aba937237"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>www.linkedin.com/in/abdullah-memon</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
