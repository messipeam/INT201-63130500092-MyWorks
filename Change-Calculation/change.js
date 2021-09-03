function calculateChange(price, cash){
  let change = cash - price;
  let result = {};
  let amount;
  const cashType = [
    "Five-hundred Baht",
    "'One-hundred Baht'",
    "Fifty Baht",
    "Twenty Baht",
    "Ten Baht",
    "Five Baht",
    "Two Baht",
    "One Baht",
  ];
  const cashValue = [500, 100, 50, 20, 10, 5, 2, 1];

  for (let i = 0; i < cashValue.length; i++) {
    amount = Math.floor(change / cashValue[i]);
    if (amount > 0 ) {
      result[cashType[i]] = amount;
    }
   
    
}
    return result;
  
}

console.log(calculateChange(250,500));




