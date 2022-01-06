import React, { useState } from 'react'
import { DateTimePickerStyle } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Flatpickr from 'react-flatpickr'
//import "flatpickr/dist/themes/material_green.css";

const ClockImg = <FontAwesomeIcon icon={faClock} />
const CalendarImg = <FontAwesomeIcon icon={faCalendarAlt} />

function DateTimePicker (props) {

    return (   
        <DateTimePickerStyle>

            <DateTime  {...props} />


            <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                <div className="br-datetimepicker" data-mode="single" data-type="time">
                    <div className="br-input has-icon">
                        <label for="timepicker-input">Label</label>

                        <input className="has-icon" id="timepicker-input" type="time" placeholder="hh:mm" data-input="data-input"/>
                        
                        <button className="br-button circle small" type="button" aria-label="Abrir Timepicker" data-toggle="data-toggle" id="timepicker-input-btn">
                            <i className="fas " aria-hidden="true">
                                { ClockImg }
                            </i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                <div className="br-datetimepicker" data-mode="single" data-type="text">
                    <div className="br-input has-icon">
                        <label for="simples-input">Label</label>
                        
                        <input className="has-icon" id="simples-input" type="text" placeholder="dd/mm/aaaa" data-input="data-input"/>

                        <button className="br-button circle small" type="button" aria-label="Abrir Timepicker" data-toggle="data-toggle" id="simples-input-btn">
                            <i className="fas" aria-hidden="true">
                                { CalendarImg }
                            </i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="br-datetimepicker" data-mode="single" data-type="datetime-local">
                    <div className="br-input has-icon">
                        <label for="dateandtime-input">Label</label>
                        
                        <input className="has-icon" id="dateandtime-input" type="datetime-local" placeholder="dd/mm/aaaa hh:mm" data-input="data-input"/>
                        
                        <button className="br-button circle small" type="button" aria-label="Abrir Timepicker" data-toggle="data-toggle" id="dateandtime-input-btn">
                            <i className="fas" aria-hidden="true">
                                { CalendarImg }
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </DateTimePickerStyle>
    );
}


function DateTime(props) {
    const [data, setData] = useState(props.data)

    return (

        <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="br-datetimepicker" data-mode="single" data-type="time">
                <div className="br-input has-icon">
                    <label for="timepicker-input">Label</label>
                        <Flatpickr
                                data-enable-time
                                dateFormat={"d/m/Y H:i"}
                                className="has-icon"
                                data-input="data-input"
                                placeholder="hh:mm"
                                type="time"

                                value={data}
                                onChange={date => {
                                    setData({ date });
                            }}
                        />

                        <i className="fas br-button circle small" aria-hidden="true">
                            { ClockImg }
                        </i>                    
                </div>
            </div>
        </div>
      
    )
}



export default DateTimePicker;