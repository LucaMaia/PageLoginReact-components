import React from 'react';
import { TagStyle } from './style';


function Tag (props) {
    let ico = props.ico  ;
    let label = props.label || "";
    let tag = props.tag || "";


  return(

    <TagStyle>  
        <TagPadrao ico = {props.ico} label = {props.label}/>
    </TagStyle>
  );
}



function TagPadrao (props) {

    return(
        <div class={`br-tag ${props.tag || ''} `}>
        <input id="tag-select" type="radio" aria-label="selecionar tag" name="vehicle" value="car"/>
        <label for="tag">
                <i class="fas fa-car" aria-hidden="true">
                    {props.ico}
                </i>
                <span>{props.label}</span>
        </label>
      </div>
    );
  }

  export default Tag