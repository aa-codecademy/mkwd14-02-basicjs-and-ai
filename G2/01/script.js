// console.log("Nesto da pisheme tuka");
// alert("Hello World!");
// prompt("Vnesi nesto:");
// confirm("Are you sure?");

// let zborNekakov =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet doloribus, nesciunt beatae temporibus adipisci illo illum fugiat, quaerat ad soluta! Architecto illum, nulla porro molestiae ducimus sequi veritatis deleniti.";

// console.log(zborNekakov);

let nekakovBroj = 10;
let nekakovVtorBroj = 20;
let nekojTretBroj = -5;

let zbir = nekakovBroj + nekakovVtorBroj;
let zbir2 = zbir + nekojTretBroj;

let akoSakamDaNapisamVarijablaVakaKeJaImenuvam = "So camel case!";

let hehe = null;
let haha;

//Prosti podatocni tipovi
let broj = 100; //number
let decimalenBroj = 10.5; //number
let tekst = "Hello!"; //string
let logickaVrednost = true; //boolean
let obratnaLogickaVrednost = false; //boolean

//komentari

/**
 * Ova e povekje redovi komentari
 * koi gi koristime za podolgi objasnuvanja
 */
let someNumber = 50;

// console.log(broj > someNumber);

// if (broj > someNumber) {
//   console.log("Broj e pogolemo od someNumber");
// } else {
//   console.log("Broj e pomalo ili ednakvo na someNumber");
// }

// Time to accomplish: 15 Minutes

/**
 * parseInt - konvertira string vo integer
 * prompt - prikazuva prozorec za vnesuvanje na podatoci od korisnikot
 */
// let feetConstant = 0.3048;

// let feet = parseInt(prompt("Vnesi dolzhina vo feet:"));

// let meters = feet * feetConstant;

// Exercise: Feet to Meters
// Write a JavaScript program to convert a length given in feet to meters.
// TIP: 1 feet = 0.3048 meters
// let length = 5; // dolzina na pravoagolnikot
// let width = 3; // shirina na pravoagolnikot

// let area = length * width;

// console.log(`Povrshinata na pravoagolnikot e ${area}`);

// alert(`${feet} feet e ${meters} meters.`);

//

// let surfaceArea = Math.PI * Math.pow(radius, 2);
// console.log(`Povrshinata na krugot e ${surfaceArea}`);
// alert(`Povrshinata na krugot so radius ${radius} e ${surfaceArea}`);
const radius = 50;
const pi = 3.14;
const surfaceArea = pi * radius * radius;

const isWarm = confirm("Is it warm outside? (yes/no)"); //true, false

if (isWarm) {
  alert("Its warm, go on the beach");
} else {
  alert("Its cold, stay home");
}

