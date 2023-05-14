//inheritance is the ablitity to inherit properties of a class to another

class Vehicle{
    constructor(color, wheels){
        this.color =  color;
        this.wheels = wheels;
    }
}

class Car extends Vehicle{
    constructor(color, wheels, seat){
        super(color, wheels)
        this.seat = seat
    }
}

let v  =new Vehicle("red", 4)
console.log(v)

let kia = new Car("blue", 4, 6)
console.log(kia)