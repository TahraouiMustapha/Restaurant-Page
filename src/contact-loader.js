export function contactLoader () {
    const myDiv = document.createElement('div');
    myDiv.classList.add('contactDiv');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Contact Us';
    myDiv.appendChild(title);

    const person = document.createElement('div');
    person.classList.add('person');

    const name = document.createElement('h2');
    name.textContent = 'jamal';
    name.classList.add('name');
    person.appendChild(name);

    const job = document.createElement('p');
    job.textContent = 'chef';
    job.classList.add('job');
    person.appendChild(job);

    const phone = document.createElement('p');
    phone.textContent = '0792501188';
    phone.classList.add('phone');
    person.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'hellojiji@Fake.com';
    email.classList.add('phone');
    person.appendChild(email);


    myDiv.appendChild(person);
    
    const content = document.querySelector('#content');
    content.appendChild(myDiv);
}

