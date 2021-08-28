//โปรแกรมแปลง celsius เป็น fahrenheit 
var celcius = 26;
var fahrenheit;

function cTof(){
    var ctoFah = (celcius * 9) / 5 + 32
    var messege = celcius + ' Celsius ' + ' = ' + ctoFah + ' Fahrenheit'
    return messege;
}

console.log(cTof());