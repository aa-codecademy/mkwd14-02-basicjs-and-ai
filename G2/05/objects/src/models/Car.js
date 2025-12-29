export default class Car {
  constructor(brand, model, year, color) {
    //properties derived from parameters
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;

    this.isOn = false; // default property
    this.fuelLevel = 0; // default property
  }

  startEngine() {
    if (this.fuelLevel <= 0) {
      console.log(
        `${this.brand} ${this.model} cannot start engine. Fuel level is ${this.fuelLevel}%. Please refuel.`
      );
      return;
    }
    if (this.isOn) {
      console.log("KHHHHHHK");
      console.log(`${this.brand} ${this.model} engine is already on.`);
      return;
    }
    this.isOn = true;
    console.log(`${this.brand} ${this.model} engine started.`);
  }

  stopEngine() {
    if (!this.isOn) {
      console.log(`${this.brand} ${this.model} engine is already off.`);
      return;
    }
    this.isOn = false;
    console.log(`${this.brand} ${this.model} engine stopped.`);
  }

  refuel() {
    this.fuelLevel = 100;
    console.log(`${this.brand} ${this.model} refueled to ${this.fuelLevel}%.`);
  }

  repaint(color) {
    this.color = color;
  }
}
