function pageLoader (image) {
    const content = document.querySelector('#content');

    const headLine = document.createElement('h2');
    headLine.textContent = 'Welcome in our Restaurant';
    content.appendChild(headLine);
    
    const sometxt = document.createElement('p');
    sometxt.textContent = 'some text about how wonderful the restaurant is';
    content.appendChild(sometxt);
    
    const myImage = new Image();
    myImage.src = image;
    myImage.width = 120;
    content.appendChild(myImage);

}

export { pageLoader };

