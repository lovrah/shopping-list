/*let output;

output = document.all;
output = document.all[11];
output = document.all.length;

output = document.documentElement; 

output = document.head; //visar allt i head
output = document.body; // visar allt i body

output = document.head.children; //visar (the direct child) children i en collection ((allt som finns i hea))
output = document.body.children; // Samma

output = document.doctype;output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms; // visar en HTML-collection av forms - som en array med tex index

//document.forms[0].id = 'new-id';

console.log(output);
*/

//DOM SELECTORS

//document.getElemtnById()

//console.log(document.getElementById('app-title').className);

//Get/Change content 
/*

console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

//CHange styles

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';

//-------------------document.querySelector()----------------

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

//USe theese methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';


//SELECTING MULTIPLE ELEMENTS

//  -------  querySelectorAll() ---------------

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);
//Ska ge en nodeList  

listItems[1].style.color = 'red'; 

listItems.forEach((item, index) => {
  item.style.color = 'red';

if (index === 1) {
  item.remove();
}

if (index === 0) {
  item.innerHTML = ` Oranges
  <button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;
}
});*/

//OM man har en HTML-collection och man vill använda tex foreach måste man först konvertera
//den till en array
/*const listItems2 = document.getElementsByClassName
('item');

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('i');
console.log(listItems3[0].innerText);

//MAN ANVÄNDER MEST QUERY SELECTOR ALL *


//Loop through an array

const names = ['Brad',  'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}

//BREAK - ibland när man nått en condition vill man inte forstätta 

for (let i = 0; i <=20; i++) {
  if (i === 15) {
    console.log('Breaking...');
    break;
  }
  console.log(i);
}

//Continue - yoou can skip the rest of a code in an current iteration and continue in 
//next iteration.

for (let i = 0; i <= 20; i++) {
  if( i ===13){
    console.log('Skipping 13...');
    continue;
  }
  console.log(i);
}
*/

//WHILE LOOP/ DO WHILE - GAMLA SÄTTET MEN BRA ATT KUNNA

let i =  1;

while (i <= 20 ) {
 console.log('Number ' + i);
  i++;
}

//Loop over arrays
const arr = [10, 20, 30, 40, 50];

  while (i < arr.length) {
    console.log(arr[i]);
    i++;
 }

//Nest While loop

while (i <= 5) {
  console.log('NUmnber ' + i);

  let j = 1; 
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

//DO kommer alltid att köra igenom ett varv även om inte the condition is met
//eftersom att själva condition är sist
do {
  console.log('Numner ' + i);
  i++;
  while (i <= 20);
}