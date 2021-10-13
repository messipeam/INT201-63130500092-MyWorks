/*let student = {
    name: ['Panupong','Supawit'] ,
    grade: [3.75,4.00]
}*/



for (const property in student) {
    console.log(`${property} : ${student[property]}`);
}


function calScore(score){
    if(score >= 50 && score <= 100){
        console.log(`Your score is ${score}, Pass exam`)
    }
    if(score < 50 && score >= 0){
        console.log(`Your score is ${score}, Fail exam`);
    }
    if(score < 0 || score > 100){
        console.log(`Error score must not less than 0 and more than 100`);
    }

}

calScore(101);

//สุ่มตัวเลข
const randomNum = () =>{
    return Math.floor(Math.random() * 3);

}

let movies = ['Spiderman','Black Widow','Iron man'];

let random_movie = movies[randomNum()];

console.log(random_movie);

//function

const students = { 
    name: 'Panupong', 
    mid_score: 40,
    final_score: 43,

}

const Cal_Score = (mid_score,final_score) =>{
    return mid_score + final_score;

}

students.Cal_Score = Cal_Score;

console.log(students.Cal_Score(students.mid_score,students.final_score));

let per1 = {
    id:1, 
    name :"Peam"}
  let per2 = {
    id:1, 
    name :"Peam"}

per2 = per1;
console.log(per2 == per1);

//spread operator

let name1 = ['Panupong','Supawit','Nitchaphon'];
let name2 = ['Kaninnut'];
let name3 = [...name1,...name2];

console.log(name3);

//shallow copy
let graphic_Card_A = {
    series: 'GTX1050Ti',
    memomy: 4
}

let graphic_Card_B = {...graphic_Card_A};

graphic_Card_B.memomy = 6;

console.log(graphic_Card_A);
console.log(graphic_Card_B);

//iterating arrays 
let letters = [...'Hellow World'];

let msg = '';
for (const iterator of letters) {
    msg += iterator + ', '
}
console.log(letters)


//Array.of,Array.from

let name_1 = Array.of('Peam','Notch');
let name_2 = Array.of('Phai');
let name_3 = Array.of(name_1,name_2);
console.log(name_3);