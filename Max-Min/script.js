//หาค่ามากน้อยใน array use for-loop
function max(array){
    let max = array[0];
    for(let i = 0 ; i  <  array.length; i++){
            if(array[i] > max){
                max = array[i];
            }
    }
    return max;
}

function min(array){
    let min = array[0];
    for(let i = 0; i< array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}

console.log(max([1,5,7,9]));

console.log(min([5,2,1,3,10]));

let num1 = [30,40,50,80,20,10];

console.log(max(num1));