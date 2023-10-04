import React from "react";
import { NavLink } from "react-router-dom";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="main-carousel">
      <div>
          <video className="video-div" autoPlay loop playsInline muted>
            <source src="/images/earth.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
          <div className="inner-text">
            <h3 className="carousel-h3">Get ready for the</h3>
            <strong className="carousel-strong">AI events</strong>
            <p className="carousel-p">12-14 August 2023 - Karachi</p>
            <NavLink to="/events" className="carousel-btn">
              View Events
            </NavLink>
          </div>
      </div>
    </>
  );
};

export default Carousel;
