import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import react1 from "../Assets/pexels-cup-of-couple-6177677.jpg";
import react2 from "../Assets/pexels-toni-cuenca-585752.jpg";

import React from "react";

const AboutContent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>Who am I?</h1>
          <p>
            As a Computer Science student at FAST NUCES, I’ve honed exceptional
            problem-solving and analytical skills throughout my academic
            journey. Engaging in diverse projects, both independently and
            collaboratively, I’ve received commendation and positive feedback
            from instructors and peers alike. As a results-oriented Software
            Engineer, I bring expertise in developing customized software
            solutions and leading the integration of new features. I have
            demonstrated success in effective collaboration with
            cross-functional teams throughout the entire application development
            lifecycle.
          </p>

          <Link to="https://github.com/AbdullahMemonAM1">
            <button className="btn" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={react1} className="img" alt="nino" />
            </div>
            <div className="img-stack bottom">
              <img src={react2} className="img" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="  certifications" style={{ color: "white" }}>
          <h2>Certifications</h2>
          <ul>
            <li>HTML and CSS in depth by META</li>
            <li>Intro to Git and Github by Google</li>
            <li>
              Machine Learning Specialization by DeepLearning.AI,Stanford CVD
            </li>
            <li> Google CyberSecurity Specialization</li>
            <li>Scrum Foundation Professional Certificate</li>
            <li>Cluster Analysis in Python</li>
            <li> Exploring and Analyzing Data in Python</li>
            <li>
              Unsupervised Learning, Recommender Systems by DeepLearning.AI,
              Stanford CVD
            </li>
          </ul>
        </div>
        <div className=" experience" style={{ color: "white" }}>
          <h2>Expirence</h2>
          <ul>
            <li>
              TEACHING ASSISTANT | Design and Analysis of Algoirthms
              <p>
                Facilitated intensive study skills classes with 150 students for
                a 2-hour period per week,resulting in a 10% increase in
                studentretention
              </p>
            </li>
            <li>
              FULL STACK INTERN | Lumhs Universirty
              <p>
                Worked on creating the university’s website using React.js and
                Node.js.
              </p>
              <p>
                Worked on Gathering,Editing and adding content for Development
                of Web pages
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
