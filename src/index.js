import image from './image.jpg';
import './style.css';
import { pageLoader } from './page-load.js';
import { menuLoader } from './menu-loader.js';
import { contactLoader } from './contact-loader.js';

pageLoader(image);

const homeBtn = document.querySelector('#homeBtn'); 
const menuBtn = document.querySelector('#menuBtn'); 
const aboutBtn = document.querySelector('#aboutBtn'); 
homeBtn.onclick = (e) => {  
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    e.target.classList.add('clicked');
    menuBtn.classList.remove('clicked');
    aboutBtn.classList.remove('clicked');
    pageLoader(image);
};

menuBtn.onclick = (e) => {  
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    e.target.classList.add('clicked');
    homeBtn.classList.remove('clicked');
    aboutBtn.classList.remove('clicked');
    menuLoader();
};

aboutBtn.onclick = (e) => {  
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    e.target.classList.add('clicked');
    menuBtn.classList.remove('clicked');
    homeBtn.classList.remove('clicked');
    contactLoader();
};