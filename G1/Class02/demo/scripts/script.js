console.log('Hello');


let greeting = "Hello" + " " + "from" + " " + "Avenga Academy!";
console.log(greeting);

let hello = "Hello";
let academy = 'Avenga Academy';
let greetings = hello + ' from ' + academy + '!';
console.log(greetings);

let baseUrl = 'https://open-meteo.com';
let forcastUrl = '/v1/forecast'; 

let cb1 = 'elevation';
let cb2 = 'daily';
let cb3 = 'latitude';
let cb4 = 'longitude';

// &latitude=52.52,48.85&longitude=13.41,2.35

let url = baseUrl + forcastUrl + '?' + cb1 + '=1500' + '&' + cb2 + '=true';
console.log(url);
let url2 = baseUrl + forcastUrl + 
        '?' + cb4 + '=52.52,48.85' + '&' + cb3 + '=13.41,2.35';
console.log(url2);

let url3 = `${baseUrl}${forcastUrl}?${cb1}=1500&${cb2}=true`;
console.log(url3);


let first = 10;
let second = 'example';
let result = first + second;
console.log('Result: ' + typeof result + ' ' + result);

let num1 = 10;
let num2 = '12';
let res = num1 + num2;
console.log(`Result: ${typeof res} ${res}`);


let message = "It's really nice to be a programmer";
console.log(message);
let secondMessage = "It is really \"nice\" to be a programmer";
console.log(secondMessage);

let firstName = null;
let lastName = "Stevkovski";
console.log(firstName + lastName);
