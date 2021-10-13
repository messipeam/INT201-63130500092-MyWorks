//Array.prototype.map()

//syntax
//Arrow function
/*map((element) => {...})
map((element, index) => {...})
map((element, index, array) => {...})*/

//Ability

/*
- map() นั้นจะมีลักษณะคล้ายกับ ForEach ก็คือการวน loop ใน array แต่ละ element ใน array ก็จะนำไปผ่าน function ที่เรากำหนดไว้ แต่ map นั้นจะต่างกันออกไปตรงที่ จะมีการ return ค่าผ่าน function ที่เรากำหนดไว้ โดยค่าที่ได้จากการ return จะเป็น Array 
- map() ใช้ในการสร้างข้อมูลชุดใหม่จาก Array ชุดเดิมที่ได้เราเรียกใช้ ผ่าน function ที่เรากำหนดไว้ได้
*/

//How to use






//Example 3 case use map()
//---------------------------------------------------
//element
/*Case 1 กรณีแรก หากเรามีรายชื่อหนัง 1 ชุดเป็นเก็บเป็น Array แต่รายชื่อหนังที่ถูกเก็บไว้นั้นขึ้นต้นด้วยตัวพิมพ์ใหญ่และลงท้ายด้วยตัวพิมพ์เล็กทั้งหมด แต่เราอยากให้รายชื่อหนังนั้นเปลี่ยนเป็นตัวพิมพ์ใหญ่ทั้งชุด
ดังนั้นเราสามารถนำ method map() มาช่วยในกรณีนี้ได้*/

let movies = ['Spiderman','Iron man','Batman','Avengers','Star wars','Back to the future','Harry Potter']

let movieToUppercase = movies.map((nameMovie) => {
    return nameMovie.toUpperCase();
})

console.log(movieToUppercase);

/*Case 2 หากเรามีชุดข้อมูลตัวเลขเก็บเป็น Array เลขคู่ตั้งแต่ 2 - 20 เราสามารถหาค่ายกกำลัง 2 หรือค่ายกกำลังอื่นๆของชุดข้อมูลนี้ ของตัวเลขที่เก็บเอาไว้ในชุดข้อมูลเหล่านี้ได้โดยใช้ map() เช่นกัน */

let num = [2,4,6,8,10,12,14,16,18,20]



let result = num.map((x) =>{
    return Math.pow(x,2)
})

console.log(result);


/*Case 3 */

let fruit = ['Apple','Banana','Mango','Orange','Strawberry'];

let countString = fruit.map((x) =>{
    return x.length;
})
console.log(countString);










//---------------------------------------------------