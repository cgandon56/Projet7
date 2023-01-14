import React from "react";
//import { Carousel } from "react-responsive-carousel";
//import { useState } from "react";
import data from "../../datas/data.json";
import Carousel from 'react-bootstrap/Carousel';

function Caroussel() {
  return (
    <Carousel slide={false}>
  <Carousel.Item>
   {data.map((pictures, index) => (
     <div className="slide">
   <img className="d-block w-100" alt="sample_file" src={pictures} key={index} />
        </div>
        ))}
     
     </Carousel.Item>
    </Carousel>
 
     );
   }

    export default Caroussel;












