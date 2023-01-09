import Banner from '../components/Banner/banner';
import React from "react";
import imgbanner_about from '../images/imgbanner_about.png';
import Collapse from '../components/Collapase/collapse'
//import { Accordion } from 'react-bootstrap-accordion';





function Propos() {
    return (
        <>
            <Banner img = {imgbanner_about}/>  
            <div className="container">
            <Collapse />
            </div>
        </>
     )}    
  
export default Propos;

   