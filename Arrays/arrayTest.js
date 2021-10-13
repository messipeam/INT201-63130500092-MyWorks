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




let product=[
    {id:1, price:10},
    {id:2, price:5},
    
]
//... 1.) spread operator 2.)rest parameter

let newProduct = {id: 3, price:20};

//shallow copy -> copy แบบตื้นๆ 
product = [...product,newProduct]

//deep copy
product = [...product,{...newProduct}]
newProduct.price = 100;

console.log(product);




let products = [

    { id: 1, price: 10 },
  
    { id: 2, price: 5 }
  
  ];
  
  let newProduct = { id: 3, price: 20 };
  
  console.log(products);
  
  products = [...products, { id: newProduct.id, price: newProduct.price }];
  //เก็บใน address ใหม่? คนละพื้นที่

  let a = [1,2,3,4,5];

for (let i of a) {
    console.log(i*2);
}

  console.log(a);   
  

let num = [1,2,3]
let num1
let num2

[num1,num2] = num

console.log(num1)

[movie1,movie2,...movie3] = ['Spiderman','Batman','Superman','Ironman','Black Widow'];
console.log(movie3)
console.log(movie3.length)
console.log(typeof(movie3))

//------------------------------------------------------------------------
//Rest parameter
function getStudentInClass(instructor, ta, ...students){
    return students;
}

let studentSec2 = getStudentInClass('Umaporn','Tisanai','A','B','C');
let studentSec3 = getStudentInClass('Umaporn','Tisanai','D','E','F');

studentSec2.push(...studentSec3);


[instructor, ta, ...student] = ['Umaporn','Tisanai','A','B','C'];

studentSec2[0] = 'Panupong';
student[0] = 'Panupong';
console.log(studentSec2)
console.log(student)

let a = ['Hello','Hi']

console.log(a.reverse())
