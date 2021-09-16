//Array literals
let arr1 = [] //array
let obj = {} //object

console.log(typeof arr1);
console.log(arr1.length);

arr1 = [100,true,1,'Unknown',['A','B','C'], {id: 1, name:'Adam'}] //array is untype ง่ายๆคือ เก็บ type อะไรก็ได้

console.log(arr1[arr1.length-1]);

console.log(arr1[arr1[2]]); //[integer expression]

console.log(arr1[4][2]) //access 'C'

console.log(arr1[5]['name']); //access name

arr1[4][0] = 'X'; //assign ค่า
console.log(arr1[4])

arr1[0] = 20;
console.log(arr1[0]);


//Spread operator ตัวเก่าไม่เปลี่ยน เป็น shallow copy
let movieA = ['Spiderman', 'Ironman', 'X-men']
let MovieB = ['Avenger', ...movieA, 'Black-Widow']

console.log(MovieB);

//include object in array with spread operator
let per1 = [{
    id:1,
    name:"Adam"
}] //การ copy value ที่เป็น Address ค่าจึงเปลี่ยน

let per2 = [ ...per1 ];
per2[0].name = 'Joe';
console.log(per1);

//include primitive variable in array with spread operator

let per3 = [10]
let per4 = [ ...per3 ];
per4[0] = 20;
console.log(per3);

//Array.of(), Array.from()
let m = Array.of('a','b','c');
let n = Array.from(m);

console.log(n)

({ a, b, ...rest } = { a: true, b: 20, c: 30, d: 40 });

console.log(a); // 10
console.log(b); // 20
console.log(typeof a);
console.log(typeof b);
console.log(typeof rest); // {c: 30, d: 4