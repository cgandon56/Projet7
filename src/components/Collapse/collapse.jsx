import Accordion from 'react-bootstrap/Accordion'; // récupération accordéo de react-bootstrap


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
  
  export default Collapse