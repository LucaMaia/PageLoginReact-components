import React from 'react';
import { ItemStyle } from './style';

function Item (props) {

  return(
   <ItemStyle>
       <Checkbox type={props.type} label ={props.label}/>
   </ItemStyle>
  );
}

function Checkbox(props) {
    let type = props.type || "";
    let label = props.label || "";

    return(
    <div class="align-items-center br-item" data-toggle="selection" >
        <div class={` ${type == "radio" ? "br-radio" : "br-checkbox" }`} >
            <input id="check-01" name="check-01" type="checkbox" />
            <label for="check-01">{props.label}</label>
        </div>
    </div>
    );
}


export default Item;