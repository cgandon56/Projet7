import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from 'react';





function Collapse(props) {
  return (
    <Accordion defaultActiveKey="0">
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