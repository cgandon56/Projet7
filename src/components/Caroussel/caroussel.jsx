//import React from "react";
import Carousel from 'react-bootstrap/Carousel'; // Récupération carousel de bootstrap
//import data from '../../datas/data.json'

import React, { useState } from 'react';

//import back  from '../../images/back.svg';
//import forward from '../../images/forward.svg';

function Caroussel ({figures}) {
  const [current] = useState(0); //je définie l'index du premier slide à 0
	const length = figures.length; // props technique pour récupérer les images
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
              <p className="caroussel_Number">
							{index+1}/{length}
						</p>
          </Carousel.Item>
          )
        })
      }  
    </Carousel>
  );
}

export default Caroussel

/*
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

 <div className='caroussel-count'>
                <span>{picNumber}/{dataLength}</span>
            </div>
*/

