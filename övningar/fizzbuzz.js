

//For loop
/*
for (let i = 1; i <= 100; i++) 
{
    if (i % 15 === 0) { //When multiples of 3 and multiples of 5
        console.log('FizzBuzz');
    }
   else if(i % 3 === 0) { //when multiples of 3
    console.log('Fizz');
} else if (i % 5 === 0) { //when multiples of 4
    console.log('Buzz');
} else {
    console.log(i);
}
}

//WHILE LOOP
//Put the variable outside the loop

let j = 1;

while (j <= 100) {
    if (j % 15 === 0) { //When multiples of 3 and multiples of 5
        console.log('FizzBuzz');
    }
   else if(j % 3 === 0) { //when multiples of 3
    console.log('Fizz');
} else if (j % 5 === 0) { //when multiples of 4
    console.log('Buzz');
} else {
    console.log(i);
}
j++;
}
*/

// FOR OF LOOP

//cleaner way to loop through an ARRAY'

/*
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];


for (let i = 0; i <items.length; i++) {
    console.log(items[i]);
}
//samma men med for or - cleaner and more modern looking

for (const item of items) {
    console.log(item);
} 

for (const user of users) {
    console.log(user.name);
}

// LOOP OVER STRINGS 
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

//Loop over MAPS
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
console.log(key, value);
}



//FOR IN LOOP (loop trough an objects values)

const colorObj = { color1: 'red', color2: 'blue', color3: 'orange', color4: 'green', };

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

//For in lopp with array

const colorArr = ['red', 'blue', 'green', 'yellow'];

for(const color in colorArr) {
    console.log(color, colorArr[color]);
}
//finns många sätt att loop trough arrays

//HIGH ORDERED ARRAY METHODS
//FOR EACH

const socials = ['Twitter', 'LinkedIN', 'Facebook', 'Instagram'];

socials.forEach(function (social) {
    console.log(social);
});

socials.forEach(function (social) {
    console.log(social);
}); 

socials.forEach((social, index, arr) => console.log(`${index} - ${social}`, arr)); //samma sak med kortare

function logSocials(social) {
    console.log(social);
}
socials.forEach(logSocials);

const socialObj = [
    { name: 'Twitter', url: 'https.w..' },
    { name: 'Facebook', url: 'https.www.' },
    { name: 'Linkedin', url: 'https.wwww.' },
    { name: 'INstagram', url: 'https.wwwww.' },

];

socialObj.forEach((item) => console.log(item.url));

//FILTER - high ordered array method
//man filtererar bort de som inte "passerar testet"


//Här tar vi ut alla siffor som kan delas med två
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0; 
});


//short version

const evenNumbers2 = numbers.filter(number => number % 2 === 0);

//Same with for each
let evenNumbers;

numbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});


console.log(evenNumbers2);
*/
//MAP

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Tecnhology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technologuy', start: 2011, end: 2011 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//Get only retails companies:


const retailCompanies = companies.filter((company) => company.category === 'Retail'); 
console.log(retailCompanies);


//Get Companies that started in or after 1980 and ended in or before 2005

const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005); 
console.log(earlyCompanies);

//Get companies that lasted 10 years or more

const longCompanies = companies.filter((company) => (company.end - company.start >= 10)); 

console.log(longCompanies);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); 



//Create an array of company names

const companyNames = companies.map((company) => company.name);
console.log(companyNames); 

//Create an array with just company and category

const companyCompCat = companies.map((company) => company.name + company.category);
console.log(companyCompCat);

//Traversys svar

const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});

console.log(companyInfo);

//CREATE an array of the length of each company in years

const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start + ' years',
    };
});

console.log(companyYears);

//CHain map methods

const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);

//long version of above:

const squareAndDouble2 = numbers
.map(function (number) {
    return Math.sqrt(number);
})
.map(function (sqrt) {
    return sqrt * 2;
})
.map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
});

console.log(squareAndDouble2);

//Chaining different methods

const evenDouble = numbers
.filter((number) => number % 2 === 0)
.map((number) => number * 2);

console.log(evenDouble);



//REDUCE

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); //Börjar på noll
//GÅr igenom function för alla element
//Tar 1 och lägger till nästa värde - tills arrayen är klar

//kortare version - gör samma sak
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum2); 

// Using a for loop - gör samma sak

const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        for (const cur of numbers) {
            acc += cur;
        }
        return acc;
    };

    console.log(sum3());
}

//Skapa en shopping cart
// Get the total of these prices

const cart = [ 
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
];


 const totalSum = cart.reduce(function (acc, product) {
    return acc + product.price;
 }, 0 );

console.log(totalSum);

 //CHALLANGE 1
const people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-111',
        age: 30,
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'jane@gmail.com',
        phone: '112-112-112',
        age: 25,
    },
    {
        firstname: 'Bob',
        lastname: 'Boe',
        email: 'bob@gmail.com',
        phone: '113-113-113',
        age: 45,
    },{
        firstname: 'Sara',
        lastname: 'Soe',
        email: 'sara@gmail.com',
        phone: '114-114-114',
        age: 19,
    },
    {
        firstname: 'Jose',
        lastname: 'Koe',
        email: 'jose@gmail.com',
        phone: '115-115-115',
        age: 23,
    },
];


//const youngPeople = people.reduce(function (name, email) {
 //   return name + people.email;
// }, 0 );

//expected result:

// [
    
// {name: 'Jane Poe', email:'jane@gmail.com'},
// {name: 'Sara Soe', email:'sara@gmail.com'},
// {name: 'Jose Koe', email:'jose@gmail.com'},

// Mitt förslag- glömde att det skulle vara yngre
const youngPeople2 = people.map((info) => {
    return {
        name: info.firstname + info.lastname,
        email: info.email,
    };
});


 console.log(youngPeople2); //rätt? I dont know

 //TRAVERSYS SVAR

 const youngPeople3 = people
 .filter((person) => person.age <= 25)
 .map((person) => ({
    name: person.firstname + ' ' + person.lastname,
    email: person.email,
 }) );

 console.log(youngPeople3);

 //CHALLANGE 2

//Add all of the positive numbers in the array
//expected result:
// [const numbers = [2, -30, 50, 20, -12, -9, 7];
//console.log(positiveSum); //79



const numbers =  [2, -30, 50, 20, -12, -9, 7];

const positiveNumbers = numbers
.filter((number) => number > 0)
.reduce((acc, cur) => acc + cur, 0); //reduce add them together, // 0 is initial value
console.log(positiveNumbers);

//Tar först ut alla nummer som är äver noll, (filter)
//Tar sedan och reducerar talen och plussar ihop accumulator och currentvaalue


//CHALLANGE 3
//Create an new array called capitalizeWors with the words from the array with the fi
//first letter of every word capitalized:

//Expected result:
// const words = ['coder', 'programmer', 'developer'];
//console.log(capitalizedWords); ['Coder, 'Programmer', 'Developer'];

const words = ['coder', 'programmer', 'developer'];


const cWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);

});

console.log(cWords);