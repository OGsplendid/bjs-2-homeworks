function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
  	let hash = args.join(',');
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
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0;
	function wrapper(...args) {
		wrapper.allCount++;

		if (timeoutId === null) {
			wrapper.count++;
			func(...args);
		}

		clearTimout(timeoutId);
		timoutId = setTimout(() => {
			wrapper.count++;
			func(...args)
		}, delay);
	}
	return wrapper;
}
