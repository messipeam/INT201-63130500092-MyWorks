function calculateChange(price, cash) {
  let change = cash - price;
  let amount;
  let result = {};
  const cashType = {
    name: [
      'FiveHundred',
      'Hundred',
      'Fifty',
      'Twenty',
      'Ten',
      'Five',
      'Two',
      'One',
    ],
    value: ['500', '100', '50', '20', '10', '5', '2', '1'],
  };

  for (let i = 0; i < cashType.value.length; i++) {
    let value = cashType.value[i];
    amount = Math.floor(change / value);
    change %= value;
    if (amount > 0) {
      result[cashType.name[i]] = amount;
    }
  }
  return result;
}

console.log(calculateChange(20,100));