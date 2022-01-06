import React from 'react';
import { NotificationStyle } from './style';

function Notification (props) {

  return(

    <NotificationStyle>  
       <NotificationPadrão/>
    </NotificationStyle>
  );
}

function NotificationPadrão (props) {

    return(
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
                  <button type="button" data-panel="notification-panel-1-3633"><span class="name"><span class="d-flex flex-column flex-sm-row"><span class="icon mb-1 mb-sm-0 mr-sm-1"><i class="fas fa-image" aria-hidden="true"></i></span><span class="name">Item</span></span></span></button>
                </li>
                <li class="tab-item active">
                  <button type="button" data-panel="notification-panel-2-3633"><span class="name"><span class="d-flex flex-column flex-sm-row"><span class="icon mb-1 mb-sm-0 mr-sm-1"><i class="fas fa-image" aria-hidden="true"></i></span><span class="name">Item</span></span></span></button>
                </li>
              </ul>
            </nav>
            <div class="tab-content">
              <div class="tab-panel" id="notification-panel-1-3633">
                <div class="br-list">
                  <button class="br-item" type="button"><i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                  </button><span class="br-divider"></span>
                  <button class="br-item" type="button"><i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                  </button><span class="br-divider"></span>
                  <button class="br-item" type="button"><i class="fas fa-heartbeat" aria-hidden="true"></i>Link de Acesso
                  </button>
                </div>
              </div>
              <div class="tab-panel active" id="notification-panel-2-3633">
                <div class="br-list">
                  <button class="br-item" type="button"><span class="br-tag status small warning"></span><span class="text-bold">Título</span><span class="text-medium mb-2">25 de out</span><span>Nostrud consequat culpa ex mollit aute. Ex ex veniam ea labore laboris duis duis elit. Ex aute dolor enim aute Lorem dolor. Duis labore ad anim culpa. Non aliqua excepteur sunt eiusmod ex consectetur ex esse laborum velit ut aute.</span>
                  </button><span class="br-divider"></span>
                  <button class="br-item" type="button"><span class="text-bold">Título</span><span class="text-medium mb-2">24 de out</span><span>Labore nulla elit laborum nulla duis. Deserunt ad nulla commodo occaecat nulla proident ea proident aliquip dolore sunt nulla. Do sit eu consectetur quis culpa. Eiusmod minim irure sint nulla incididunt occaecat ipsum mollit in ut. Minim adipisicing veniam adipisicing velit nostrud duis consectetur aute nulla deserunt culpa aliquip.</span>
                  </button><span class="br-divider"></span>
                  <button class="br-item" type="button"><span class="br-tag status small warning"></span><span class="text-bold">Título</span><span class="text-medium mb-2">03 de out</span><span>Duis qui dolor dolor qui sint consectetur. Ipsum eu dolore ex anim reprehenderit laborum commodo. Labore do ut nulla eiusmod consectetur.</span>
                  </button><span class="br-divider"></span>
                  <button class="br-item" type="button"><span class="text-bold">Título</span><span class="text-medium mb-2">16 de mai</span><span>Sunt velit dolor enim mollit incididunt irure est. Ad ea Lorem culpa quis occaecat sunt in exercitation nisi. Sit laborum laborum dolor culpa ipsum velit. Non nulla nisi dolore et anim consequat officia deserunt amet qui. Incididunt exercitation irure labore ut Lorem culpa. Dolore ea irure pariatur ullamco culpa veniam amet dolor in fugiat pariatur ut. Sit non ut enim et incididunt tempor irure pariatur ex proident labore cillum dolore nisi.</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      );
}

export default Notification;