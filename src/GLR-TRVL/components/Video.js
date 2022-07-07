import React from "react";
import spaceVideo from "../assets/space.mp4";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Galaxy. Travel.</h1>
        <p>World's first civilians space travel.</p>
        <div>
          <Link to="/training" className="butn">
            Training
          </Link>
          <Link to="/contact" className="butn butn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
