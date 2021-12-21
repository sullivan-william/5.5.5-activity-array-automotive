//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor() {
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }

    loadPassenger(num) {
        if(this.passenger < this.maximumPassengers) {
            let availableRoom = true
        }
    }

    start() {
        if(this.fuel > 0) {
            let start = true
        }
    }

    scheduleService(mileage) {
        if(mileage > 30000) {
            let timeForMaintenance = true
        }
    }
}