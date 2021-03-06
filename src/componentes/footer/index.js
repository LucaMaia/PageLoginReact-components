import React from 'react'
import { FooterStyle } from './style'

function Footer (props) {    
    let negative = props.negative || false;
  
    return(
      <FooterStyle>
        <FooterContent negative={negative} />
      </FooterStyle>
    );
  }

  function FooterContent(props) {

    let img = 'negative.png'

    if(props.negative){
        img = 'positive.png';
    }

    return(
        <footer className={`br-footer  ${props.negative ? "inverted" : "" }`} >

            <div class="container-lg">
                <div class="logo text-sm-left" inverted="inverted"><img src={"https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-"+img} alt="Imagem"/></div>
                <div class="br-list horizontal" data-toggle="data-toggle" data-unique="data-unique">
                <div class="col-2"><a class="br-item header" href="javascript:void(0)">
                    <div class="content text-down-01 text-bold text-uppercase">Categoria 1</div>
                    <div class="support"><i class="fas fa-angle-up" aria-hidden="true"></i>
                    </div></a>
                    <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item" href="javascript:void(0)">
                        <div class="content">Ad deserunt nostrud</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Duis incididunt consectetur</div></a><span class="br-divider d-md-none"></span>
                    </div>
                </div>
                
                <div class="col-2"><a class="br-item header" href="javascript:void(0)">
                    <div class="content text-down-01 text-bold text-uppercase">Categoria 2</div>
                    <div class="support"><i class="fas fa-angle-up" aria-hidden="true"></i>
                    </div></a>
                    <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item" href="javascript:void(0)">
                        <div class="content">Nulla occaecat eiusmod</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Ad deserunt nostrud</div></a><span class="br-divider d-md-none"></span>
                    </div>
                </div>

                <div class="col-2"><a class="br-item header" href="javascript:void(0)">
                    <div class="content text-down-01 text-bold text-uppercase">Categoria 3</div>
                    <div class="support"><i class="fas fa-angle-up" aria-hidden="true"></i>
                    </div></a>
                    <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item" href="javascript:void(0)">
                        <div class="content">Qui esse</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Adipisicing culpa et ad consequat</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Nulla occaecat eiusmod</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Ex qui laborum consectetur aute commodo</div></a><span class="br-divider d-md-none"></span>
                    </div>
                </div>

                <div class="col-2"><a class="br-item header" href="javascript:void(0)">
                    <div class="content text-down-01 text-bold text-uppercase">Categoria 4</div>
                    <div class="support"><i class="fas fa-angle-up" aria-hidden="true"></i>
                    </div></a>
                    <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item" href="javascript:void(0)">
                        <div class="content">Nulla occaecat eiusmod</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Nulla occaecat eiusmod</div></a><span class="br-divider d-md-none"></span>
                    </div>
                </div>

                <div class="col-2"><a class="br-item header" href="javascript:void(0)">
                    <div class="content text-down-01 text-bold text-uppercase">Categoria 5</div>
                    <div class="support"><i class="fas fa-angle-up" aria-hidden="true"></i>
                    </div></a>
                    <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item" href="javascript:void(0)">
                        <div class="content">Qui esse</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Deserunt</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Deserunt</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Nulla occaecat eiusmod</div></a><span class="br-divider d-md-none"></span>
                    </div>
                </div>

            <div class="col-2"><a class="br-item header" href="javascript:void(0)">
                 <div class="content text-down-01 text-bold text-uppercase">Categoria 6</div>
                    <div class="support"><i class="fas fa-angle-up" aria-hidden="true"></i>
                    </div></a>
                    <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item" href="javascript:void(0)">
                        <div class="content">Nulla occaecat eiusmod</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Ex qui laborum consectetur aute commodo</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Adipisicing culpa et ad consequat</div></a><a class="br-item" href="javascript:void(0)">
                        <div class="content">Est ex deserunt</div></a><span class="br-divider d-md-none"></span>
                    </div>
                </div>
            </div>

        <div class="d-none d-sm-block">
                <div class="row align-items-end justify-content-between py-5">
                    
                    <div class="col assigns" ><img class="ml-4" src={"https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-"+img} alt="Imagem"/>
                    </div>
                </div>
        </div>
        
        </div><span class="br-divider my-3"></span>
        <div class="container-lg">
            <div class="info">
            <div class="text-down-01 text-medium pb-3">Texto destinado a exibi????o de informa????es relacionadas ??&nbsp;<strong>licen??a de uso.</strong></div>
            </div>
        </div>
        </footer>
    );
 }
   

export default Footer;