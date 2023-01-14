
import React from "react";
//import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import data from "../../datas/data.json";
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.pictures}
          alt="slider image"
        />
      
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;