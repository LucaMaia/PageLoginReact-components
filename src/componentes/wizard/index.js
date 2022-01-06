import React, {useState} from 'react';
import { WizardStyle } from './style';


function Wizard (props) {

  return(

    <WizardStyle>  
        <WizardPadrao data={props.data} type={props.type} />
    </WizardStyle>
  );
}

function WizardPadrao (props) {
  const [index, setIndex] = useState(0);    
    let vertical = false;

    if(props.type == 'vertical'){
        vertical = true;
    } 
    return(
        <div class="wizard-sample-2" >
            <div className="br-wizard" collapsed="collapsed" { ...(vertical ? { "vertical": '' } : {}) } step="1"  >
                <div className="wizard-progress" >
                    {
                        props.data.map((dados, key) => { 
                            let disabled = dados.disabled || false;
                        
                            return (
                                <button className="wizard-progress-btn"  type="button"  title={dados.titulo}  
                                { ...(key == index  ? { "active": "active" } : {}) }  
                                { ...(disabled ? { "disabled": "disabled" } : {}) }
                                    onClick={(e) => setIndex(key)}
                                >
                                    <span className="info">{dados.titulo}</span>
                                </button>
                            );                    
                        })
                    }
                </div>

                <div class="wizard-form" >
                    
                        {
                            props.data.map((dados, key) => {
                                return (                           
                                    <div index={key} className={`wizard-panel `}  {...(key == index ? {active: 'active'}  : {}) }  >                
                                        <div className="wizard-panel-content" >
                                            <div className="h3">{dados.titulo}</div>
                                                <div className="text" >{dados.descricao}</div>

                                            <div className="wizard-panel-btn" style={{width:"100%",marginTop:"4%"}}>
                                                <button className="br-button wizard-btn-canc" type="button" >
                                                    Cancelar
                                                </button>
                                                <button className="br-button primary wizard-btn-next" type="button">
                                                    Avançar
                                                </button>
                                                <button className="br-button secondary wizard-btn-prev" type="button">
                                                    Voltar
                                                </button>
                                            </div>
                                        </div>             
                                    </div>
                                );  
                            })
                        }     
                 </div>     
            </div>
        </div>     
    );
  }

export default Wizard;