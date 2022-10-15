'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
  if (discriminant < 0) {
  	arr.push('');
  } else if (discriminant === 0) {
  		arr.push(-b/(2*a));
  } else if (discriminant > 0) {
  		arr.push(-b + Math.sqrt(d) )/(2*a);
  		arr.push(-b - Math.sqrt(d) )/(2*a);
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let mainDebt = amount - contribution;
  let creditTerm = 

  return totalAmount;
}
