import React from 'react'
import { LoadingStyle } from './style'

function Loading (props) {  
    let carga = props.carga || "";
    let porcentagem = props.porcentagem || "";

    return(
      <LoadingStyle>
          <ComPorcentagem porcentagem={props.porcentagem}/>
          <Intermediario carga={props.carga}/>
      </LoadingStyle>
    );
  }


  function ComPorcentagem (props) {    

    return(
        <div class="br-loading" data-progress={props.porcentagem}>
        <div class="br-loading-mask full">
          <div class="br-loading-fill"></div>
        </div>
        <div class="br-loading-mask">
          <div class="br-loading-fill"></div>
        </div>
        
      </div>



    );
  }

  function Intermediario (props) {    
      console.log(props.carga)

    return(
        <div>
            <div class={`loading  ${props.carga || ''}`}></div>
        </div>
    );
  }

  export default Loading;