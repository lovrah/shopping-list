function replaceFirstItem() {
const firstItem = document.querySelector('li:first-child'); //select element

const li = document.createElement('li'); //create element to replace it
li.textContent = 'Replaced First';

firstItem.replaceWith(li);
}



//Replce secontITem

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
}


function replaceAllItems () {
    const lis = document.querySelectorAll('li');
/*
    lis.forEach((item, index) => {
    //    item.outerHTML = '<li>Replace All</li>'; //Alla gör samma sak som innerHTML
    // for each
    if (index === 1) {
        item.innerHTML = 'Second Item';
    } else {
        item.innerHTML = 'ReplaceAll';
    }
    });
*/

// Shorten the for each code
    lis.forEach((item, index) => (item.outerHTML = index === 1 ? 
    '<li>Second Item</li>' : '<li>Item</li>')
    );
}

//REplace trough the parent element with replaceChild (heading)

function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2, h1); //h2 replace h1
}



replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();