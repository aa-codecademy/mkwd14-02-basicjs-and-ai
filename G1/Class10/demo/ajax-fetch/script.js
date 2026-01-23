let obj = {
    name: 'Trajan',
    lastName: 'Stevkovski',
    age:38,
    courses: [
        'Html',
        'JS basic',
        'JS advanced'
    ],
    address: {
        street: 'some street',
        number: 10
    },

    getAddress: function() {
        return this.address;
    }
}

let jsonObj = JSON.stringify(obj);

// console.log(jsonObj);

let toJson = JSON.parse(jsonObj);

// console.log(toJson);
// console.log(toJson.name);