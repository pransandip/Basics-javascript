import numDiv, { numAdd, numMul, numSubs } from './importExport.js'
import {numAdd as ADD} from './importExport.js'
import * as BUNDLED from './importExport.js'
import divisn from './importExport.js'


// const numAdd = (a$num1, a$num2) => {
//     console.log(a$num1 + a$num2)
// }
// numAdd(14, 15)  // we dont need always a return statement


// let numAdd2 = function (a$num1, a$num2) {
//     return a$num1 - a$num2
// }
// console.log(numAdd2(14, 15))



// console.log(numAdd(1,2))
console.log(ADD(1,2), 'ADD') // 3 'ADD' -> alias
console.log(numSubs(7,2))
console.log(numDiv(7,2)) // 3.5 -> defult export
console.log(divisn(7,2), 'divisn') // 3.5 'divisn' -> defult export: we can use any name doesn't matter
console.log(numMul(7,2))

/** This can only import NameExport property */
console.log(BUNDLED.numMul(100,100), 'BUNDLED.numMul')