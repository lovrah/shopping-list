const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;


function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDOM(item));
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  //Check edit mode - putting out the old and putting in the new
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');

    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
        alert('That item already exists');
        return;
  }
}

  //Create Item DOM - element
 addItemToDOM(newItem);

 //Add Item to local storage
 addItemToStorage(newItem);
 
  checkUI();

  itemInput.value = '';
}


function addItemToDOM(item) {
     // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
  
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
  
    // Add li to the DOM
    itemList.appendChild(li);
}



function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

//iNITIALIZING THIS VARIABLE, creating this variable
function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();
    
    //add new item to array
    itemsFromStorage.push(item);

    //Convert back to JSON string and set back to localStorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage()  {
//Initialize and check if its null, if it is, create an empty array
    let itemsFromStorage; //The array of items from storage

    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
        //if there are items in storage, we are parsing the string back to an array and putting these items in this variable in 
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        setItemToEdit(e.target);
    }
}

//Check if item exists
function checkIfItemExists(item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);
}

function setItemToEdit(item) {
    isEditMode = true;

itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));

    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
}

function removeItem(item) {
    if (confirm('Are you sure?')) {
        //remove item from DOM
        item.remove();


        //Remove Item from storage
        removeItemFromStorage(item.textContent);

        checkUI();
    }
}

function removeItemFromStorage(item) {
let itemsFromStorage = getItemsFromStorage();
//console.log(itemsFromStorage);


// Filter out item to be removed
itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

//Re-set to localstorage
localStorage.setItem('items', JSON.stringify(itemsFromStorage));


}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  //Clear from local storage
  localStorage.removeItem('items');

  checkUI();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');// Get the listitems
    const text = e.target.value.toLowerCase(); //Get the text
 
    // Loop through these items, use forEach to get a nodelist
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) { //Indexof- if it doesnt work it will give an -1
        item.style.display = 'flex';
    } else {
        item.style.display = 'none';
    }
    });
}

function checkUI() { //RESET
    itemInput.value = ''; //Clear the input when UI's cleared/checked
    const items = itemList.querySelectorAll('li'); //gets a node list, similar to an array
    if (items.length === 0) {       
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class"fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';
    isEditMode = false;
}

//Initialize app
function init() {
    // Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

checkUI();
}

init();

/*
localStorage.setItem('name', 'Brad'); 
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
localStorage.clear();


const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


    // Event Listener
    function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    //Validate Input
    if (newItem === '') { //om värdet är noll vill vi meddela det och be dem skriva in något 
        alert('Please add an item');
        return; //(vi vill inte att någor mer ska hända)
    }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);    

    itemList.appendChild(li);

    itemInput.value = '';
}

    function createButton(classes) {
        const button = document.createElement('button');
        button.className = classes;
        const icon = createIcon('fa-solid fa-xmark');
        button.appendChild(icon);
        return button;
    }

    function createIcon(classes) {
        const icon = document.createElement('i');
        icon.className = classes;
        return icon;
    }

    function removeItem(e) {
       if(e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove(); //reversing the dom to get what we want, and deleting it
        }
    }

    //Clear all items
    function clearItems() {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
    }

    function checkUI() {
        const items = itemList.querySelectorAll('li'); //gets a node list, similar to an array
        console.log(items);
        if (items.length === 0) {
            clearBtn.style.display = 'none';
            itemFilter.style.display = 'none';
        }
        else {
            clearBtn.style.display = 'block';
            itemFilter.style.display = 'block';
        }
    }
 
    //Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUI(); */