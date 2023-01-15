import Banner from '../components/Banner/banner';
import React from "react";
import imgbanner from '../images/imgbanner.png';
import Card from '../components/Card/card';
import { Link } from "react-router-dom";
import data from '../datas/data' ;
//import Header from '../components/Header/header';
//import Footer from '../components/Footer/footer';

//import Footer from '../components/Footer/footer';


function Home (){
  return (
      <>
      
      <Banner img = {imgbanner} text = "Chez vous, partout et ailleurs"/>  
      <div className="Gallery">
      <article className="Thumb">
				{data.map((appart, id) => (
					
						<Link className="link_Thumb" key= {id} to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
            
				
				))}
        </article>
		
      </div>
     
      </>

)
}
export default Home;



