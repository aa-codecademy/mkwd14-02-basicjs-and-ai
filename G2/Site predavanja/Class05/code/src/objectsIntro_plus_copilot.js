let hotelName = "Our hotel";
let numOfRooms = 20;

// *** Object literal ***
//let hotel = {};
let hotel = new Object();
hotel.name = "Our hotel";
hotel.numOfRooms = 30;
hotel.bookedRooms = 10;
hotel.numOfStars = 4;

hotel.greeting = function(){
    alert("Hello from our hotel");
};

hotel.isAvailable = function(numOfRoomsToReserve){
    //this.numOfRooms -> hotel.numOfRooms
    let freeRooms = this.numOfRooms - this.bookedRooms; // this -> hotel
    if(freeRooms >= numOfRoomsToReserve){
        console.log(`We reserved ${numOfRoomsToReserve} to you`);
    }
    else{
        console.log('Sorry, we are booked!');
    }
}

console.log(`Num of rooms in our hotel: ${hotel.numOfRooms}`);
console.log(`Welcome to ${hotel.name}`);
console.log(hotel);

hotel.greeting();
hotel.isAvailable(23);

console.log(`Num of stars of the hotel: ${hotel.numOfStars}`);
//..........
hotel.numOfStars = 5;
console.log(`Num of stars of the hotel after update: ${hotel.numOfStars}`);

//========================================
// Copilot: Suggest a way to add a new property "location" to the hotel object
// and a method "checkInGuest" that decreases bookedRooms by 1 if available
hotel.location = "Downtown";
hotel.checkInGuest = function() {
    if (this.bookedRooms < this.numOfRooms) {
        this.bookedRooms += 1;
        console.log("Guest checked in successfully.");
    } else {
        console.log("No available rooms to check in.");
    }
};

console.log(`Hotel location: ${hotel.location}`);
hotel.checkInGuest();
console.log(`Booked rooms after check-in: ${hotel.bookedRooms}`);
//========================================


//another example
let anotherHotel = {
    name : "Another hotel",
    numOfRooms : 60,
    hasGym : false,
    roomTypes : ["single", "double", "suite"],
    printRoomTypes : function(){
        console.log("Types of rooms:");
        for(let roomType of this.roomTypes){
            console.log(roomType);
        }
    }
}
console.log(`Welcome to ${anotherHotel.name}`);
anotherHotel.printRoomTypes();

anotherHotel.name = "Another hotel updated";
console.log(`Welcome to ${anotherHotel.name}`);
console.log(anotherHotel);

let numberOfBookedRooms = prompt("Enter num of booked rooms in another hotel:");
//ADDING PROPERTY
anotherHotel.numOfBookedRooms = parseInt(numberOfBookedRooms);
console.log(anotherHotel);

anotherHotel.canDoExercise = function(){
    return this.hasGym == true;
}

let anotherHotelHasGym = anotherHotel.canDoExercise();
console.log(`Another hotel has gym: ${anotherHotelHasGym}`);

console.log(`has property roomTypes: ${anotherHotel.hasOwnProperty("roomTypes")}`);
console.log(`has property numOfStars: ${anotherHotel.hasOwnProperty("numOfStars")}`);


//================================
// Copilot: Can you write a function for anotherHotel that tells us if the hotel can host more guests?
// It should take a number as input and return true/false based on availability
anotherHotel.canHostMoreGuests = function(numOfGuestsToHost){
    let freeRooms = this.numOfRooms - this.numOfBookedRooms;
    return freeRooms >= numOfGuestsToHost;
}

let canHost = anotherHotel.canHostMoreGuests(15);
console.log(`Can another hotel host 15 more guests? ${canHost}`);
//================================

//DELETE THE PROPERTY
console.log(`has property numOfRooms: ${anotherHotel.hasOwnProperty("numOfRooms")}`);
delete anotherHotel.numOfRooms;
console.log(`has property numOfRooms: ${anotherHotel.hasOwnProperty("numOfRooms")}`);

//========================================
// Copilot: How can you safely check if a property exists before deleting it?
// Suggest code that prevents errors if the property does not exist
if (anotherHotel.hasOwnProperty("hasGym")) {
    delete anotherHotel.hasGym;
    console.log("Property 'hasGym' deleted successfully.");
} else {
    console.log("Property 'hasGym' does not exist. No deletion performed.");
}
//========================================

// *** Object constructor ***

function Hotel(name, numOfRooms, bookedRooms, numOfStars){
    this.name = name;
    this.numOfRooms = numOfRooms;
    this.bookedRooms = bookedRooms;
    this.numOfStars = numOfStars;
    this.greeting = function(){
        alert(`Hello from our hotel ${this.name}`);
    };
    this.isAvailable = function(numOfRoomsToReserve) {
        let freeRooms = this.numOfRooms - this.bookedRooms;
        if (freeRooms >= numOfRoomsToReserve) {
            console.log(`We reserved ${numOfRoomsToReserve} to you`);
        } else {
            console.log('Sorry, we are booked!');
        }
    }
}

let hotel1 = new Hotel("Hotel 1", 12, 1, 3);
hotel.isAvailable(10);
hotel1.isAvailable(4);
hotel.greeting();

// *** Object.create() ***

let hotel2 = Object.create(hotel)
console.log(hotel2);
hotel2.name = "Hotel 2";
hotel2.numOfRooms = 10;
hotel2.bookedRooms = 2
hotel2.numOfStars = 5;
hotel2.greeting();
