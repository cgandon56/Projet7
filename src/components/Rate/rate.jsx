import fullstar from "../../images/fullstar.svg";
import emptystar from "../../images/emptystar.svg";



const Rate = ({evaluation}) => {
  const stars =[1, 2, 3, 4, 5]
   return (
    <div className="rating" >
      {stars.map((star) => // pour retourner le tableau de nombres d'étoiles 
        evaluation >= star ? ( // Si il y a une note
          <img
            key={star.toString()} // méthode pour convertir le nombre en une chaîne
            className="rating_Icon"
            src={fullstar}
            alt="grey star"
          />
        ) : 
        (
          <img
            key={star.toString()}
            className="rating_Icon"
            src={emptystar}
            alt="color star"
          />
        )
      )}
    </div>
  );
};

export default Rate;


  
 