//import React from 'react';
import Caroussel from '../components/Caroussel/caroussel';
//import {data} from '../datas/data' ;
import React, { useState } from 'react';
import { Collapse } from 'bootstrap';

function Logement(){
    const [mounted, setMounted] = useState(true);

    return (
      <div className="container py-4">
          <h3>Bootstrap 5 Accordion with React</h3>
          {mounted &&
              <div>
                  <Collapse/>
              </div>
          }
      </div>
    )
    
  }
export default Logement;





