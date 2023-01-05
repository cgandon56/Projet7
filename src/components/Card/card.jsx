
import React from "react";
//import {data }from '../../datas/data' ;
//import { Link } from "react-router-dom";


function Card(props) {
return (
   
    
            <div className = 'Card'>
            <img className ="pictureCard" src={props.cover} alt="location" />
            
                </div>
             
                
           
          
    
)
}

export default Card
/*
function Tuile({id, image, titre}) {
    return(
        <div className="tuile" id={id}>
            <img className="tuile-image" src={image} alt="Tuile"/>
            <div className="tuile-sombre"></div>
            <span className="tuile-titre">{titre}</span>
        </div>
    );
}

export default Tuile;
<div className='Gallery'>
        <div className='Thumb'>  
                {data.map((logement) => <Link key={logement.id} to={`/logement/${logement.id}`}>
                  <Card key={logement.id} id={logement.id} image src={logement.cover} title={logement.title} /></Link>)}
        
 </div>
 </div>

{data.map((logement) => <Link key={logement.id} to={`/logement/${logement.id}`} image src={logement.cover} title={logement.title} ></Link>)}
               
*/




