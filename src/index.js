import image from './image.jpg';
import './style.css';
import { pageLoader } from './page-load.js';
import { menuLoader } from './menu-loader.js';

pageLoader(image);

const menuBtn = document.querySelector('#menuBtn'); 
menuBtn.onclick = () => {  
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    menuLoader();
};
