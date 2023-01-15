import React from "react";
import fullstar from "../../images/fullstar.svg";
import emptystar from "../../images/emptystar.svg";



const Rate = ({evaluation}) => {
  const stars =[1, 2, 3, 4, 5]
  return (
    <div className="rating" >
      {stars.map((star) =>
        evaluation >= star ? (
          <img
            key={star.toString()}
            className="rating_Icon"
            src={fullstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="irting_Icon"
            src={emptystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rate;


  
 