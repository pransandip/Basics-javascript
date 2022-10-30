class Car {
    constructor() {
        this.carName = 'porse'
    }
    getCarName(car$name) {
        return car$name || this.carName
    }

}

class Showroom extends Car {
    constructor() {
        super(); // Its a key word to execute the parent constructor to initialize
        this.name = 'RMotors'
        this.carName = 'BMW' // derived from parent class
    }

    getShowRoomName(name) {
        return name || this.name
    }
}

const showRoom = new Showroom()
// console.log(showRoom.getShowRoomName('SSMotors')) // SSMotors
console.log(showRoom.getShowRoomName()) // RMotors
console.log(showRoom.getCarName()) // porse