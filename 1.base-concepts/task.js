"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  
  const d = b*b - 4*a*c;
  
  if (d === 0) {
    arr = [(-b / (2 * a))]; 
  } 

  if (d > 0) {

    arr = [((-b + Math.sqrt(d) ) / (2 * a)) , ((-b - Math.sqrt(d) ) / (2 * a))];
    
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (isNaN(percent) === true || isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true) {
    console.log('Результат должен быть числом!');
    return false;
  }

  let P = 1/12 * percent;
  let S = amount - contribution; 
  let paymentOfMonth = S * (P + (P / (((1 + P)^n) - 1)));
  let totalAmount = paymentOfMonth * countMonths;
  let numberDayOfLoan = Number(totalAmount.toFixed(2));
  let numberMonthOfLoan = Number(paymentOfMonth.toFixed(2));

  console.log(`Ежемесячный платеж ${numberMonthOfLoan} рублей \n Итого будетзаплачено за ${countMonths} месяцев ${numberDayOfLoan} рублей`);
  return numberDayOfLoan;
}