let animal = {
    firstName:'Pusheen',
    birthday: 'February 18',
    species: 'cat',
    color: 'gray',
    hobby: 'eat snacks'
};

console.log('This is ' + animal.firstName + ' and she is a ' + animal.color + ' ' + animal.species + ' who loves to ' + animal.hobby + '.');

let friends = ['Pusheen', 'Stormy'];
friends[2] = 'Sloth';
console.log(friends);

// Performing a task
function snax(candy, drink) { // Candy = paramater
    console.log('Let them eat ' + candy + ' and ' + drink);
} // Does not need ; here, not a statement

snax('M&Ms', 'Coke'); // Coke = argument
snax('Twix', 'Sprite');

// Calculates a value
function square(number) {
    return number * number;
}

console.log(square(2));

// Primitive or Value Types

let name = 'Eve'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined; // Type and value
let selectedColor = null; // Type and value

// Objects

let person = { // Object Literal
    name: 'Eve', // Key value pair
    age: 30
};

// Dot Notation
person.name = 'Eva';

// Bracket Notation
person['name'] = 'Pusheen'; // When var selected at runtime

// console.log(person.name); // Console will show Eva


// Equality operators
x === 1; // Is equal, strict equality, same type & value
x !== 1; // Is not equal
x == 1; // Is equal, loose equality, diff type same value

// Ternary operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';

// Logical AND (&&)
// Returns true if both operands are true

console.log(true && false); // returns false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // returns true

// Logical OR (||)
// Returns true if one of the operands is TRUE

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan); // returns true

// NOT Operator (!)

let applicationRefused = !eligibleForLoan; // means the opposite

console.log(eligibleForLoan); // returns false

// Non-booleans

// Falsy values
// undefined
// null
// 0
// false
// ''
// NAN (not a number)

// Truthy values (anything not falsy)

// short-circuiting
 //false || 1 || 2

 let userColor = 'undefined'; 
 let defaultColor = 'blue';
 let currentColor = userColor || defaultColor;

 console.log(currentColor); // returns the color blue