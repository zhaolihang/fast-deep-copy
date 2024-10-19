"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deep_copy_1 = require("./deep-copy");
var a = { dataA: 10, b: null };
var b = { dataB: 20, a: null };
a.b = b;
b.a = a;
var newA = (0, deep_copy_1.deepCopy)(a);
console.log(newA.dataA === 10); //true
console.log(newA.b.dataB === 20); //true
console.log(newA.b.a === newA); //true
