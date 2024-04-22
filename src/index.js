import image from './image.jpg';
import './style.css';
import { pageLoader } from './page-load.js';
import { menuLoader } from './menu-loader.js';
import { contactLoader } from './contact-loader.js';

pageLoader(image);

const homeBtn = document.querySelector('#homeBtn'); 
const menuBtn = document.querySelector('#menuBtn'); 
const aboutBtn = document.querySelector('#aboutBtn'); 
homeBtn.onclick = () => {  
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    pageLoader(image);
};

menuBtn.onclick = () => {  
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    menuLoader();
};

aboutBtn.onclick = () => {  
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    contactLoader();
};