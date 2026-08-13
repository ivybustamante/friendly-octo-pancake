import '../css/style.css';

import { Header } from './components/Header.js';
import { initFlowbite } from 'flowbite';

const header = document.querySelector('#header');

if (header) {
    header.innerHTML = Header();
}

initFlowbite();