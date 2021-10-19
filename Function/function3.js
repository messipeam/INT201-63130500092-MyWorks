let greeting = 'Welcome everyone in family';

function outer(name) {
  //higher order function
  let family = [];
  family.unshift(name);

  //inner is a closure function
  function inner(newMember) {
    console.log(greeting);
    family.unshift(newMember);
    return family;

  }
  return inner; //return inner function

}
const myInner = outer('Umaporn');
console.log(myInner('John'));

console.log(myInner('SuSan'));
return console.log(`${cTemp} Celcius is ${ftemp} Fahrenheit`);

//--------------------------
const students = [
  {name : 'Panupong', age : 20, },
  {name : 'Nitchaphon', age : 19,},
  {name : 'Kaninnut', age : 18,},
]

const result = students.find(({age}) => 
    age === 18
   
)

console.log(result);

const result2 = students.filter((x) => {
  return x.age<20;
})

console.log(result2);



function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();


function outer(lastName)
{
  const name = 'Bob';

  function inner(lastName)
  {
    // here we have access to the outer function's scope
    // thus it IS a closure regardless whether we return the function or not
    console.log(name + ' ' + lastName);
  }
  
  inner(lastName);
}

outer('Marley');