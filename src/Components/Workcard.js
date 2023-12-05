import React from "react";
import "./Workcardstyle.css";
import pro1 from "../Assets/web1.png";
import { Link } from "react-router-dom";

const Workcard = (props) => {
  return (
    <div className="work-container">
      <div className="project-card">
        <img src={props.imgsrc} alt="image" style={{ height: "25vh" }} />
        <h2 className="proj-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            <Link
              to={props.view}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
