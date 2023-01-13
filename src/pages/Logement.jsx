import React from 'react';
import Carousel from '../components/Caroussel/caroussel';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Collapse from '../components/Collapse/collapse';
import { useParams } from "react-router-dom";
import data from '../datas/data' ;
import Tag from "../components/Tag/tag"

function Logement(){
    const { id } = useParams();
    const lodging = data.find((lodging) => lodging.id === id);
    
    return(
        <>
        <Header />
        <div className ="container py-4">
        <Carousel images={lodging.pictures} />
        </div>
        <div className ="container_Lodging">
            <div className ="lodging_Content_Left">
                <h1 className ="lodging_title">{lodging.title}</h1>
                <p className ="lodging_location">{lodging.location}</p>
                
                <div className="lodging_tags">
                {lodging.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
                ))}
                </div>
            </div>
            <div className ="Lodging-Content_Right">
                <div className = "host">test</div>
                <div className="rating" >test</div>          
            </div>
        </div>
        <div className ="Accordion_Lodging">
                <div className="Accordion_Lodging_Description">
                    <Collapse title = "Description" description ={lodging.description} />
                </div>
                <div className="Accordion_Lodging_Equipments" >
                    <Collapse title ="Equipements" description ={lodging.equipments}  />
                </div>
                   
        </div>
       
        
        
       <Footer />  
       </>  
    )
}

export default Logement;





