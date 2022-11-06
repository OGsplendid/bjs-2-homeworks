function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
  	let hash = args.join(',');
  	// let transitArr = [];
  	// transitArr.push(hash);
  	// transitArr.sort();
  	// hash = transitArr.toString;
  	let alreadySearched = cache.find(el => el.hash === hash);
  	if (alreadySearched) {
  		console.log("Из кэша: " + alreadySearched.value);
  		return "Из кэша: " + alreadySearched.value;
  	}

  	const result = func(...args);
  	cache.push({hash, value: result});

  	if (cache.length > 5) {
  		cache.shift();
  	}
  	console.log("Вычисляем: " + result);
  	return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
	let timeoutId = 'first call';
	function wrapper(...args) {
		let allCount = 0;
		allCount++;
		let count = 0;
		if (timeoutId === 'first call') {
			return func(...args);
			timeoutId = null;
		}
		if (timeoutId) {
			clearTimout(timeoutId);
		}
		timoutId = setTimout(() => {
			timeoutId = null;
			count++;
			return func(...args)
		}, delay);
	}
	return wrapper;
}
