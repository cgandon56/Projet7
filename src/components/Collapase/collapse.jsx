import { Accordion } from 'react-bootstrap-accordion'
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';




function Collapse() {
  const [items, setItems] = useState([1, 2, 3, 4]);

    
  return (
    
    <div className="py-2">
        <div className="accordion" id="accordionExample">
            { items.map((item, i) => {
                return (
                  
                <div className="accordion-item" key={i}>
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={'#collapse' + i}>
                        Accordion Item { item }
                      </button>
                    </h2>
                    <div id={'collapse' + i} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the item { item } accordion body.</strong> It's slso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                </div>
               
                )
            }) }
        </div>
    </div>
  )
}
  
  export default Collapse