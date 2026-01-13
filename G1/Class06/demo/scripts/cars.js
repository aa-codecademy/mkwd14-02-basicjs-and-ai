let carObj = {
  model: "Lada Kalina",
  color: "Red",
  year: 2013,
  fuel: 50,
  fuelConsumption: 6.6,
  calculateFuelForDistance: function(distance){
    return distance * (this.fuelConsumption/100);
  }
}

function Car(model, color, year, fuel, fuelConsumption) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.fuelConsumption = fuelConsumption;
    
    this.calculateFuelForDistance = function(distance) {
        return distance * (this.fuelConsumption / 100);
    }
}

let mazda = new Car('Mazda', 'Red', 2020, 'Petrol', 10);
let toyota = new Car('Toyota', 'Blue', 2020, 'Petrol', 5);
let nisan = new Car('Nisan', 'Green', 1999, 'Diesel', 7);
let suzuki = new Car('Suzuki', 'White', 2025, 'Hybrid', 2);

console.log(mazda.calculateFuelForDistance(400));
console.log(toyota.calculateFuelForDistance(400));
console.log(nisan.calculateFuelForDistance(400));
console.log(suzuki.calculateFuelForDistance(400));