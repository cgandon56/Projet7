import Carousel from 'react-bootstrap/Carousel'; // Récupération carousel de react-bootstrap



function Caroussel ({figures}) { // props pour récupérer les images
	const length = figures.length; 
  

  return (
    <Carousel interval={null} >  { // empêcher le déroulement automatique des slides
      figures.map((figure, index) => { // pour renvoyer le tableau d'images
        if ( length === 1) {
        return (
          <Carousel.Item key={index}> 
          <img className="d-(block w-100" src={figure} alt="images location" /> 
          </Carousel.Item>)
          } else {
              return ( 
          <Carousel.Item key={index} > 
              <img className="d-block w-100" src= {figure} alt="images location" /> 
              <p className="caroussel_Number"> 
							{index+1}/{length} 
						  </p> 
          </Carousel.Item> 
          
          )}
        }) 
      }  
    </Carousel> 
  );
}

export default Caroussel



  



