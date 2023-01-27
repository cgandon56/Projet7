import { useState } from 'react';
import back from "../../images/back.svg" ;
import forward from "../../images/forward.svg" ;

function Carousel({ figures }) {
	const [count, setCount] = useState(0); //count variable d'état et setcount fonction de définition, on passe 0 à useState
	const length = figures.length; 

	function handleNextClick ()  { //handleClick gestionnaire d'évènements
		setCount(count === length - 1 ? 0 : count + 1); // retour à la première image après la dernière
	};
	function handlePrevClick () {
		setCount(count === 0 ? length - 1 : count - 1); // retour à la dernière image si on est à la première
	};

	return (
		<div className ="carousel_Container">
			{length > 1 && ( // affichage de la flèche suivante si il y a plus de une image
				<img
					src={forward} 
					alt="forward"
					onClick={handleNextClick}
					className="arrow_Forward"
				/>
        
			)}
			{length > 1 && ( // affichage de la flèche précédente si il y a plus de une image
				<img
					src={back}
					alt="previous"
					onClick={handlePrevClick}
					className="arrow_Back"
				/>
			)}
      {length > 1 && ( // affichage de l'indicateurs du nombre d'images si il y a plus de une  image
					<span className="carousel_Number">
            {count + 1}/{length}
          </span>
			)}

			{figures.map((figure, index) => ( // pour retourner les images du tableau
				<div key={index} className={count === index ? "carousel_Actif" : "carousel"}>
					{index === count && <img src={figure} alt="location" className = "carousel_Img" />}
				</div>
			))}
		</div>
	);
}

export default Carousel ;






/*

function Caroussel ({figures}) {
  const [index, setIndex] = useState(0);
	

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePreviousClick() {
    setIndex(index - 1);
  }
  
  const length = figures[index];
  return (
    <div className="Caroussel" >  { 
      figures.map((figure, index) => { 
        
              return ( 
                <>
                <button onClick={handleNextClick}>
        Next
      </button>
                    <img className="Carousel_Img_Logement" src= {figure} alt="images location" /> 
                    <p className="caroussel_Number"> 
                      {index+1}/{length} 
                    </p> 
                
              
              </> 
      )})
        }
       
    </div> 
  );
}

export default Caroussel */



  



