import React from 'react';
import { MessageStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const Times = <FontAwesomeIcon icon={faTimes } />

function Message (props) {
    let type = props.type || "full";
    let ico = props.ico;
    let tipoMensagem = props.tipoMensagem || "";
    let titulo = props.titulo ;
    let p = props.p ;

  return(

    <MessageStyle>  
        <MessagePadrao 
                type={type}
                ico={props.ico}
                tipoMensagem = {props.tipoMensagem}
                titulo={props.titulo}
                p={props.p}
                />
    </MessageStyle>
  );
}

function MessagePadrao(props) {
    let type = props.type;

    return(
<div className={` ${type == "full" ? "br-message" : "feedback"} ${props.tipoMensagem || ''} ` } role="alert">

    <div className="icon">
        {props.ico} 
        {type == "full" ? "" : props.p}
    </div>

    {type != "full" ? "" : 
        <>
            <div className="content"><strong>{props.titulo}</strong>
                <p>{props.p}</p>
            </div>

            <div className="close">
                <button className="br-button circle small" type="button" aria-label="Fechar">
                    {Times}
                </button>
            </div>
        </>}

</div>
      );
}

export default Message;