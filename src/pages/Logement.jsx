import React from 'react';
import Caroussel from '../components/Caroussel/caroussel';
import Collapse from '../components/Collapse/collapse';
import { useParams } from "react-router-dom"; // pour récupérer les paramètres de route
import data from '../datas/data' ;
import Tag from "../components/Tag/tag";
import Host from "../components/Host/host" ;
import Rate from "../components/Rate/rate";
import { Navigate } from "react-router-dom"; // pour rediriger vers une autre page


function Logement(){
    const { id } = useParams(); // pour accéder au paramètre id et aux valeurs correspondantes
    const lodging = data.find((lodging) => lodging.id === id); //pour récupérer les éléments qui correspondent à l'id du logement
        if (!lodging) { // si l'id n'existe pas, reririger vers la page erreur
            return <Navigate to="/error" replace />
        }
    const equipmentsLodging = lodging.equipments.map((equipment, index) => { // pour retourner les équipements 
        return <li key={index}>{equipment}</li> // utilisation de l'index comme clé pour afficher la liste des équipements
    })
    return(
        <>
           <Caroussel figures={lodging.pictures}/>
                <div className ="container_Lodging">
                    <div className ="lodging_Content_Left">
                        <h1 className ="lodging_title">{lodging.title}</h1>
                        <p className ="lodging_location">{lodging.location}</p>
                            <div className="lodging_tags">
                            {lodging.tags.map((tag, index) => ( // pour retourner les tags 
                            <Tag key={index} tag={tag} /> // utlisation de l'index clé pour afficher les tags
                            ))}
                            </div>
                    </div>
                    <div className ="lodging_Content_Right">
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



