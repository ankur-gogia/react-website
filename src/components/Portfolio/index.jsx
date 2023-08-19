import React, { useState, useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import data from "../../data/carouselData.json";
import "./index.css";
import Loader from 'react-loaders'

const Portfolio = () => {
  const [slide, setSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const backgroundRef = useRef(null);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + data.length) % data.length);
  };


  return (
    <>
    <div className="container portfolio-page">
      <div
        className="background"
        
        style={{ backgroundImage: `url(${data[slide].src})` }}
        
      ></div>
      <div className="carousel" >
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
        <div
          className="slide-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={data[slide].src}
            alt={data[slide].alt}
            className={`slide-img ${isHovered ? "blur" : ""}`}
          />
          {isHovered && <div className="alt-text">{data[slide].alt}</div>}
        </div>
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        <h1
  style={{
    position: 'absolute',
    color: 'white',
    top: '-7rem',
    fontSize: '40px',
    left: 'auto',
    right: 'auto',
  }}
>
  {data[slide].location}
</h1>
        <button className="button-523"  onClick={() => setIsGridView(true)}>
          View All
        </button>
        {isGridView && (
          <div className={`grid-view ${isGridView ? "grid-view-active" : ""}`}>
            <button className="exit-button" onClick={() => setIsGridView(false)}>
              ✕ {/* Cross icon HTML entity */}
            </button>
            {data.map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={item.alt}
                className="grid-image"
                onClick={() => setIsGridView(false)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
