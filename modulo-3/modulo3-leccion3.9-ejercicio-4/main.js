"use strict";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

const [first, second, third] = users;
console.log("primero: " + first.name + ", " + first.time);
console.log("segundo: " + second.name + ", " + second.time);
console.log("third: " + third.name + ", " + third.time);
