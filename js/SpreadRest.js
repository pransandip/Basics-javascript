/* SPREAD: used to split up array elements OR object properties
 * REST: used to merge a list of function arguments into an array
 */

const array = ['javascript', 'python', 'nodejs']
const array2 = [array, 1, 2]  // [['javascript', 'python', 'nodejs'], 1, 2] 
// ...array will bring up previous array and add 1 2
const newArray = [...array, 1, 2]  // Spread: deepCopy
console.log(newArray)
console.log(array2)

const obj = {
    name: 'MarcedeseBenz',
    model: 'HQ Edition',
    launched: (new Date).toLocaleDateString(),
    price: 80000
}
// ...obj with this copying the old obj
const newObj = { ...obj, owner: 'SANDY' } //If obj also has a property call 'owner' then it will overridden by new "owner" value
const newObj2 = [{ ...obj, owner: 'SANDY' }]
console.log(newObj)
console.log(newObj2)


/** Rest operator */
// filter is an Array method
// ...arg this rest will produce an array then we can use array methods
const filterNum = (...arg) => {
    return arg.filter(el => el === 4)
}

console.log(filterNum(1, 1, 2, 3, 4, 4, 5))