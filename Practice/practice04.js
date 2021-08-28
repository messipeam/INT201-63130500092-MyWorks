//โปรแกรมแปลง celsius เป็น fahrenheit แบบรับค่าจาก input box
//var celcius = document.getElementById("c1").value;
//var fahrenheit;

function cTof2(){
    var celcius = document.getElementById("c2").value;
    var ctoFah = (celcius * 9) / 5 + 32
    var messege = celcius + ' Celsius ' + ' = ' + ctoFah + ' Fahrenheit'
    console.log(messege)
}

//console.log(cTof());