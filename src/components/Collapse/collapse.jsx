import { useState } from 'react';
import Vector from "../../images/VectorCollapse.svg" ;



function Collapse(props) {
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  return (
    <>
    <div onClick={handleMoreClick} className ="button_Collapse" >
      <p className="collapse_Text" >{props.title}</p>
       
    < img className = "collapse_Icon" src={Vector} alt ="Vector" ></img>
      
    </div>
      <div className = "collapse_Content">
      {showMore&& <p className="collapse_Open" >{props.description}</p>}
      </div>
      </>
  )
}

export default Collapse ;





/*
function Collapse(props) { // props pour récupérer les titres et descriptions
  return (
    <Accordion>
      <Accordion.Item    eventKey="0">
        <Accordion.Header  >{props.title}</Accordion.Header>
        <Accordion.Body>
        {props.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
  
  export default Collapse*/