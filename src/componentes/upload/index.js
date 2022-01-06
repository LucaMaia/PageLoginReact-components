import React from 'react';
import { UploadStyle } from './style';


function Upload (props) {

  return(

    <UploadStyle>  
        <UploadPadrao/>
    </UploadStyle>
  );
}

function UploadPadrao (props) {

    return(
<div class="br-upload">
  <label class="upload-label" for="single-file"><span>Envio de arquivo</span></label>
  <input class="upload-input" id="single-file" type="file"/>
  <div class="upload-list"></div>
</div>
     
    );
  }

  export default Upload;