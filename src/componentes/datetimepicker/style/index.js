import styled from 'styled-components';

export const DateTimePickerStyle = styled.div`
    .flatpickr-calendar {
        --datetimepicker-padding: var(--spacing-scale-2x);
        --datetimepicker-shadow: var(--surface-shadow-sm);
        --datetimepicker-months-font-weight: var(--font-weight-semi-bold);
        --datetimepicker-weekday-font-weight: var(--font-weight-medium);
        --datetimepicker-day-font-weight: var(--font-weight-semi-bold);
        --datetimepicker-day-size: 24px;
        --datetimepicker-arrows: 32px;
        box-shadow: var(--datetimepicker-shadow);
    }

    .flatpickr-calendar.arrowTop::before, .flatpickr-calendar.arrowTop::after {
        border-color: transparent;
    }

    .flatpickr-calendar .flatpickr-months {
        align-items: center;
        display: flex;
        padding: var(--datetimepicker-padding) var(--datetimepicker-padding) 0;
    }

    .flatpickr-calendar .flatpickr-months .flatpickr-prev-month,
    .flatpickr-calendar .flatpickr-months .flatpickr-next-month {
        height: auto;
        padding: 0;
        position: static;
    }

    .flatpickr-calendar .flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
    .flatpickr-calendar .flatpickr-months .flatpickr-next-month.flatpickr-disabled {
        cursor: not-allowed;
        opacity: var(--disabled);
        display: block;
    }

    .flatpickr-calendar .flatpickr-months .flatpickr-prev-month.flatpickr-disabled *,
    .flatpickr-calendar .flatpickr-months .flatpickr-next-month.flatpickr-disabled * {
        pointer-events: none;
    }

    .flatpickr-calendar .flatpickr-months .flatpickr-month {
        flex: 1;
        height: auto;
        overflow: visible;
    }

    .flatpickr-calendar .flatpickr-months .flatpickr-current-month {
        display: flex;
        height: auto;
        padding: 0 var(--datetimepicker-padding);
        position: static;
        width: 100%;
    }

    .flatpickr-calendar .flatpickr-months .flatpickr-monthDropdown-months {
        border-radius: var(--surface-rounder-sm);
        color: var(--interactive);
        font-size: var(--font-size-scale-up-01);
        font-weight: var(--datetimepicker-months-font-weight);
        margin: 0;
        padding: 0;
    }

    .flatpickr-calendar .flatpickr-months .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
        color: var(--color-secondary-08);
    }

    .flatpickr-calendar .flatpickr-months .flatpickr-monthDropdown-months:hover {
        background: transparent;
    }
    
    .flatpickr-calendar .flatpickr-months .numInputWrapper {
        flex: 1;
        margin-left: var(--datetimepicker-padding);
        width: auto;
    }

    .flatpickr-calendar .flatpickr-months .numInputWrapper input.cur-year {
        border: var(--surface-width-sm) solid var(--color-secondary-06);
        border-radius: var(--surface-rounder-sm);
        color: var(--text-color);
        font-size: var(--font-size-scale-up-01);
        font-weight: var(--datetimepicker-months-font-weight);
        padding: 0 var(--spacing-scale-base);
    }

    .flatpickr-calendar .flatpickr-months .numInputWrapper span.arrowUp,
    .flatpickr-calendar .flatpickr-months .numInputWrapper span.arrowDown {
        display: none;
    }

    .flatpickr-calendar .flatpickr-weekdaycontainer {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        padding: 0 var(--datetimepicker-padding);
    }

    .flatpickr-calendar span.flatpickr-weekday {
        color: var(--text-color);
        font-size: var(--font-size);
        font-weight: var(--datetimepicker-weekday-font-weight);
    }

    .flatpickr-calendar .dayContainer {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        padding: 0 var(--datetimepicker-padding) var(--datetimepicker-padding);
    }

    .flatpickr-calendar .flatpickr-day {
        color: var(--interactive);
        font-weight: var(--datetimepicker-day-font-weight);
        height: var(--datetimepicker-day-size);
        line-height: var(--font-line-height-medium);
        margin: calc(var(--datetimepicker-padding) * 0.25) auto;
        max-width: var(--datetimepicker-day-size);
        width: var(--datetimepicker-day-size);
    }

    .flatpickr-calendar .flatpickr-day:hover {
        background: var(--hover-effect);
    }

    .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {
        font-weight: var(--font-weight-medium);
        opacity: 0.6;
    }

    .flatpickr-calendar .flatpickr-day.today {
        background: var(--color-support-11);
        border-color: transparent;
        color: var(--color-support-03);
    }

    .flatpickr-calendar .flatpickr-day.flatpickr-disabled {
        cursor: not-allowed;
        opacity: var(--disabled);
        color: var(--text-color);
    }

    .flatpickr-calendar .flatpickr-day.flatpickr-disabled * {
        pointer-events: none;
    }

    .flatpickr-calendar .flatpickr-day.flatpickr-disabled:hover {
        background: transparent;
    }

    .flatpickr-calendar .flatpickr-day.inRange {
        background: rgba(var(--rgb-primary-lighten-01), 0.5);
        border-color: transparent;
        box-shadow: none;
        color: var(--color-secondary-01);
        opacity: 1;
    }
    
    .flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange {
        background: var(--selected);
        border-color: transparent;
        color: var(--color-secondary-01);
        opacity: 1;
    }

    .flatpickr-calendar .flatpickr-time {
        display: flex;
        justify-content: center;
        margin: 0 var(--datetimepicker-padding);
        max-height: none;
    }

    .flatpickr-calendar .flatpickr-time input {
        background: var(--bg-color);
        border: 1px solid #888;
        border-radius: var(--surface-rounder-sm);
        color: var(--color-secondary-08);
        display: block;
        font-size: var(--font-size-scale-up-01);
        font-weight: var(--font-weight-medium);
        height: var(--input-size);
        padding-left: var(--spacing-scale-2x);
        padding-right: var(--spacing-scale-2x);
        width: 100%;
        margin: calc(var(--datetimepicker-padding) * 0.25) 0;
    }

    .flatpickr-calendar .flatpickr-time input::placeholder {
        color: var(--text-color);
        font-size: var(--font-size-scale-base);
        font-style: italic;
        font-weight: var(--font-weight-regular);
        opacity: 0.75;
    }

    .flatpickr-calendar .flatpickr-time input:not(:disabled):not(:disabled):hover {
        background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
    }

    .flatpickr-calendar .flatpickr-time input:not(:disabled):not(:disabled):active {
        background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
    }

    .flatpickr-calendar .flatpickr-time input:not(:disabled):focus {
        outline: none;
    }

    .flatpickr-calendar .flatpickr-time input:not(:disabled).focus-visible, .flatpickr-calendar .flatpickr-time input:not(:disabled):focus-visible {
        outline-color: var(--focus-color);
        outline-offset: var(--focus-offset);
        outline-style: var(--focus-style);
        outline-width: var(--focus-width);
    }

    .flatpickr-calendar .flatpickr-time input:not(:disabled):focus, .flatpickr-calendar .flatpickr-time input:not(:disabled):focus-visible, .flatpickr-calendar .flatpickr-time input:not(:disabled).focus-visible {
        border-color: var(--focus-color);
        box-shadow: 0 0 0 var(--surface-width-md) var(--focus-color);
        outline: none;
    }

    .flatpickr-calendar .flatpickr-time input:not(:disabled):hover {
        --interactive-rgb: var(--rgb-secondary-08);
        --hover: var(--surface-opacity-xs, 0.3);
    }

    .flatpickr-calendar .flatpickr-time input.has-icon {
        padding-right: var(--spacing-scale-5x);
    }

    .flatpickr-calendar .flatpickr-time input[type=password]::-ms-reveal, .flatpickr-calendar .flatpickr-time input[type=password]::-ms-clear {
        display: none;
    }

    .flatpickr-calendar .flatpickr-time .numInputWrapper {
        align-items: center;
        display: flex;
        flex: 0 1 90px;
        flex-flow: column;
        height: auto;
        padding: calc(var(--datetimepicker-padding) * 0.5) var(--datetimepicker-padding);
    }

    .flatpickr-calendar .flatpickr-time .numInputWrapper:hover {
        background: transparent;
    }

    .flatpickr-calendar .flatpickr-time .numInputWrapper span {
        align-items: center;
        border: 0;
        border-radius: 50px;
        display: flex;
        height: var(--datetimepicker-arrows);
        justify-content: center;
        opacity: 1;
        padding: 0;
        position: static;
        width: var(--datetimepicker-arrows);
    }

    .flatpickr-calendar .flatpickr-time .numInputWrapper span:not(:disabled):hover {
        background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
    }

    .flatpickr-calendar .flatpickr-time .numInputWrapper span:not(:disabled):active {
        background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
    }

    .flatpickr-calendar .flatpickr-time .numInputWrapper span::after {
        border: solid var(--interactive);
        border-width: 0 2px 2px 0;
        content: "";
        height: 8px;
        left: auto;
        position: static;
        top: auto;
        transform: rotate(45deg) translate(-1px, -1px);
        width: 8px;
    }

    .flatpickr-calendar .flatpickr-time .numInputWrapper span.arrowUp {
        order: -1;
    }

    .flatpickr-calendar .flatpickr-time .numInputWrapper span.arrowUp::after {
        transform: rotate(225deg) translate(-1px, -1px);
    }

    .flatpickr-calendar.hasTime .flatpickr-time {
        border-color: var(--color-secondary-04);
        height: auto;
    }

    .flatpickr-calendar.hasTime.noCalendar .flatpickr-time {
        border-color: transparent;
    }

`;