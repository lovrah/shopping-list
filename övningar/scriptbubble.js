
// EVENT - Delegation
//WIth mutliple elements

//Ex. ta bort list-items i shopping listan

const listItems = document.querySelectorAll('li'); 
const list = document.querySelector('ul');
/*
listItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.remove();
    });
});
*/
//Tar bort det list item som du klickar på
list.addEventListener('click', (e) => {
   if (e.target.tagName === 'LI') {
    e.target.remove();
   }
});

//Rubrukerna för Items blir röda när man drar med musen över
list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
     e.target.style.color = 'red';
    }
 });

 //pAge loading and window object

 window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
 });

 window.addEventListener('scroll', () => {
    console.log(`Scrolled ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'black';
    }
 });