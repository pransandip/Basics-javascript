// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "   sandip   ";

console.log(firstName.length) // 12
firstName.trim() // it will not change "existing string" firstName  it will give a new string.
console.log(firstName.length) // 12 :- it will not work in this way because strings are immutable.

let NEW_STRING = firstName.trim()
console.log(NEW_STRING) // sandip

let BLOCK_LETTERS = NEW_STRING.toUpperCase() // it will also not change "existing string" newString  it will give a new string.
console.log(BLOCK_LETTERS)

// start index 
// end index

console.log(BLOCK_LETTERS.slice(0, 4)) // SAND :- last index is exclusive
console.log(BLOCK_LETTERS.slice(1)) // ANDIP :- it will begin with second index go at the end.
console.log(BLOCK_LETTERS.slice(0)) // SANDIP :- if we pass one argument, it will begin with first index go at the end.

console.log(document.location.pathname)


