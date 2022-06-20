/** ternary operator */

let age = 6;
let drink = age >= 6 ? "coffee" : "milk"
console.log(drink)

var age2 = 26;
var beverage = (age2 >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true)) //"$2.00"
console.log(getFee(false)) //"$10.00"
console.log(getFee(null)) //$10.00
console.log(getFee()) //$10.00
console.log(getFee(1)) //"$2.00"
console.log(getFee(0)) //"$10.00"

let greetings = person => {
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}

console.log(greetings({ name: `Sandip` })) // Howdy, Sandip
console.log(greetings()) // Howdy, stranger
console.log(greetings(null)) // Howdy, stranger


/** Conditional chains
 * The ternary operator is right-associative, which means it can be "chained"
 * in the following way, similar to an if … else if … else if … else chain: */

/** 
 function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}

*/

function ageToFood(age) {
    return (age <=5) ? 'milk'
         : (age>=5 && age<=18) ? 'coffee'
         : (age>=18 && age<=23) ? 'Beer'
         : (age>=23 && age<=60) ?'Alcohole'
         : 'Please send your Age'
}


/*
function ageToFood(age) {
    if (age <=5) { return 'milk'; }
    else if (age>=5 && age<=18) { return 'coffee'; }
    else if (age>=18 && age<=23) { return 'Beer'; }
    else if (age>=23 && age<=60) { return 'Alcohole'; }
    else { return 'Please send your Age'; }
}
*/

console.log(ageToFood(4)) // milk
console.log(ageToFood(6)) // coffee
console.log(ageToFood(23)) // Beer
console.log(ageToFood(44)) // Alcohole
console.log(ageToFood()) // Please send your Age
console.log(ageToFood(null)) // milk
console.log(ageToFood(undefined)) // Please send your Age
console.log(ageToFood('')) // milk
console.log(ageToFood(NaN)) // Please send your Age


/** and  or operator */

let first$Name = 'Sandip';
let your$age = 22;

if (first$Name[0]==='S'){
    console.log(`Your name starts with ${first$Name[0]}`)
}
else{
    console.log(`Your name starts with ${first$Name[0]}`) 
}


if (first$Name[0]==='S' && your$age<15){
    console.log(`Your name starts with ${first$Name[0]}`)
}
else{
    console.log(`else Block`) // else Block
}


if (first$Name[0]==='S' || your$age<15){
    console.log(`Inside if`) // Inside if
}
else{
    console.log(`else Block`)
}


let new$Name = 'Puja'
if (new$Name[0]==='S' || your$age>15){
    console.log(`Inside if`) // Inside if
}
else{
    console.log(`else Block`)
}

/** Short-circuit evaluation */

console.log('' && 'foo') // empty
console.log(2 && 0) // 0
console.log('foo' && 4) // 4

function A() { console.log('called A'); return false; } // called A
function B() { console.log('called B'); return true; }

console.log( A() && B() ); // false :- the AND operator short-circuits here and ignores function B

/** Operator precedence */
