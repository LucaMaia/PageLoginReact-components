import React, {useState} from 'react';
import AccordionStyle from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


const AngleDown = <FontAwesomeIcon icon={faAngleDown} />
const AngleUp   = <FontAwesomeIcon icon={faAngleUp} />


function Accordion(props) {    
    const negative = props.negative ? 'negative=""' : '';
    
    return (
        <AccordionStyle>
           
            <div className="br-accordion"                  
                  { ...(negative ? {negative: 'negative=""'} : {}) } 
            >
                {
                    props.data.map((dados, key) => {
                        return (
                            <AccordionItem {...dados} key={key} />
                        )
                    })
                }        
            </div>
        </AccordionStyle>            
    );
}

function AccordionItem (props) {
    const [open, setOpen] = useState(false); 

    return (
        <AccordionStyle>
            <div className={`item ${open && 'active' || ''}`}>
                <button className="header" type="button" aria-controls="id5" aria-expanded={open} onClick={(e) => setOpen(!open)}>
                    <span className="icon">
                        <i className="fas" aria-hidden="true">
                            { open && AngleUp || AngleDown }
                        </i>
                    </span>
                    <span className="title">{props.titulo}</span>
                </button>

                <div className="content" id="id5" aria-hidden="false" style={{display: open && 'block' || 'none' }}>
                    {props.descricao}
                </div>              
            </div>
              
        </AccordionStyle>                  
    );
}
  
export default Accordion;