import styled from 'styled-components';

export const SelectStyle = styled.div`

.br-select {
    --select-divider: 1px solid var(--color-secondary-04);
    --select-shadow: var(--surface-shadow-md);
    max-width: 400px;
    min-width: 100px;
    position: relative;
  }
  .br-select .br-list {
    background: var(--bg-color);
    box-shadow: var(--select-shadow);
    display: none;
    margin-top: -6px;
    max-height: 560px;
    overflow: auto;
    position: absolute;
    resize: none;
    width: 100%;
    z-index: 1;
  }
  .br-select .br-list::-webkit-scrollbar {
    width: 8px;
  }
  .br-select .br-list::-webkit-scrollbar-track {
    background: var(--color-secondary-03);
  }
  .br-select .br-list::-webkit-scrollbar-thumb {
    background: var(--color-secondary-06);
  }
  .br-select .br-list:focus, .br-select .br-list:active {
    color: var(--color-secondary-09);
    outline: none;
  }
  .br-select .br-list:hover::-webkit-scrollbar-thumb {
    background: var(--color-secondary-07);
  }
  .br-select .br-list[expanded] {
    display: block;
  }
  .br-select .br-item {
    --item-padding-y: var(--spacing-scale-2x);
  }
  .br-select .br-item .content {
    padding: 0;
  }
  .br-select .br-item .br-checkbox,
  .br-select .br-item .br-radio {
    --item-padding-x: var(--spacing-scale-2x);
    --item-padding-y: var(--spacing-scale-2x);
  }
  .br-select .br-item .br-checkbox input:hover:not(:disabled) + label::before,
  .br-select .br-item .br-radio input:hover:not(:disabled) + label::before {
    background-image: none;
  }
  .br-select .br-item .br-radio input + label {
    color: var(--text-color);
    display: block;
    height: auto;
    min-height: 0;
    padding: var(--item-padding);
  }
  .br-select .br-item .br-radio input + label::before, .br-select .br-item .br-radio input + label::after {
    content: none;
  }
  .br-select .br-item:not(:last-child) {
    border-bottom: var(--select-divider);
  }
  .br-select .br-item:not([disabled]) {
    --interactive-rgb: var(--rgb-secondary-09);
    --focus-offset: calc(var(--spacing-scale-half) * -1);
  }
  .br-select .br-item:not([disabled]):focus {
    outline: none;
  }
  .br-select .br-item:not([disabled]).focus-visible, .br-select .br-item:not([disabled]):focus-visible {
    outline-color: var(--focus);
    outline-offset: var(--focus-offset);
    outline-style: var(--focus-style);
    outline-width: var(--focus-width);
  }
  .br-select .br-item:not([disabled]):not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-select .br-item:not([disabled]):not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  .br-select .br-item.selected, .br-select .br-item[selected] {
    --interactive-rgb: var(--rgb-secondary-01);
  }
  .br-select .br-item.selected:focus, .br-select .br-item[selected]:focus {
    outline: none;
  }
  .br-select .br-item.selected.focus-visible, .br-select .br-item.selected:focus-visible, .br-select .br-item[selected].focus-visible, .br-select .br-item[selected]:focus-visible {
    outline-color: var(--focus);
    outline-offset: var(--focus-offset);
    outline-style: var(--focus-style);
    outline-width: var(--focus-width);
  }
  .br-select .br-item.selected:not(:disabled):hover, .br-select .br-item[selected]:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-select .br-item.selected:not(:disabled):active, .br-select .br-item[selected]:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  .br-select .br-item.disabled {
    line-height: calc(var(--font-line-height-high) * 2);
    padding-left: calc(var(--item-padding) + var(--spacing-scale-base));
  }
  .br-select .br-item.highlighted:not(.selected):not([selected]), .br-select .br-item[highlighted]:not(.selected):not([selected]) {
    background: rgba(var(--rgb-support-03), 0.16);
  }
  .br-select .br-item.highlighted:not(.selected):not([selected]) .br-checkbox label,
  .br-select .br-item.highlighted:not(.selected):not([selected]) .br-radio label, .br-select .br-item[highlighted]:not(.selected):not([selected]) .br-checkbox label,
  .br-select .br-item[highlighted]:not(.selected):not([selected]) .br-radio label {
    color: var(--color-support-03);
  }
  .br-select .br-item.highlighted:not(.selected):not([selected]) .br-checkbox:hover,
  .br-select .br-item.highlighted:not(.selected):not([selected]) .br-radio:hover, .br-select .br-item[highlighted]:not(.selected):not([selected]) .br-checkbox:hover,
  .br-select .br-item[highlighted]:not(.selected):not([selected]) .br-radio:hover {
    background: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-select .br-item.highlighted:not(.selected):not([selected]) .br-checkbox:hover label,
  .br-select .br-item.highlighted:not(.selected):not([selected]) .br-radio:hover label, .br-select .br-item[highlighted]:not(.selected):not([selected]) .br-checkbox:hover label,
  .br-select .br-item[highlighted]:not(.selected):not([selected]) .br-radio:hover label {
    color: var(--text-color);
  }` 