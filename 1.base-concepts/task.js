"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d == 0){
    arr.push(-b / (2 * a));
  }
  if (d > 0){
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if(isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if(isNaN(contribution)) {
     return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if(isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  if(isNaN(date)) {
    return totalAmount = `Параметр "Дата" содержит неправильное значение "${date}"`;
  }
  
  let creditBody = amount - contribution;
  let month = date.getUTCMonth() - new Date().getUTCMonth() + (date.getFullYear() - new Date().getFullYear()) * 12;
  let paymentForMonth = creditBody * (percent / 12 / 100 + (percent / 12 / 100) / ((Math.pow((1 + percent / 12 / 100), month) - 1)));
  totalAmount = Number((paymentForMonth * month).toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}