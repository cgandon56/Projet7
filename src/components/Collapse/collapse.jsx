import Accordion from 'react-bootstrap/Accordion';


function Collapse(props) {
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