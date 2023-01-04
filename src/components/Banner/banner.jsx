import React from "react";
//import imgBanner from '../../images/imgbanner.png';
import '../Banner/banner.css';


function Banner(props) {
    return(
        <div className="Section">
			<img className="banner-img" src={props.img} alt="Bannière"/>
			<div className="Background"></div>
			<div className="banner-text">{props.text}</div>
        </div> 
    );
}

export default Banner;


