function pageLoader (image) {
    const content = document.querySelector('#content');
    const myDiv = document.createElement('div');

    const headLine = document.createElement('h2');
    headLine.textContent = 'Welcome in our Restaurant';
    headLine.classList.add('title');
    myDiv.appendChild(headLine);
    
    const sometxt = document.createElement('p');
    sometxt.textContent = 'some text about how wonderful the restaurant is';
    sometxt.classList.add('plate');
    myDiv.appendChild(sometxt);
    

    const body = document.body;
    console.log(body);
    body.style.backgroundImage = `url(${image})`;
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    body.style.backgroundPositionY = '70%';


    content.appendChild(myDiv);
}

export { pageLoader };

