const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element'); 

//div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);

document.querySelector('ul').appendChild(div);

//Append Child

//Snabba sättet
function createListItem(item) {
const li = createElement('li');


document.querySelector('items').appendChild(li);
document.querySelector('')
}


//Det mer ordentliga fina sättet


createListItem('Eggs');