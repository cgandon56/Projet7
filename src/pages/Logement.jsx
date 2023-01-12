import React from 'react';
import Carousel from '../components/Caroussel/caroussel';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Collapse from '../components/Collapse/collapse';
//import {data} from '../datas/data' ;

function Logement(){
    return(
        <>
        <Header />
        <div className ="container py-4">
        <Carousel />
        </div>
        <div className ="container_Lodging">
            <div className ="Lodging_Content_Left">
                <h1 className ="title">Cozy loft on the Canal Saint-Martin</h1>
                <p className ="location"></p>
                <span className="tags"></span>
            <div className ="Lodging-Content_Right">
                <span className = "host"></span>
                <span className="rating"  ></span>          
            </div>
            <div className ="Accordion_Lodging">
                <div className="Accordion_Lodging_Description">
                    <Collapse className="Accordion_Lodging_Description" />
                </div>
                <div className="Accordion_Lodging_Equipments">
                    <Collapse />
                </div>
                   
            </div>
        </div>
        </div>
        
       <Footer />  
       </>  
    )
}

export default Logement;





