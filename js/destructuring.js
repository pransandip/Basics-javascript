/* Destructuring: Easily extract array elements or object
 * properties and store them in variables. you might think 
 * this is similar to spread operator, but it is not spread 
 * operator takes out all element, but destructuring allow 
 * us pull out single elements or properties */

// Array Destructuring
const numbers = [1, 2, 3, 4, 5]
const [el1, ,el2] = numbers
const [num1, num2, ...num3] = numbers
console.log(el1, el2) //1 3
console.log(num1) //1
console.log(num2) //2
console.log(num3) // [3, 4, 5]
console.log(num1, num2, num3) //1 2 [3, 4, 5]

const [a,b] = ['Hello', 'Sandy']
console.log(typeof [a,b]) // object
console.log([a,b]) // ['Hello', 'Sandy']

// Object Destructuring
const {name} = {name: 'Sandip', age: 'Max'}
console.log(name)
// console.log(age) //undefined