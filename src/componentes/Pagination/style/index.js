import styled from 'styled-components';

export const PaginationStyle = styled.div`

.br-pagination {
    --pagination-background: var(--bg-color);
    --pagination-margin: var(--spacing-scale-base);
    --pagination-select-width: 88px;
    --pagination-size: var(--pagination-medium);
    --pagination-small: 24px;
    --pagination-medium: 32px;
    --pagination-large: 40px;
    --pagination-z-index: var(--z-index-layer-0);
    color: var(--text-color);
    display: flex;
    flex-wrap: wrap;
    font-weight: var(--font-weight);
    justify-content: center;
    z-index: var(--pagination-z-index);
  }
  .br-pagination ul {
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .br-pagination li {
    padding: 0;
  }
  .br-pagination .br-select .br-input .br-button {
    bottom: auto;
    margin-top: 0;
    position: absolute;
    right: var(--spacing-scale-half);
    top: auto;
    transform: none;
  }
  .br-pagination .br-divider {
    border-right-width: var(--divider-size);
    border-top: 0;
  }
  .br-pagination .page {
    align-items: center;
    border: 1px solid transparent;
    border-radius: 100em;
    color: var(--interactive);
    display: inline-flex;
    font-weight: var(--font-weight);
    justify-content: center;
    margin: 0 calc(var(--pagination-margin) * 0.5);
    min-height: var(--pagination-size);
    min-width: var(--pagination-size);
    padding: 0 var(--spacing-scale-base);
    white-space: nowrap;
  }
  .br-pagination .page:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-pagination .page:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  .br-pagination .page.active {
    --font-weight: var(--font-weight-bold);
    --hover: var(--surface-opacity-sm, 0.3);
    --interactive-rgb: var(--rgb-secondary-01);
    background: var(--active);
    color: var(--pagination-background);
  }
  .br-pagination [data-previous-page],
  .br-pagination [data-next-page] {
    margin: 0 calc(var(--pagination-margin) * 0.5);
  }
  .br-pagination.inverted .page.active {
    --interactive-rgb: var(--rgb-primary-darken-01);
  }
  .br-pagination.small {
    --pagination-size: var(--pagination-small);
  }
  .br-pagination.medium {
    --pagination-size: var(--pagination-medium);
  }
  .br-pagination.large {
    --pagination-size: var(--pagination-large);
  }
  .br-pagination .pagination-ellipsis {
    margin: 0 calc(var(--pagination-margin) * 0.5);
    position: relative;
  }
  .br-pagination .pagination-ellipsis .br-button {
    --button-size: var(--pagination-size);
  }
  .br-pagination .pagination-ellipsis .br-list {
    background: var(--pagination-background);
    max-height: 150px;
    min-width: 4em;
    overflow-y: auto;
    z-index: var(--z-index-layer-0);
  }
  .br-pagination .pagination-ellipsis .br-list:not([hidden]) {
    display: block;
  }
  .br-pagination .pagination-arrows {
    align-items: center;
    display: flex;
  }
  .br-pagination .pagination-go-to-page {
    align-items: center;
    display: flex;
  }
  .br-pagination .pagination-go-to-page .br-input {
    align-items: center;
    display: flex;
  }
  .br-pagination .pagination-go-to-page .br-input label {
    font-weight: var(--font-weight);
    margin-right: var(--spacing-scale-base);
    padding-bottom: 0;
  }
  .br-pagination .pagination-go-to-page .br-input input {
    --input-size: var(--pagination-medium);
    padding-left: var(--spacing-scale-base);
    padding-right: calc(var(--spacing-scale-baseh) + 32px);
    text-align: right;
    width: var(--pagination-select-width);
  }
  .br-pagination .pagination-go-to-page .br-input input:not(:focus) {
    border-color: transparent;
  }
  .br-pagination .pagination-go-to-page .br-list {
    min-width: 5em;
    right: 0;
    width: auto;
  }
  .br-pagination .pagination-go-to-page .br-item:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-pagination .pagination-go-to-page .br-item:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  .br-pagination .pagination-go-to-page .br-radio input[type=radio] + label {
    padding-right: calc(var(--item-padding) + var(--pagination-medium));
  }
  .br-pagination .pagination-per-page {
    align-items: center;
    display: flex;
  }
  .br-pagination .pagination-per-page .br-input {
    align-items: center;
    display: flex;
  }
  .br-pagination .pagination-per-page .br-input label {
    font-weight: var(--font-weight);
    margin-right: var(--spacing-scale-base);
    padding-bottom: 0;
  }
  .br-pagination .pagination-per-page .br-input input {
    --input-size: var(--pagination-medium);
    padding-left: var(--spacing-scale-base);
    padding-right: calc(var(--spacing-scale-baseh) + 32px);
    text-align: right;
    width: var(--pagination-select-width);
  }
  .br-pagination .pagination-per-page .br-input input:not(:focus) {
    border-color: transparent;
  }
  .br-pagination .pagination-per-page .br-list {
    min-width: 5em;
    right: 0;
    width: auto;
  }
  .br-pagination .pagination-per-page .br-item:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-pagination .pagination-per-page .br-item:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  .br-pagination .pagination-per-page .br-radio input[type=radio] + label {
    padding-right: calc(var(--item-padding) + var(--pagination-medium));
  }
  .br-pagination .pagination-information {
    align-items: center;
    display: flex;
  }
  .br-pagination.inverted {
    --background: var(--blue-warm-vivid-90);
    --background-rgb: var(--blue-warm-vivid-90-rgb);
    --background-alternative: var(--blue-warm-vivid-90);
    --background-alternative-rgb: var(--blue-warm-vivid-90-rgb);
    --border-color: var(--pure-0);
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
    --bg-color: var(--color-primary-darken-01);
  }
  .br-pagination.inverted .br-item {
    --interactive-rgb: var(--rgb-secondary-01);
  }
  .br-pagination.inverted .br-button {
    --interactive-rgb: var(--rgb-secondary-01);
  }
  .br-pagination.inverted .br-input input {
    --interactive-rgb: var(--rgb-secondary-01);
  }
  .br-pagination.inverted .br-select .br-item {
    --interactive-rgb: var(--rgb-secondary-01);
  }`  