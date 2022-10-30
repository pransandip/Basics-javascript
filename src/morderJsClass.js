class Car {
    name = 'Range Rover';

    getCarName = () => {
        return this.name
    }
}

class Shwroom extends Car {
    location = 'Kolkata, 400070';
    name = 'porse';

    getShwRoomLocation = () => {
        return this.location
    }
}

const location = new Shwroom();
console.log(location.getCarName()) // porse
console.log(location.getShwRoomLocation()) // Kolkata, 400070