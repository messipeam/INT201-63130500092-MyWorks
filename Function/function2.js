let VAT=0.07 //global variable (let)

//priWithVat - global function

function priceWithVat(price){
    //price is a local scope
    //header is a local scope
    let header = 'SIT,KMUTT';


    function staff(name){
        //price is a local scope
        //header is a local scope
        let staffName = name;
        //staff is a nested(inner) function
        return header + price + staffName + VAT;
    }
    return price * VAT + price; // VAT is a free variable
}
//function สามารถอ้างตัวแปรที่เป็น global หรือ local ก็ได้
console.log(priceWithVat(100));

//non-pure function

//pure function

function getPrice(price){
    return price;
}


function getScore(){
    let mid = 10;
    let final = 30;

    function yourScore(){
        return fname + ' scored ' + (mid + final);
    }
}