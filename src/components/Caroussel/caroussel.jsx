
import React from "react";
import Carousel from 'react-bootstrap/Carousel';



function Caroussel ({figures}) {
  return (
    
        <Carousel interval={null} >  {
          figures.map((figure, index) => {
            return (
              <Carousel.Item key={index} >
              
              <img 
              className="d-block w-100"
              src= {figure}
              alt="First slide"
              />
             
            </Carousel.Item>
            )
          })
        }  
        </Carousel>
  
  );
}

export default Caroussel;


/*
function Caroussel ({figures}) {
  return (
    <section className="caroussel_Block">
      <container fluid>
        <Carousel interval={null} >  {
          figures.map((figure, index) => {
            return (
              <Carousel.Item key={index} >
              <blockquote>
              <img 
              className="d-block w-100"
              src= {figure}
              alt="First slide"
              />
              </blockquote>
            </Carousel.Item>
            )
          })
        }  
        </Carousel>
    </container>
  </section> 
  );
}

export default Caroussel;*/