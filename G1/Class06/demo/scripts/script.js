let obj = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite'],

    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

// console.log(obj);

let obj2 = new Object();
obj2.name = 'Quay2';
obj2.rooms = 50;
obj2.booked = 40;
obj2.gym = false;
obj2.roomTypes = ['single', 'double', 'suite', 'presidential'];
obj2.checkAvailability = function() {
    return this.rooms - this.booked;
}

// console.log(obj2);

// get value
let a = obj.name;
let aa = obj['name'];

// set value
obj.booked = 40;
obj['booked'] = 40;

// calling method
// console.log(obj.checkAvailability());
// console.log(obj['checkAvailability']());

delete obj.gym;
obj.hasGym = false;



function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.hasGym = false;

    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
}

let holidayInn = new Hotel('Holiday Inn', 120, 110);
let meriot = new Hotel('Meriot', 200, 100);

// console.log(holidayInn);
// console.log(meriot);
holidayInn.rooms = 400;

//console.log(holidayInn.checkAvailability());



function checkThis() {
    console.log(this);
}
checkThis();
let shape = {
    width: 100,
    height: 100,
    checkThisInObj: function() {
        console.log(this);
    }
}
shape.checkThisInObj();




let width = 600;
let shape1 = {
    width: 400
};

function showWidth() {
    console.log(this);
    console.log(this.width);
}

showWidth();

shape1.newShowWidth = showWidth;
shape1.newShowWidth();

let htl = new Hotel('name', 10, 10);
htl.width = 345678;
htl.showWidth = showWidth;
htl.showWidth();

// window.newShowWidth = showWidth;
// window.newShowWidth();
