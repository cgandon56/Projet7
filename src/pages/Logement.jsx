import React from 'react';
import Caroussel from '../components/Caroussel/caroussel';
//import Header from '../components/Header/header';
//import Footer from '../components/Footer/footer';
import Collapse from '../components/Collapse/collapse';
import { useParams } from "react-router-dom";
import data from '../datas/data' ;
import Tag from "../components/Tag/tag";
import Host from "../components/Host/host" ;
import Rate from "../components/Rate/rate";
import { Navigate } from "react-router-dom";


function Logement(){
    const { id } = useParams();
    const lodging = data.find((lodging) => lodging.id === id);
    const equipmentsLodging = lodging.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })
    if (!lodging) {
        return <Navigate to="/error" replace />
      }
    return(
        <>
                
        <Caroussel/>
        
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
            <div className ="lodging-Content_Right">
                <Host hostname ={lodging.host.name} hostpicture={lodging.host.picture}/>
                <Rate evaluation={lodging.rating} />          
            </div>
        </div>
        <div className ="accordion_Lodging">
                <div className="accordion_Lodging_Description">
                    <Collapse title = "Description" description ={lodging.description} />
                </div>
                <div className="accordion_Lodging_Equipments" >
                    <Collapse title ="Equipements" description ={equipmentsLodging}    />
                </div>      
        </div> 
       </>  
    )
}

export default Logement;

/*
<div className ="container">
        <Caroussel img= {lodging.pictures} />
        </div>*/


