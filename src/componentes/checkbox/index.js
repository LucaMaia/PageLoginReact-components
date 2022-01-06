import React from 'react';
import { CheckoxStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const ExclamationImg = <FontAwesomeIcon icon={faExclamationTriangle} />

function Checkbox (props) {
    const alert = props.alerta || false;
    const instructions = props.instrucoes || false;
    const checkboxes = props.data;

    return (   
        <CheckoxStyle>
            {
                instructions ?
                    <CheckboxInstructions {...instructions} />
                :
                    ""
            }
            {               
                checkboxes.map((dados, key) => {                  
                    return (
                        <CreateCheckbox {...dados} key={key} />
                    );
                })               
            }
            {
                alert ? 
                    <CheckboxAlert {...props} />
                :
                 ""
            }
        </CheckoxStyle>
    );
}

function CreateCheckbox (props) {
   const inline = props.inline || false;
      
    return (   
        <>           
            {
                inline ?
                    <div className="d-inline-block mr-5">
                        <CheckboxButton {...props} />
                    </div>
                :
                    <CheckboxButton {...props} />            
            }           
        </>
    );
}

function CheckboxButton (props) {
    const disabled = props.disabled || false;
    const invalid  = props.invalido || false;
    const valid    = props.valido   || false;
    const checked  = props.checked  || false;
    const value    = props.valor    || false;
    const text     = props.label    || false;
    const id       = props.id;
    
    
    return (
        <div className={`br-checkbox 
                         ${ disabled ? "disabled" : "" } 
                         ${ invalid ? "invalid" : "" } 
                         ${ valid ? "valid" : "" } 
         `} >
            <input id={id} type="checkbox" {...( checked ? { checked: "checked" } : "" )} value={value} />
            <label for={id}>{ text }</label>
        </div>
    );
}

function CheckboxInstructions (props) {
    const title = props.titulo;
    const descripton = props.descricao;

    return (
        <div>
            <p className="label mb-0">
                { title }
            </p>
    
            <p className="help-text">
                { descripton }
            </p>
        </div>
    );
}

function CheckboxAlert(props) {
    const mensagemAlerta = props.alerta || false;

    return (
        <div className="mt-1">
            <span className="feedback warning" role="alert">
                <i className="fas" aria-hidden="true">
                    { ExclamationImg }
                </i>
                { mensagemAlerta }
            </span>
        </div>
    );
}

export default Checkbox;