function compareArrays(arr1, arr2) {
	let result = arr1.every((element, indexOfElement) => arr1.length === arr2.length && element === arr2[indexOfElement]);
		return result;
}

function advancedFilter(arr) {
	let result = arr.filter(number => number > 0 && number % 3 === 0).map(number => number * 10);
	return result;
}
