//โปรแกรมแปลง celsius เป็น fahrenheit 
var celcius = 26;
var fahrenheit;

function cTof(){
    var ctoFah = (celcius * 9) / 5 + 32
    var messege = celcius + ' Celsius ' + ' = ' + ctoFah + ' Fahrenheit'
    return messege;
}

//หาค่าต่ำสุด สูงสุด
let num = [1,4,30,5,6];
let min_value = Infinity;
let max_value = -Infinity;

for (let index = 0; index < num.length; index++) {
    if(num[index] < min_value){
        min_value = num[index];
    }
    
}
console.log(min_value);


//do-while
let count = 0;
do{
    console.log(count);
    count++;
}while (count < 10);