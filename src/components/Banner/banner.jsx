import React from "react";
import imgBanner from '../../images/imgbanner.png';
import '../Banner/banner.css';


function Banner({image, texte}) {
    return(
        <div className="Section">
			<img className="banner-img" src={imgBanner} alt="Bannière"/>
			<div className="Background"></div>
			<div className="banner-text">Chez vous, partout et ailleurs</div>
            
			
            
            
			
			</div>
        
    );
}

export default Banner;


