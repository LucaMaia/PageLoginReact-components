import React from 'react'
import { HeaderStyle } from './style'
import Divider from '../divider';
import download from "../../assets/img/download.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHospital, faSignInAlt, faEnvelopeOpenText, faGlobeAmericas, faFileWord, faBriefcase, faSearch} from '@fortawesome/free-solid-svg-icons'


const Bars = <FontAwesomeIcon icon={faBars} />
const Hospital = <FontAwesomeIcon icon={faHospital} />
const SignIn = <FontAwesomeIcon icon={faSignInAlt } />
const Envelope = <FontAwesomeIcon icon={faEnvelopeOpenText } />
const Globo = <FontAwesomeIcon icon={faGlobeAmericas } />
const FileWord = <FontAwesomeIcon icon={faFileWord } />
const BriefCase = <FontAwesomeIcon icon={faBriefcase } />
const Search = <FontAwesomeIcon icon={faSearch } />


function Header (props) {    
    let type = props.type || "";
    let sistema = props.sistema ;
    console.log(type,"kk")

    return(
      <HeaderStyle>
        <HeaderPadrao type={type} sistema={sistema}/>
      </HeaderStyle>
    );
  }

  

  function HeaderPadrao(props) {

    return(
<header className={`br-header ${props.type}` }>
  <div className="container-lg" >
    <div className="header-top" >
      <div className="header-logo" >
      <img src={download}/>
        <Divider direcao="vertical" />
        <div className="header-sign">Assinatura</div>
      </div>

 <div class="header-actions">
        <div className="header-links dropdown">
          <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido"><i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>

          <div className="br-list">
            <div className="header">
              <div className="title">Acesso Rápido</div>
            </div><a className="br-item" href="javascript:void(0)">Órgãos do Governo</a><a class="br-item" href="javascript:void(0)">Acesso á Informação</a><a class="br-item" href="javascript:void(0)">Legislação</a><a class="br-item" href="javascript:void(0)">Acessibilidade</a>
          </div>
        </div><Divider direcao="vertical"/>

        <div className="header-functions dropdown">
          <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema">
          </button>

          <div className="br-list">
            <div className="header">
              <div className="title">Funcionalidades do Sistema</div>
            </div>

            <div className="align-items-center br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 1">
                  <i className="fas fa-chart-bar" aria-hidden="true">
                      {Globo}
                  </i>
                      <span className="text">Funcionalidade 1</span>
              </button>
            </div>

            <div className="align-items-center br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 2">
                  <i className="fas fa-headset" aria-hidden="true">
                        {FileWord}
                  </i>
                  <span className="text">Funcionalidade 2</span>
              </button>
            </div>

            <div className="align-items-center br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 3">
                  <i className="fas fa-comment" aria-hidden="true">
                      {BriefCase}
                  </i>
                  <span class="text">Funcionalidade 3</span>
              </button>
            </div>

            <div className="align-items-center br-item">
              <button className="br-button circle small" type="button" aria-label="Funcionalidade 4">
                  <i className="fas fa-adjust" aria-hidden="true">
                      {Envelope}
                  </i>
                  <span className="text">Funcionalidade 4</span>
              </button>
            </div>
          </div>
        </div>

        <div className="header-login">
          <div class="header-sign-in">
            <button class="br-button sign-in small" type="button" data-trigger="login">
                <i class="fas" aria-hidden="true">
                        {SignIn}
                </i>
                <span class="d-sm-inline">Entrar</span>
            </button>
          </div>

          <div class="header-avatar d-none">
            <div class="avatar dropdown"><span class="br-avatar" title="Fulana da Silva"><span class="image"><img src="https://picsum.photos/id/823/400" alt="Avatar"/></span></span>
              <button class="br-button circle small" type="button" aria-label="Abrir Menu de usuário" data-toggle="dropdown">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
              </button>

              <div class="br-notification">
                <div class="notification-header">
                  <div class="row">
                    <div class="col-10"><span class="text-bold">Fulano da Silva</span><br/><small>nome.sobrenome@dominio.gov</small></div>
                  </div>
                </div>

                <div class="notification-body">
                  <div class="br-tab">
                    <nav class="tab-nav">
                      <ul>
                        <li class="tab-item">
                          <button type="button" data-panel="notification-panel-1-96020">
                              <span class="name">
                                  <span class="d-flex flex-column flex-sm-row">
                                         <span class="icon mb-1 mb-sm-0 mr-sm-1">
                                            <i class="fas fa-image" aria-hidden="true"></i>
                                          </span>
                                          <span class="name">Item</span>
                                    </span>
                                </span>
                           </button>
                        </li>
                        <li class="tab-item active">
                          <button type="button" data-panel="notification-panel-2-96020"><span class="name"><span class="d-flex flex-column flex-sm-row"><span class="icon mb-1 mb-sm-0 mr-sm-1"><i class="fas fa-image" aria-hidden="true"></i></span><span class="name">Item</span></span></span></button>
                        </li>
                      </ul>
                    </nav>

                    <div class="tab-content">
                      <div class="tab-panel" id="notification-panel-1-96020">
                        <div class="br-list">
                          <button class="br-item" type="button">
                              <i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                          </button>
                            <span class="br-divider"></span>
                          <button class="br-item" type="button">
                              <i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                          </button>
                            <span class="br-divider"></span>
                          <button class="br-item" type="button">
                              <i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                          </button>
                        </div>
                      </div>

                      <div class="tab-panel active" id="notification-panel-2-96020">
                        <div class="br-list">
                          <button class="br-item" type="button"><span class="br-tag status small warning"></span><span className="text-bold">Título</span><span className="text-medium mb-2">25 de out</span><span>Nostrud consequat culpa ex mollit aute. Ex ex veniam ea labore laboris duis duis elit. Ex aute dolor enim aute Lorem dolor. Duis labore ad anim culpa. Non aliqua excepteur sunt eiusmod ex consectetur ex esse laborum velit ut aute.</span>
                          </button><span class="br-divider"></span>
                          <button className="br-item" type="button"><span className="text-bold">Título</span><span className="text-medium mb-2">24 de out</span><span>Labore nulla elit laborum nulla duis. Deserunt ad nulla commodo occaecat nulla proident ea proident aliquip dolore sunt nulla. Do sit eu consectetur quis culpa. Eiusmod minim irure sint nulla incididunt occaecat ipsum mollit in ut. Minim adipisicing veniam adipisicing velit nostrud duis consectetur aute nulla deserunt culpa aliquip.</span>
                          </button><span className="br-divider"></span>
                          <button className="br-item" type="button"><span className="br-tag status small warning"></span><span className="text-bold">Título</span><span class="text-medium mb-2">03 de out</span><span>Duis qui dolor dolor qui sint consectetur. Ipsum eu dolore ex anim reprehenderit laborum commodo. Labore do ut nulla eiusmod consectetur.</span>
                          </button><Divider direcao="vertical"/>
                          <button className="br-item" type="button"><span className="text-bold">Título</span><span className="text-medium mb-2">16 de mai</span><span>Sunt velit dolor enim mollit incididunt irure est. Ad ea Lorem culpa quis occaecat sunt in exercitation nisi. Sit laborum laborum dolor culpa ipsum velit. Non nulla nisi dolore et anim consequat officia deserunt amet qui. Incididunt exercitation irure labore ut Lorem culpa. Dolore ea irure pariatur ullamco culpa veniam amet dolor in fugiat pariatur ut. Sit non ut enim et incididunt tempor irure pariatur ex proident labore cillum dolore nisi.</span>
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="header-bottom">
        
      <div className="header-menu">
        <div className="header-menu-trigger">
          <button className="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="navigation">
                        <i className="fas" aria-hidden="true">
                            {Bars}
                        </i>
          </button>
        </div>

        <div className="header-info">
          <div className="header-title">
              {props.sistema}
          </div>
        </div>
      </div>
      
      <div className="header-search">
        <div className="br-input has-icon">
          <label for="searchbox-1145">Texto da pesquisa</label>
          <input id="searchbox-1145" type="text" placeholder="O que você procura?"/>
          <button className="br-button circle small" type="button" aria-label="Pesquisar">
                    <i className="fas" aria-hidden="true">
                            {Hospital}
                    </i>
          </button>

    </div>
        
        <button className="br-button circle search-close ml-1" type="button" aria-label="Fechar Busca" data-dismiss="search">
            <i className="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</header>
    )
}

export default Header;