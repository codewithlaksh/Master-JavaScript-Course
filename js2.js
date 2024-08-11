/*
1.String
2.Number
3.Bigint
4.Boolean
5.Undefined
6.null
7.Symbol
8.Object
*/

const surname = "Kumar";
let name1 = "Lakshyaraj " + 2009;
let name2 = 'Rohan ' + surname;
let name3 = `Raman ${surname}`;
let name4;
let name5 = null;

// console.log(name1)
// console.log(name2)
// console.log(name3)

// console.log(typeof 9)
// console.log(typeof 9.8)
// console.log(typeof true)
// console.log(typeof name4)
// console.log(typeof name5)

let obj = {1: 'One', 2: 'Two'}
let arr = [{1: 'One'}, {2: 'Two'}]

// console.log(typeof obj)
// console.log(typeof arr)


let num = 973749028824724892842390282938492848;

// num = BigInt(num)
num = 0b1000000000011n
console.log(typeof num)
// num = String(num);

// console.log(typeof num)

