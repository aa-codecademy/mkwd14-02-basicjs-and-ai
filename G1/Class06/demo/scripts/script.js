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

console.log(obj);

let obj2 = new Object();
obj2.name = 'Quay2';
obj2.rooms = 50;
obj2.booked = 40;
obj2.gym = false;
obj2.roomTypes = ['single', 'double', 'suite', 'presidential'];
obj2.checkAvailability = function() {
    return this.rooms - this.booked;
}

console.log(obj2);

// get value
let a = obj.name;
let aa = obj['name'];

// set value
obj.booked = 40;
obj['booked'] = 40;

// calling method
console.log(obj.checkAvailability());
console.log(obj['checkAvailability']());

delete obj.gym;
obj.hasGym = false;