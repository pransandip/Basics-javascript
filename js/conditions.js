/** If Else conditions */

/** falsy values */

// false
// ""
// null 
// undefined
// 0
// NaN

let first$Name = '';

if(first$Name) {
    console.info('True Block') 
}else{
    console.error('false Block') // false Block
}


let second$Name = 'sandy';

if(second$Name) {
    console.info('True Block') // True Block
}else{
    console.error('false Block') 
}



let third$Name = null;

if(third$Name) {
    console.info('True Block') 
}else{
    console.error('false Block') // false Block
}



let fourth$Name = false;

if(fourth$Name) {
    console.info('True Block') 
}else{
    console.error('false Block') // false Block
}

/** truthy values */ 
// except falsy everything is truthy value

// "abc"
// 1, -1
