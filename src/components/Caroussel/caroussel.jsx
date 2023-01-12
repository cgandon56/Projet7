import React from "react";
//import carousel from "react-responsive-carousel";
import Pictures from '../../datas/data.json' ;
//import { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';



function Caroussel() {

  return (
    <Carousel slide={false}> 
      {Pictures.map((data)=>(
      <Carousel.Item key={data.id}>
        <img
          className="d-block w-100"
          src={data.pictures}
          alt="First slide"
        />
        
      </Carousel.Item>
      ))}
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