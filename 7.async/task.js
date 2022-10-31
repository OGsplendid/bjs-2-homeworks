class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId;
	}

	addClock(time, func, id) {
		if (id === undefined) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
		} else if (this.alarmCollection.some(element => element.id === id) === true) {
			console.error('Будильник с таким id уже существует');
			return;
		}
		this.alarmCollection.push({time: time, callback: func, id: id});
	}

	removeClock(id) {
		if (this.alarmCollection.some(element => element.id === id)) {
			this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
			return true;
		} else {
			return false;
		}
	}

	getCurrentFormattedTime() {
		let currentHours = new Date().getHours();
		let currentMinutes = new Date().getMinutes();
		return `${currentHours}:${currentMinutes}`;
	}

	start() {
		let transitFunc = function checkClock() {
			let currentTime = this.getCurrentFormattedTime();
			let time, callback;
			if (time === currentTime) {
				return callback;
			}
		}
		let boundFunc = transitFunc.bind(this);

		if (this.timerId === undefined) {
			this.timerId = this.alarmCollection.forEach(element => {
				setInterval(boundFunc, 1000);
			})
		}
	}

	stop() {
		if (this.timerId !== undefined) {
			clearInterval(this.timerId);
			delete this.timerId;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(element => console.log(`${element.id}: ${element.time}`));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection.splice(0, this.alarmCollection.length);
	}
}
