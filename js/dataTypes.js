/* data types (primitive data types) */  //:-Two types of data type (primitive datatype) & (Reference datatype)
// string "sandip"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

/* typeof operator */
console.log(typeof 2)   // number
console.log(typeof 'letters') // string

let num = 123;
let char = 'ABC';

console.log(typeof num)
console.log(typeof(char))
console.log(typeof true)   // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object :- Javascript error / bug
console.log(typeof parseFloat('123')) // number :- converts a string to a floating-point number.
console.log(true && false) // false
console.log(true && true) // true
console.log(false && false) // false
console.log(false && true) // false

/* convert number to string. */
// 123 -> "123"
console.log(num + "");
console.log(typeof(num + "")); // string :- when you add number with empty string its become string

// 55 --> "55"
let value = 55;
value = String(55);
console.log(typeof value); // string

console.log(value.toString()) 
console.log(typeof value.toString()) // string 

/* convert string to number */
let str = "34";  // add + sign at the begining to convert to a number
let str_2 = +"35";
console.log(typeof +str, typeof str_2); // number numbers
 
let str_3 = Number(str);
console.log(typeof str_3, str_3); 

/* string concatenation  */

let string1 = "17";
let string2 = "10";

console.log(string1+ " "+ string2)
console.log(typeof(string1+ " "+ string2))
console.log(+string1 + +string2)


