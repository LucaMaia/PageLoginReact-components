import React from 'react';
import { PaginationStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'

const AngleRight = <FontAwesomeIcon icon={faAngleRight } />
const AngleLeft = <FontAwesomeIcon icon={faAngleLeft } />

function Pagination (props) {
    let densi = props.densi || "";

  return(

    <PaginationStyle>  
        <PaginationPadrao densi={props.densi}/>
    </PaginationStyle>
  );
}

function PaginationPadrao(props) {

    return(
        <nav className={`br-pagination ${props.densi || ''} `}  aria-label="Paginação de resultados" data-total="4" data-current="1">
        <ul>
          <li>
            <button class="br-button circle" type="button" data-previous-page="data-previous-page" aria-label="Página anterior">
                <i class="fas fa-angle-left" aria-hidden="true">{AngleLeft}</i>
            </button>
          </li>
          <li><a class="page active" href="javascript:void(0)">1</a></li>
          <li><a class="page" href="javascript:void(0)">2</a></li>
          <li><a class="page" href="javascript:void(0)">3</a></li>
          <li><a class="page" href="javascript:void(0)">4</a></li>
          <li>
            <button class="br-button circle" type="button" data-next-page="data-next-page" aria-label="Página seguinte">
                <i class="fas fa-angle-right" aria-hidden="true">{AngleRight}</i>
            </button>
          </li>
        </ul>
      </nav>
      );
}

export default Pagination;