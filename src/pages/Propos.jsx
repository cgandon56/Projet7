import Banner from '../components/Banner/banner';
//import React from "react";
import imgbanner_about from '../images/imgbanner_about.png';
import Collapse from '../components/Collapse/collapse';
//import Header from '../components/Header/header';
//import Footer from '../components/Footer/footer';
//import { Accordion } from 'react-bootstrap-accordion';
//import React, { useState } from 'react';

function Propos() {
    
    return (
        <>
            <Banner img = {imgbanner_about}/>  
            <div className="container py-4">
                <Collapse title = "Fiabilité" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <Collapse title = "Respect" description = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. " />
                <Collapse title = "Service" description = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <Collapse title = "Sécurité" description = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </>
     )}    
  
export default Propos;

   