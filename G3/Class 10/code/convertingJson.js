//js object

let academy = {
    name: "Avenga Academy",
    group: "G3",
    subject: "BasicJS",
    trainers: ["Tijana"],
    numberOfStudents: 15,
    isRemote: true
};

//converting to JSON
//we pack the object in a string format in order to send it to a server or save it in a file
//the client and the server communicate via and understand the JSON format
let jsObjectToJson = JSON.stringify(academy); //serialization
console.log(jsObjectToJson);

let jsonToJsObject = JSON.parse(jsObjectToJson); //deserialization
console.log(jsonToJsObject);