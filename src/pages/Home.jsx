import Banner from '../components/Banner/banner';
import React from "react";
import imgbanner from '../images/imgbanner.png';
import Card from '../components/Card/card';
import { Link } from "react-router-dom";
import data from '../datas/data' ;
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

/*
{products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
                
                {data.map((location) => (
                <div className = 'Card' key={`${location.title}-${location.id}`}><img className ="pictureCard" src={`${location.cover}`}></img></div>
            )
            )}


            {data.map((location) => {
          return (
      <article key={location.id}>
              <Link to={`/data/${location.id}`}>
                <Card image={location.cover} title={location.title} />
              </Link>
            </article>      
    );
  })}
                */


