import styled from 'styled-components';

export const ItemStyle = styled.div`

.br-item {
    --interactive-rgb: var(--rgb-secondary-08);
    --item-background: var(--bg-color);
    --item-color: var(--text-color);
    --item-font-weight: var(--font-weight);
    --item-padding-x: var(--spacing-scale-2x);
    --item-padding-y: var(--spacing-scale-base);
    --item-padding: var(--item-padding-y) var(--item-padding-x);
    background: var(--item-background);
    border: 0;
    color: var(--item-color);
    display: block;
    font-weight: var(--item-font-weight);
    padding: var(--item-padding);
    text-align: left;
    width: 100%;
  }
  .br-item .row {
    margin-left: calc(-1 * var(--spacing-scale-base));
    margin-right: calc(-1 * var(--spacing-scale-base));
  }
  .br-item .row .col,
  .br-item .row [class*=col-] {
    padding-left: var(--spacing-scale-base);
    padding-right: var(--spacing-scale-base);
  }
  .br-item::after {
    clear: both;
    content: "";
    display: block;
  }
  .br-item .br-checkbox,
  .br-item .br-radio {
    margin-bottom: calc(var(--item-padding-y) * -1);
    margin-left: calc(var(--item-padding-x) * -1);
    margin-right: calc(var(--item-padding-x) * -1);
    margin-top: calc(var(--item-padding-y) * -1);
  }
  .br-item .br-checkbox input + label,
  .br-item .br-radio input + label {
    padding-bottom: var(--item-padding-y);
    padding-top: var(--item-padding-y);
    top: 1px;
  }
  .br-item .br-checkbox input + label::before,
  .br-item .br-radio input + label::before {
    left: var(--item-padding-x);
    top: calc(var(--item-padding-y) - 1px);
  }
  .br-item .br-checkbox input + label:empty,
  .br-item .br-radio input + label:empty {
    left: 0;
    top: 1px;
  }
  .br-item .br-checkbox input:hover:not(:disabled) + label::before,
  .br-item .br-radio input:hover:not(:disabled) + label::before {
    background-image: none;
  }
  .br-item .br-checkbox input + label {
    min-height: calc(var(--checkbox-size) + var(--item-padding-y) * 2);
    padding-left: calc(var(--checkbox-padding) + var(--checkbox-size) + var(--item-padding-x));
  }
  .br-item .br-checkbox input + label::after {
    left: calc(var(--item-padding-x) + 8px);
    top: calc(var(--item-padding-y) + 4px);
  }
  .br-item .br-checkbox input + label:empty {
    min-height: var(--checkbox-size);
  }
  .br-item .br-checkbox input + label:empty::after {
    left: 8px;
    top: 4px;
  }
  .br-item .br-radio input + label {
    min-height: calc(var(--radio-size) + var(--item-padding-y) * 2);
    padding-left: calc(var(--radio-padding) + var(--radio-size) + var(--item-padding-x));
  }
  .br-item .br-radio input + label::after {
    left: calc(var(--item-padding-x) + var(--radio-bullet-position));
    top: calc(var(--item-padding-y) + var(--radio-bullet-position) - 1px);
  }
  .br-item .br-radio input + label:empty {
    min-height: var(--radio-size);
  }
  .br-item .br-radio input + label:empty::after {
    left: var(--radio-bullet-position);
    top: var(--radio-bullet-position);
  }
  .br-item.primary-lighten-01 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.primary-lighten-02 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.primary-default {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.primary-darken-01 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.primary-darken-02 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.secondary-06 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.secondary-07 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.secondary-08 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.secondary-09 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.highlight {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.success {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.danger {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.info {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.support-01 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.support-03 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.support-04 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.support-07 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.support-08 {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.facebook {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.google-plus {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.linkedin {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.twitter {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.whatsapp {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.xbox {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.yahoo {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.youtube {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.selected {
    --bg-color: var(--selected);
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-item.active {
    background: var(--active);
    color: var(--color-secondary-01);
  }
  .br-item:focus {
    outline: none;
  }
  .br-item.focus-visible, .br-item:focus-visible {
    outline-color: var(--focus);
    outline-offset: var(--focus-offset);
    outline-style: var(--focus-style);
    outline-width: var(--focus-width);
  }
  .br-item .br-radio input[type]:focus:checked + label::before,
  .br-item .br-radio input[type]:focus + label::before,
  .br-item .br-checkbox input[type]:focus:checked + label::before,
  .br-item .br-checkbox input[type]:focus + label::before {
    outline: none;
  }
  .br-item .br-radio label,
  .br-item .br-checkbox label {
    width: 100%;
  }
  
  a.br-item,
  button.br-item {
    --interactive-rgb: var(--rgb-primary-default);
    --item-color: var(--interactive);
    --focus-offset: calc(var(--spacing-scale-half) * -1);
  }
  a.br-item:not(:disabled):hover,
  button.br-item:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  a.br-item:not(:disabled):active,
  button.br-item:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  
  .br-item[data-toggle] {
    --interactive-rgb: var(--rgb-primary-default);
    --focus-offset: calc(var(--spacing-scale-half) * -1);
  }
  .br-item[data-toggle] .content i {
    color: var(--interactive);
  }
  .br-item[data-toggle]:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-item[data-toggle]:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  
  .br-divider:first-child {
    border-top: none;
  }`