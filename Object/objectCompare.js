//Object
let per1 = {
    id:1, 
    name :"Peam"}
  let per2 = {
    id:1, 
    name :"Peam"}
  
  per2=per1; //per2 ไป assign ค่า property จาก per 1 เข้าไป
  console.log(per1 == per2); // false object เทียบกันจะไม่เท่ากัน object ไม่ได้เปรียบเทียค่าใน value แต่เปรียบเทียบค่าด้วย address ต้องมีการ assign ค่า 
                              //เมื่อถูกสร้างมันจะเก็บค่าจริงแยกไว้แล้ว assign reference ให้ variable แทน และการเปรียบเทียบด้วย == หรือ === เมื่อเอามาเปรียบเทียบ object มันจะเปรียบเทียบแค่ว่า reference ไปที่เดียวกันหรือเปล่า 
                              //ไม่ได้เปรียบเทียบ value ที่ reference ต้องกำหนด ให้ Object นี้เท่ากับตัวนี้ก่อน
                               // true, เปรียบเทียบ memory address
  
  //Primitive variable เก็บเป็น single value
  let num1 = 20;
  let num2 = 10;
  num2 = num1;
  
  console.log(num1 == num2);
  num2 = 55;
  console.log(num1)
  
  //arr1 andd arr2 are object variable because array in JS are object
  let arr1 = [0,2,4,6];
  let arr2 = [0,2,4,6];
  console.log(arr1 === arr2); //false เหตุผลเดียวกับ object 
  
  arr2 =arr1 //memory address of arr1 to arr2
  arr2[1] = 5;
  console.log(arr1[1]);
  console.log(arr1)
  console.log(arr2)
  
  function doSomething(value){ //value (formal parameter) = item1(actual parameter)
      value.name = 'unknown'
  }
  let item1 ={ name : 'ABC'};
  doSomething(item1);
  console.log(item1.name)
  
  function doSomething2(value){ //value=isNum , primitive ต่างจาก Object ที่จะเป็นการชี้ memory address
                                //ถ้าเป็น primitive value ใคร value มัน
      value = 100;
  }
  let isNum = true;
  doSomething2(isNum);
  console.log(isNum);//true  

  function isStudentEqual(obj1,obj2){
      return obj1.id === obj2.id;
  }

  