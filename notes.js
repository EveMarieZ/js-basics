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
    name: 'Eve', // Key value pair ( key = properties)
    age: 30
};

// Dot Notation
person.name = 'Eva'; // changes the name of the person

// Bracket Notation
person['name'] = 'Pusheen'; // When var selected at runtime by user

console.log(person.name); // Console will show Eva



// Equality operators
x === 1; // Is equal, strict equality, same type & value
x !== 1; // Is not equal
x == 1; // Is equal, loose equality, diff type same value

// Ternary operator
// If a customer has more than 100 points, they are a gold customer
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
// NaN (not a number)

// Truthy values (anything not falsy)

// short-circuiting
// false || 1 || 2
// First operand that is true, console returns true.

 let userColor = 'undefined'; 
 let defaultColor = 'blue';
 let currentColor = userColor || defaultColor;

 console.log(currentColor); // returns the color blue

 // Bitwise operators
 // 1 = 00000001 (8-bit information, each number is a bit)
 // 2 = 00000010
 // R = 00000011 = 3
 // R = 00000000 = 0

 console.log(1 | 2); //Bitwise or
 console.log(1 & 2); //Bitwise and

 // Read, Write, Execute permissions
 // 00000100
 // 00000110
 // 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes': 'no';

console.log(message);

let x = (2 + 3) * 4; // * gets priority, unless you put parentheses

console.log(x);

//Exercise - swap the values of a and b

let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// Conditional Statements 
// If...else, Switch...case

if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else {
    statement
}

let hour = 10;

if (hour >= 6 && hour < 12) 
    console.log('Good Morning');
else if (hour >= 12 && hour < 18) 
    console.log('Good Afternoon');
else 
    console.log('Good Evening');

// don't need curly braces because these are single statements after the else

// Switch and case (a little outdated)
// Compare the value of a variable against a bunch of other values

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User')
        break;
    case 'moderator':
        console.log('Moderator user');
        break;

    default:
        console.log('Unknown User');
}

// This is cleaner 
if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown');

// For Loops
for (initalExpression; condition; incrementExpression)
// i is loop variable, stands for index
// needs these three statements

for (let i = 0; i < 5; i++) {
    console.log('Hello World');
}

// the i is incremented until it is larger than five (starts a 0 like an array)
