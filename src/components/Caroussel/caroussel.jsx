import Carousel from 'react-bootstrap/Carousel'; // Récupération carousel de bootstrap
//import data from '../../datas/data.json'



function Caroussel ({figures}) {
  //const [current] = useState(0); //je définie l'index du premier slide à 0
	const length = figures.length; // props technique pour récupérer les images
  return (
    <Carousel interval={null} >  { // empêcher le déroulement automatique des slides
      figures.map((figure, index) => { // pour renvoyer le tableau d'images
        return (
          <Carousel.Item key={index} >
              <img 
              className="d-block w-100"
              src= {figure}
              alt="images location"
              />
              <p className="caroussel_Number">
							{index+1}/{length}
						</p>
          </Carousel.Item>
          )
        })
      }  
    </Carousel>
  );
}

export default Caroussel



  



