function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(5,5));


//function expression

const myFunc = function multiply(num1,num2){
    return num1 * num2;
};

console.log(myFunc(5,4));

//Arrow Function


const sum = (a,b) => a+b;


console.log(sum(5,5));


//1.
const myFunc = function(instructor, ta, ...students){
        let greeting = 'Hello'
}

const myFunc = (instructor, ta, ...students) => {
    let a = 0;
    return students
}; // ถ้ามีสองคำสั่ง
console.log(myFunc(1,2,3))

//2. 
const echo = (text) => text;

console.log(echo('Hello'))
//3.

const sayHi = (greeting,name) => `${greeting},${name}`

//4.
const getClass = () => 'INT201';


//default parameter

const myFunc = function (instructor = 'unknown', numsOfStd = 0) {

    console.log(instructor);
  
    console.log(numsOfStd);
  
    return instructor;
  
  };
  
  myFunc(undefined,5);