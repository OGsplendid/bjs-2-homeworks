'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
  if (discriminant < 0) {
  	return;
  } else if (discriminant === 0) {
  		arr.push(-b/(2*a));
  } else if (discriminant > 0) {
  		arr.push((-b + Math.sqrt(discriminant))/(2*a));
  		arr.push((-b - Math.sqrt(discriminant))/(2*a));
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
	if (isNaN(+percent) === true) {
		return (`Параметр /"Процентная ставка/" содержит неправильное значение ${percent}`);
	}
	if (isNaN(+contribution) === true) {
		return (`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);
	}
	if (isNaN(+amount) === true) {
		return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);
	}
  	let totalAmount;
  	let mainDebt = amount - contribution;
  	let currentMonth = new Date().getMonth();
  	let currentYear = new Date().getFullYear();
  	let yearDiff = date.getFullYear() - currentYear;
  	let termInMonths = yearDiff * 12 - currentMonth + date.getMonth();
  	let monthlyPay = mainDebt * (percent/1200 + (percent/1200 / (((1 + percent/1200)**termInMonths) - 1)));
  	totalAmount = +(monthlyPay * termInMonths).toFixed(2);
  	console.log(totalAmount);

  	return totalAmount;
}
