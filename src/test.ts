import { deepCopy } from "./deep-copy";

let a = { dataA: 10, b: null };
let b = { dataB: 20, a: null };
a.b = b;
b.a = a;

let newA = deepCopy(a);
console.log(newA.dataA === 10);     //true
console.log(newA.b.dataB === 20);   //true
console.log(newA.b.a === newA);     //true