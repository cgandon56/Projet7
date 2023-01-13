import React from "react";
//import carousel from "react-responsive-carousel";
//import { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';



function Caroussel(props) {

  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
      
    </Carousel>
  );
}

export default Caroussel;








/*
function Caroussel() {
    
  <div className={classes.carousel_wrapper} ref={carouselRef}>
      {props.pictures.length > 1 && (
        <ArrowLeft
          className={classes.carousel_arrowLeft}
          onClick={() => handleClickPrevious()}
        />
      )}

      {props.pictures.map((picture, i) => (
        <img
          key={`picture-${i + 1}`}
          src={picture}
          alt="accomodations"
          style={{
            left: `${width * (i - (position - 1))}px`,
            transition: `left ${transitionTime}s ease-in-out`,
          }}
        />
      ))}

      <p className={classes.carousel_counter}>
        {position}/{props.pictures.length}
      </p>*/