// template string 

let age = 27;
let firstName = "Sandip"

let txt = 'Hi my name is ' + firstName + ' and age is ' + age;
console.log(txt)

var txt2 = `Hi my name is ${firstName} and age is ${age} ${`happy now!`}`
console.log(txt2)

// undefined 
// null

let sur$name;
console.log(sur$name) //undefined
console.log(typeof sur$name)

var sur$name2;
console.log(sur$name2) //undefined
sur$name2 = "SANDY"
console.log(typeof sur$name2)  //string

// const sur$name3; //you cannot do it same with const you have to initialize something
const sur$name3 = '';
console.log(sur$name3)
console.log(typeof sur$name3)

let my$var = null;
console.log(my$var) //null :- sThe absence of any value.
my$var = 'sandip'
console.log(my$var, typeof my$var) //sandip string

/* BigInt */
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991  or ~9 quadrillion

let big$num = BigInt(900719925474099125558855885555);
console.log(big$num, typeof big$num);
console.log(123n) //BigInt
console.log(123n - 1n) //122n
// console.log(123n- 1) //you can not do this TypeError: Cannot mix BigInt and other types

/* booleans & comparison operator  */

// booleans 
// true, false 

console.log(5 > 7) //false
console.log(5 > 7 && 5 < 7) //false
console.log(5 > 7 & 5 > 7) //0
console.log(5 > 7 && 5 > 7) //false
console.log(5 < 7 && 5 < 7) //true

let num1 = 7;
let num2 = "7";

console.log(num1 >= num2) //true
console.log(num1 == num2) //true :- double equals (==) only focus on values not on data type
console.log(num1 === num2) //false :- (===) its focuses on data type as well

console.log(num1 != num2) //false :- Its checking only values
console.log(num1 !== num2) //true :- Its checking values as well as datatype
console.log(num1 == num2) //true :- Its checking only values

/* truthy and falsy values */

/** In JavaScript, a truthy value is a value that is considered
 *  true when encountered in a Boolean context. All values are truthy
 *  unless they are defined as falsy. That is, all values are truthy 
 * except false , 0 , -0 , 0n , "" , null , undefined , and NaN . 
 * JavaScript uses type coercion in Boolean contexts. */

/** falsy values */

// false
// ""
// null 
// undefined
// 0
// NaN

console.log(false && "dog") // false :-If the first object is falsy, it returns that object
console.log(0 && "dog") // 0 :-If the first object is falsy, it returns that object



/** Truthy values */

console.log(true && "dog") // dog :- If the first object is truthy, the logical AND operator returns the second operand:
console.log([] && "dog") // dog :- here first object is truthy
console.log(typeof []) // object 

if (true) { console.log(true) } //true
if ({}) { console.log(typeof {}) } //object
if (42) { console.log(typeof 42) }  // number
if ("0") { console.log(typeof "0") } // string
if ("false") { console.log(typeof "false") }
if (new Date()) { console.log(typeof (new Date()), new Date()) } //object
if (-42) { console.log(typeof -42) }
if (12n) { console.log(typeof 12n) } // bigint
if (3.14) { console.log(typeof 3.14) } // number -3.14
if (-3.14) { console.log(typeof (-3.14), -3.14) }

if (Infinity) { console.log(typeof (Infinity), Infinity) } //number Infinity :- Writable|Enumerable|Configurable - no
if (-Infinity) { console.log(typeof (-Infinity), -Infinity) } //number -Infinity

/** Type coercion */

/**Type conversion is similar to type coercion because
 * they both convert values from one data type to another
 * with one key difference — type coercion is implicit whereas
 * type conversion can be either implicit or explicit. */

const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum); // 59 :-string



/** The global property Infinity is a numeric value representing infinity. */
console.log(typeof(Infinity),Infinity); /* number  Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
console.log(1 / 0             ); /* Infinity */

const maxNumber = Math.pow(10, 1000); // max positive number
if (maxNumber === Infinity) { console.log('Let\'s call it Infinity!') }// "Let's call it Infinity!"
console.log(1 / maxNumber); // 0

i = Math.pow(2, 3) 
console.log(i) //8

// to get the reminder
console.log(9%3) // 0
console.log(9%2) // 1
console.log(9%2.5) // 1.5