
import React from "react";
//import { Carousel } from "react-responsive-carousel";
//import { useState } from "react";
import data from "../../datas/data.json";
import Carousel from 'react-bootstrap/Carousel';

function Caroussel() {
  return (
    <Carousel interval={null} >
     
     
      <Carousel.Item >
        <img
          className="d-block w-100"
          src= "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg"
          alt="First slide"
                />
              </Carousel.Item>
             
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg"
          alt="Second slide"
       
        />

      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Third slide"
          
        />

   
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel;