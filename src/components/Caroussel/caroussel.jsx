import { useState } from 'react';
import back from "../../images/back.svg" ;
import forward from "../../images/forward.svg" ;

function Carousel({ figures }) {
	const [count, setCount] = useState(0); //je définie l'index du premier slide à 0
	const length = figures.length; // longueur du tableau de slides

	function handleNextClick ()  {
		setCount(count === length - 1 ? 0 : count + 1); // on repart au premier slide quand on arrive au dernier
	};
	function handlePrevClick () {
		setCount(count === 0 ? length - 1 : count - 1); // on repart au dernier slide quand on est au premier
	};

	return (
		<div className ="carousel_Container">
			{length > 1 && (
				<img
					src={forward} //Affichage des flèches seulement si length > 1
					alt="forward"
					onClick={handleNextClick}
					className="arrow_Forward"
				/>
        
			)}
			{length > 1 && (
				<img
					src={back}
					alt="previous"
					onClick={handlePrevClick}
					className="arrow_Back"
				/>
			)}
      {length > 1 && (
					<span className="carousel_Number">
            {count + 1}/{length}
          </span>
			)}

			{figures.map((figure, index) => (
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



  



