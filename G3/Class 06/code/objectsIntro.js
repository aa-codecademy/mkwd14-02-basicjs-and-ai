//let roomTypes = "test";

let hotel = {
    //key-value pairs of properties and methods and their values

    //key : value , //we put comma if we want to add more key-value pairs
    name: "Aleksandar Palace",
    numberOfRooms: 100,
    hasGym: true,
    roomTypes: ['single', 'double', 'suite'],
    printRoomTypes: function () {
        for (let roomType of this.roomTypes) { //with this we access the propery roomTypes of this concrete object
           console.log(roomType);
        }
    }
}

hotel.printRoomTypes();
console.log(hotel.name);
console.log(hotel.hasGym);