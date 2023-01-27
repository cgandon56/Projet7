import { useState } from 'react';
import Vector from "../../images/VectorCollapse.svg" ;



function Collapse(props) {
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  return (
    <>
    <div className="section_Collapse">
      <div className = "collapse_Text">{props.title} 
      </div>
      <div onClick={handleMoreClick} className ={`button_Collapse ${showMore}`} >
        < img className = "collapse_Icon" src={Vector} alt ="Vector" ></img>
      </div>
    </div>
      <div className = "collapse_Content">
      {showMore&& <p className="collapse_Open" >{props.description}</p>}
      </div>
    </>
    
  )
}

export default Collapse ;





