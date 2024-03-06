
//remove clearButton
function removeClearButton() {
    document.querySelector('#clear').remove();
}
    //Samma sak
function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();

}

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

ul.removeChild(li);
}

//Remove //Alla remove gör samma sak!
function removeItem(itemNumber) {
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li')[0];

ul.removeChild(i);
}

//Remove 
function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[0];

ul.removeChild(li);

}

//Remove 
function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();

}

//snabb version av ovanstående
const removeItem4 = (itemNumber) =>
document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
//removeFirstItem();
//removeItem(2);
removeItem4(3);
