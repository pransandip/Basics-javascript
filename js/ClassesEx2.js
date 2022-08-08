/* Moment you initialize class object, constructor method 
 * will execute. Constructor method are use to intialize
 * properties. If we use constructor in base class and we 
 * extends parent class into into it we have to use super()
 * keyword. Otherwise it will through an error. Add if we 
 * don't use constructor in base but it is use in parent 
 * class it will not through an error */

/* Must call super constructor in derived class before 
 * accessing 'this' or returning from derived constructor
 * at new Person */

import { Human } from './Extends.js'

class Person extends Human {
    constructor() {
        super();   // Must call super constructor in derived class before accessing 'this'
        this.name = 'Sandy';
        // console.log('base constructor')
    }

    printName() {
        console.log(this.name)
    }
}

const person1 = new Person()
person1.printName()
person1.printGender()

