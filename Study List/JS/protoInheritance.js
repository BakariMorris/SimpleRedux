let object = {
    name: "Bakari",
    city: "New York",
    getIntro: function() {
        console.log(this.name + " from " + this.city)
    }
}
let object2 = {
    name: 'Melinda',
    city: 'Brentwood'
}

//Never do this, massive performance cost
object2.__proto__ = object;


Object.prototype
Function.prototype
//Chains continue until null

//Will always inherit from the object highest up the chain first
//Will then look for any keys that match the prototypes