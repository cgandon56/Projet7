import React from "react";
//import carousel from "react-responsive-carousel";
import data from '../../datas/data.json' ;

import Carousel from 'react-bootstrap/Carousel';



function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      {data.map(slide=>(
      <Carousel.Item key={slide.id}>
        <img
          className="d-block w-100"
          src={slide.pictures}
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
    
    {data.map((logement)=>{

    return (
<Carousel slide={false}>
<Carousel.Item key={logement.id}>
        <img className="d-block w-100">{logement.pictures}</img>
        <p className ='test'>test3</p>
      
          </Carousel.Item>

 
            </Carousel>
    )})}}

   
   

 
export default Caroussel;

//faire le map ici

/*
{data.map((appart, id) => (
    <div key={id}>
        <Link className="link_card" to={`/logement/${appart.id}`}>
            <Card cover={appart.cover} title={appart.title} />
        </Link>
    </div>*/