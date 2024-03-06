//insert AdjacentELEMENT Example
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}

//insertAdjacentText example 
function insertText() {
    const item = document.querySelector('li');

    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

//insertAdjacentHTML example  //som innerHTML
function insertHTML () {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}

//insertBefore example //lite mer komplicerad, väljer en parent och sen
//vad i the parent man vill ändra

function insertBeforeItem() {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

   ul.insertBefore(li, thirdItem);

}

insertElement();
insertText();
insertHTML();
insertBeforeItem();
/*Beforebegin

<!-- afterbegin -->

*/