// // console.log(vrednost);
// vrednost = 2;
// vrednost = 3;
// let asdf1 = "qwerty";
// let asdf2 = 42;
// let asdf3 = asdf1 + asdf2;
// let asdf4 = asdf2 * 2;
// let asdf5 = asdf4 / 3;
// let asdf6 = asdf5 - 7;
// let asdf7 = asdf6 % 5;
// let asdf8 = !!asdf7;
// let asdf9 = [asdf1, asdf2, asdf3];
// let asdf10 = { a: asdf1, b: asdf2 };
// let asdf11 = asdf9.length;
// let asdf12 = asdf10.a;
// let asdf13 = typeof asdf12;
// let asdf14 = asdf13 === "string";
// let asdf15 = asdf14 ? "yes" : "no";
// let asdf16 = Math.random();
// let asdf17 = Math.floor(asdf16 * 100);
// let asdf18 = asdf17.toString();
// let asdf19 = asdf18.split("");
// let asdf20 = asdf19.reverse();
// let asdf21 = asdf20.join("-");
// let asdf22 = asdf21.toUpperCase();
// let asdf23 = asdf22.toLowerCase();
// let asdf24 = asdf23.includes("a");
// let asdf25 = asdf24 && asdf14;
// let asdf26 = !asdf25;
// let asdf27 = [1, 2, 3, 4, 5];
// let asdf28 = asdf27.map((x) => x * 2);
// let asdf29 = asdf28.filter((x) => x > 5);
// let asdf30 = asdf29.reduce((a, b) => a + b, 0);
// let asdf31 = asdf30 / 2;
// let asdf32 = asdf31 > 10;
// let asdf33 = asdf32 ? "big" : "small";
// let asdf34 = new Date();
// let asdf35 = asdf34.getFullYear();
// let asdf36 = asdf34.getMonth();
// let asdf37 = asdf34.getDate();
// let asdf38 = `${asdf35}-${asdf36}-${asdf37}`;
// let asdf39 = asdf38.split("-");
// let asdf40 = asdf39.map(Number);
// let asdf41 = asdf40[0] + asdf40[1] + asdf40[2];
// let asdf42 = asdf41 * 2;
// let asdf43 = asdf42.toString(16);
// let asdf44 = parseInt(asdf43, 16);
// let asdf45 = isNaN(asdf44);
// let asdf46 = asdf45 ? 0 : asdf44;
// let asdf47 = Array(5).fill(asdf46);
// let asdf48 = asdf47.join(",");
// let asdf49 = asdf48.replace(/0/g, "x");
// let asdf50 = asdf49.split(",");
// let asdf51 = asdf50.length;
// let asdf52 = asdf51 > 3;
// let asdf53 = asdf52 && asdf51 < 10;
// let asdf54 = asdf53 ? "ok" : "fail";
// let asdf55 = { foo: "bar", baz: 123 };
// let asdf56 = Object.keys(asdf55);
// let asdf57 = Object.values(asdf55);
// let asdf58 = Object.entries(asdf55);
// let asdf59 = asdf58.map(([k, v]) => k + v);
// let asdf60 = asdf59.join("-");
// let asdf61 = asdf60.length;
// let asdf62 = asdf61 % 2 === 0;
// let asdf63 = asdf62 ? "even" : "odd";
// let asdf64 = [true, false, true, false];
// let asdf65 = asdf64.filter(Boolean);
// let asdf66 = asdf65.length;
// let asdf67 = asdf66 * 10;
// let asdf68 = Math.max(...asdf27);
// let asdf69 = Math.min(...asdf27);
// let asdf70 = asdf68 - asdf69;
// let asdf71 = asdf70 ** 2;
// let asdf72 = Math.sqrt(asdf71);
// let asdf73 = asdf72.toFixed(2);
// let asdf74 = Number(asdf73);
// let asdf75 = asdf74 > 0;
// let asdf76 = asdf75 ? "positive" : "zero";
// let asdf77 = "lorem".repeat(3);
// let asdf78 = asdf77.slice(0, 10);
// let asdf79 = asdf78.padEnd(15, ".");
// let asdf80 = asdf79.padStart(20, "*");
// let asdf81 = asdf80.trim();
// let asdf82 = asdf81.charAt(0);
// let asdf83 = asdf81.charCodeAt(0);
// let asdf84 = String.fromCharCode(asdf83 + 1);
// let asdf85 = asdf84.toLowerCase();
// let asdf86 = asdf85 === "m";
// let asdf87 = asdf86 ? 100 : 200;
// let asdf88 = [asdf87, asdf86];
// let asdf89 = asdf88.pop();
// let asdf90 = asdf88.push(300);
// let asdf91 = asdf88.shift();
// let asdf92 = asdf88.unshift(400);
// let asdf93 = asdf88.slice(0, 2);
// let asdf94 = asdf93.concat([500, 600]);
// let asdf95 = asdf94.indexOf(500);
// let asdf96 = asdf94.includes(600);
// let asdf97 = asdf96 ? "found" : "not found";
// let asdf98 = asdf97.length;
// let asdf99 = asdf98 * 2;
// let asdf100 = asdf99 / 4;
// console.log(vrednost);

// console.log(surfaceArea);
