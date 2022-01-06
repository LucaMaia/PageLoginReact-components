import React from 'react';
import { PopOverStyle } from './style';


function PopOver (props) {


  return(

    <PopOverStyle>  
        <PopOverPadrao/>
    </PopOverStyle>
  );
}

function PopOverPadrao (props) {


    return(     
        <div class="mb-3"><a class="h5" href="javascript:void(0);">Erro</a>
        <div class="br-tooltip" role="tooltip" error="error" place="right"><span class="text" role="tooltip">Não foi possível logar!</span><span class="subtext">Verifique seus dados</span>
        </div>
      </div>
    );
  }

  export default PopOver
  
