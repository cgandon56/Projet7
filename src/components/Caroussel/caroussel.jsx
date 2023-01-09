import React from "react";
//import carousel from "react-responsive-carousel";
import data from '../../datas/data.json' ;

import Carousel from 'react-bootstrap/Carousel';



function NoTransitionExample() {
  return (
    <Carousel slide={false}> 
      {data.map((id)=>(
      <Carousel.Item key={id}>
        <img
          className="d-block w-100"
          src={id.pictures}
          alt="First slide"
        />
        
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default NoTransitionExample;








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