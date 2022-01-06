import React from 'react';
import { BreadcrumbStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ChevronRightImg = <FontAwesomeIcon icon={faChevronRight} />


function Breadcrumb (props) {
    return (
        <BreadcrumbStyle>
            <div className="br-breadcrumb pt-3">
                <ul className="crumb-list">

                    {
                        props.data.map((dados, key) => {
                            return (
                                <BreadcrumbItem {...dados} index={key} key={key} />
                            )
                        })
                    }    

                </ul>
            </div>
        </BreadcrumbStyle>
    );
}

function BreadcrumbItem (props) {
    const title = props.active && props.active === true ?  <span>{props.titulo}</span> :  <a href={props.link && props.link  || '#'}> {props.titulo} </a>;
    const active = props.active && props.active || false;
    
    return (
        <li className={`crumb ${props.ico ? "home" : ""}`}    { ...(active ? { "data-active": 'active' } : {}) } >
            { props.index === 0 ? '' : <i className="icon fas">{ ChevronRightImg }</i> }

            { 
                props.ico ? 
                    <div className="br-button circle">
                        {
                            props.link ?
                                <a href={props.link}>
                                    <span className="sr-only">{props.titulo}</span>
                                    <i className="icon fa">
                                        { props.ico }
                                    </i>
                                </a>
                            :                               
                                <i className="icon fa">
                                    <span className="sr-only">{props.titulo}</span>
                                    { props.ico }
                                </i>
                        }
                       
                    </div>
                :                
                    title
            }
        </li>
    )
}


export default Breadcrumb;