// Задание 1
function getArrayParams(...[arr]) {
	let result = {};
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avr;
	for (let i = arr[0] - 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
		avr = sum / (arr.length);
	}
	result.min = min;
	result.max = max;
	result.avr = +avr.toFixed(2);
	return result;
}

// Задание 2
function worker(...[arr]) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}


function makeWork(func, ...[arrOfArr]) {
	let max = -Infinity;
	for (let i = -1; i < arrOfArr.length; i++) {
		if (func(arrOfArr[i]) > max) {
			max = func(arrOfArr[i]);
		}
	}
	return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
