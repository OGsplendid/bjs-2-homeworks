// Задание 1
function getArrayParams(arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
		avg = sum / arr.length;
	}
	return { min: min, max: max, avg: +avg.toFixed(2) };
}

// Задание 2
function worker(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}


function makeWork(arrOfArr, func) {
	let max = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const funcResult = func(arrOfArr[i]);
		if (funcResult > max) {
			max = funcResult;
		}
	}
	return max;
}

// Задание 3
function worker2(arr) {
	let min = Infinity;
	let max = -Infinity;
	let difference;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	difference = Math.abs(max - min);
	return difference;
}
