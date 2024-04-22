

function menuLoader() {
    const myDiv = document.createElement('div');
    myDiv.classList.add('menuDiv');


    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Menu';
    myDiv.appendChild(title);

    const foodKind = document.createElement('div');
    foodKind.classList.add('foodKind');
    foodKind.textContent = 'the meat';
    myDiv.appendChild(foodKind);

    const plate = document.createElement('div');
    plate.classList.add('plate');

    const nameOfplate = document.createElement('h2');
    nameOfplate.textContent = 'the maine plate';
    plate.appendChild(nameOfplate) ;

    const desc = document.createElement('p');
    desc.textContent = 'some text about how delicious the plate is and its ingrediens';
    plate.appendChild(desc) ;

    const price = document.createElement('div');
    price.textContent = '3$';
    plate.appendChild(price) ;

    myDiv.appendChild(plate);

    

    const content = document.querySelector('#content');
    content.appendChild(myDiv);
}

export { menuLoader } ;