// Import stylesheets
import './style.scss';
import { addHeader, HeaderSize } from './utils/html';

let innerHTML: string;

innerHTML = addHeader('Second Header', innerHTML, HeaderSize.h2, [
  'text-align-center',
  'border-rounded-ridge',
  'color-primary-bg',
]);
console.log(innerHTML);
document.getElementById('app').innerHTML = innerHTML;
