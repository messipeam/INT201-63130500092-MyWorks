function calBMI() {
    let weightP = document.getElementById("weightP").value;
    let heightInch = document.getElementById("heightInch").value;
    let weightKg = weightP * 0.453592;
    let heightMeter = heightInch * 0.0254;
    let BMI = (weightKg / Math.pow(heightMeter, 2));
    document.getElementById("output").innerHTML = BMI;
    console.log(`You BMI is ${BMI}`);
}


function weightPtoKg(){
    var weightP = document.getElementById("weightP").value;
    var weightKg = weightP * 0.453592;
    return weightKg;
}

function heightInchToMeter(){
    var heightInch = document.getElementById("heightInch").value;
    var heightMeter = heightInch * 0.0254;
    return heightMeter;
}
