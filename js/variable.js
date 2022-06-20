/* declare variables, variables can store some information 
we can use that information later
we can change that information later */

// "use strict";

FIRST_NAME = "Sandy"
LAST_NAME = "Roy"

// Now if any variable declared with same name
// for ex:- let lastName, there will some wave in LAST_NAME
console.log(FIRST_NAME, LAST_NAME) 
console.log(typeof (FIRST_NAME))

// delare a variable with var keyword
// once we declared a variable with var keyword we can define anothor variable with same name
// but we cannot do it with let keyword ES2015

var i = 10;
console.log(i, 'var') // 10 'var'
i = 11;
console.log(i, 'var', i, 'var',) // 11 'var' 11 'var'

// let keyword ES2015
let j = 10;
console.log(i, 'let',) // 11 'let'
j = 11;
console.log(i, 'let', i, 'let',) // 11 'let' 11 'let'


/* rules for naming variables */

// you cannot start with a number
// example:-

// 1value (invalid)
// value1 (valid)

// putting number in middle
var val8ue = 8

// (-val8ue) will print -8 
// console.log(-val8ue + 3, "is valid") // -5 'is valid'
// (+val8ue) will print 8 
// (--val8ue) ✔ is correct not (val8ue--) ❌
console.log(val8ue, "is valid") // 8 'is valid'
console.log(++val8ue, "is valid") // 9 'is valid'
console.log(++val8ue - 1, "is valid") // 9 'is valid'
console.log(++val8ue, "is valid") // 11 'is valid' :- this is happening because value was 10 in upper line

console.log(2/2)
console.log(2**3)
console.log(2**0.5, "square root")


// you cannot use special char like @ & * in a valiable name
// you can use only undersore _ or dollar $ symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase in variabe
// we start with block letter in class

console.log(i=9, ++i - 1, ++i) // 9 9 11

/* block scope vs funtion scope */

// let keyword
// delare a variable with let keyword
// once we declared a variable with let keyword we cannot define anothor variable with same name
// but we can change the value of it because its duty is to change

let surName = "Ry";
surName = "ROY"
console.log(surName);


// delare constants
// you can't change the pi value otherwise it will throw an error.

const pi = 3.14;
// pi = 25; // we can not assing a value to constant otherwise it will throw an error.
console.log(pi);
// we can perform various operations on it 
console.log(pi-3.15);


// String indexing 

let userName = "harshit";

//  h    a   r   s   h   i   t 
//  0    1   2   3   4   5   6

console.log(userName[0]);
// length of string 
console.log(userName.length, 'userName.length')

console.log(userName[userName.length-1]) // it will print last index value t