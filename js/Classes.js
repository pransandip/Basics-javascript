class Showroom {
    features = {
        name: 'MarcedeseBenz',
        model: 'HQ Edition',
        launched: (new Date).toLocaleDateString(),
        price: 80000
    }

    offer = (percent) => {
        return this.features.price - (this.features.price * percent / 100)
    }
}

/** Suppose number is X
 *  10%of X = X*10 /100 
 * */

const car1 = new Showroom() // created class object
console.log(car1.features)
console.log('After Offer cars price is now', car1.offer(10)) //72000