function pageLoader (image) {
    const content = document.querySelector('#content');
    const myDiv = document.createElement('div');

    const headLine = document.createElement('h2');
    headLine.textContent = 'Welcome in our Restaurant';
    myDiv.appendChild(headLine);
    
    const sometxt = document.createElement('p');
    sometxt.textContent = 'some text about how wonderful the restaurant is';
    myDiv.appendChild(sometxt);
    
    const myImage = new Image();
    myImage.src = image;
    myImage.width = 120;
    myDiv.appendChild(myImage);


    content.appendChild(myDiv);
}

export { pageLoader };

