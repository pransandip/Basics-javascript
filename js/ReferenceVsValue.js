/**One of the most important topics in programming is pass by reference vs value */

/**pass by value */

let a = 10;
let b = 'Hi';
let c = a;
c = c + 1;

console.log(`a -> ${a}`) // a -> 10
console.log(`b -> ${b}`) // b -> Hi
console.log(`c -> ${c}`) // b -> 11
// :- This is happening because c is not a, a is only pointing value to c, c is completly distinct from eact other


/**pass by reference */

let d = [1, 2]
let e = d;  // :- d & e not saving the value instade its taking the memmory location of the value

console.log(`d = ${d}`)
console.log(`e = ${e}`) // Its happening because it is pointing to the same memmory location

e.push(3)
console.log(`d = ${d}`)
console.log(`e = ${e}`)

console.log(`d === e, ${d === e}`) // d === e, true
console.log(`d == e, ${d == e}`) // d == e, true

let f = [1, 2];
let g = [1, 2];

console.log(`f === g, ${f === g}`) // f === g, false
console.log(`f == g, ${f == g}`) // f == g, false 
// its not pointing to same memory location



let h = [1, 2];
console.log(`h = ${h}`) // h = 1,2
add(h, 3)
console.log(`h = ${h}`) // h = 1,2,3

function add(array, element){
    array.push(element)
}


let i = [1, 2];
console.log(`i = ${i}`) // i = 1,2
fun(i, 3)
console.log(`i = ${i}`) // i = 1,2,3

function fun(array, element){
    array.push(element+2)
}








