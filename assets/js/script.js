import '../css/style.css';

import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { initFlowbite } from 'flowbite';

const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

if (header) {
    header.innerHTML = Header();
}
if (footer) {
    footer.innerHTML = Footer();
}

initFlowbite();