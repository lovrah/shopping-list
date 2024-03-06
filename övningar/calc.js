
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
        result = num1 + num2;
        break;
        case '-':
        result = num1 - num2;
        break;
        case '*':
        result = num1 * num2;
        break;
        case '/':
        result = num1 / num2;
        break;
        default:
        result = 'Invalid Operator';
    }

    console.log(result);
    return result;

}

calculator(5, 5, '+');


//Checking for empty arrays

const posts = ['Post One'];

if(posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No posts to List!');
}

//Checking for empty objects
const user = {
    name: 'Brad',
};

if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No user');
    
}

// Loose Equality (==)
console.log(false == 0); //true
console.log('' == 0); //true 
console.log(null == undefined); //true 

console.log(false === 0); //false
console.log('' === 0); //false
console.log(null === undefined); //false

const posts = ['Post One', 'Post Two'];
console.log(posts[0]); //ger undefined

const posts = ['Post One', 'Post Two'];
posts.lenght > 0 && console.log(posts[0]); //visar Post One

//Assigning a conditional valute to a variable
const canVote = age >= 18 ? true : false; //boolean
const canVote2 = age >= 18 ? 'You can vote' : 'You can not vote'; //string


console.log(canVote);
console.log(canVote2);

//Multiple statements


const auth = true;
/*let redirect;

if (auth) {
    alert('Welcome to the dashboard');
    redirect = '/dashboard';
} else {
    alert('Acess denied');
    redirect = '/login';
}

console.log(redirect);*/

//FÖRKORTA KODEN MED TERNIARY 

const auth = true;

const redirect = auth 
? (alert('Welcome to the dsashboard'), '/dashboard')
 : (alert('Acess denied'), '/login');

 console.log(redirect);

 auth ? console.log('Welcome to the dashhboard') : null; //man måste ha ett alteranativ för false

 auth && console.log('Welcome to the dashboard'); //behöver inte false
 //används mycket mer REACT


 for (let i = 0; i <= 10; i++) {
    console.log('NUmer ' + i);
 }

 for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);

    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
 }

 // Loop through arrays

 const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

 for (let i = 0; i )