//Array.prototype.concat()

//syntax

/*concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN) */


//Ability
//ใช้สำหรับสร้างตัวแปร Array ใหม่โดยการรวม Array ตั้งแต่ 2 Array ขึ้นไป จะไม่เปลี่ยนแปลง Array ที่มีอยู่แต่จะคืนค่า Array ใหม่แทน



//How to use








//Example 3 case use concat()
//---------------------------------------------------
//syntax -> concat()

//case1

let string = ['Hello','Hi'];
let greeting = string.concat();
console.log(greeting);

//case2

let books = ['Naruto','Attack on titan','One-piece','Dragonball'];
let japanese_books = books.concat();
console.log(japanese_books);

//case3

let colors = ['Red','Green','Blue'];
let rgb = colors.concat();
console.log(rgb);


//syntax -> concat(value0)
//case1

// สร้าง Attribute ของเกมเป็น Array ที่เก็บรายชื่อเกมขึ้นมา จำนวน 2  Attribute 
const game1 = ['Mario','Fifa','Final Fantasy']; 
const game2 = ['ROV','Dota2','CSGO'];
const game3 = game1.concat(game2); // หากเราอยากนำรายชื่อเกมจาก Attribute game1 game2 มารวมกัน สามารถทำได้โดยใช้คำสั่ง concat()
console.log(game3);

//case2

const number1 = [1,2,3,4,5];
const number2 = [6,7,8,9,10];
const numbers = number1.concat(number2);
console.log(numbers);

//case3
const city1 = ['Thailand','Laos','Singapore'];
const city2 = ['Indonesia','Japanese','Chinese'];
const cities = city1.concat(city2);
console.log(cities);






//syntax -> concat(value0,value1)
//case1
// กรณีที่เราสร้าง Attribute ที่เป็น Array 3 Attribute แล้วอยากนำข้อมูลทั้งหมดมารวมกันก็สามารถทำได้ โดยใช้ syntax -> concat(value0, value1)

const fruit1 = ['Apple','Banana'];
const fruit2 = ['Orange','Grape'];
const fruit3 = ['Mango','Strawberry'];

const fruits = fruit1.concat(fruit2,fruit3);
console.log(fruits);

//case2

const student1 = ['Peam','Fern','Zeed'];
const student2 = ['Preng','Praew'];
const student3 = ['Field'];
const students = student1.concat(student2,student3);

console.log(students);


//case3

const barcelona = ['Messi','Neymar','Luis Suarez'];
const realmadrid = ['Ronaldo','Gareth Bale','Karim Benzema'];
const chealsea = ['Lampard','Lukaku','Mount'];

const footballPlayer = barcelona.concat(realmadrid,chealsea);

console.log(footballPlayer);



//syntax -> concat(value0, value1)
//case1






//case2





//case3