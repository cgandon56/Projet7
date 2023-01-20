import React from "react";
import Carousel from 'react-bootstrap/Carousel'; // Récupération carousel de bootstrap



function Caroussel ({figures}) { // props technique pour récupérer les images
  return (
    <Carousel interval={null} >  { // empêcher le déroulement automatique des slides
      figures.map((figure, index) => { // pour renvoyer le tableau d'images
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


