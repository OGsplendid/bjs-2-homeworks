class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, func, id) {
		if (!id) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
		} else if (this.alarmCollection.some(element => element.id === id)) {
			console.error('Будильник с таким id уже существует');
			return;
		}
		this.alarmCollection.push({time, callback: func, id});
	}

	removeClock(id) {
		if (this.alarmCollection.some(element => element.id === id)) {
			this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
			return true;
		}
		return false;
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {hour: "2-digit", minute: "2-digit"});
	}

	start() {
		if (this.timerId) {
			return;
		}
		// let checkClock = (ring => {
		// 	if (ring.time === this.getCurrentFormattedTime()) {
		// 		ring.callback();
		// 	}
		// });
		this.timerId = setInterval(() => {
			this.alarmCollection.forEach(alarm => {
				let aimTime = this.getCurrentFormattedTime();
				if (alarm.time === aimTime) {
					alarm.callback();
				}
			})
		}, 1000);
	}

	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(element => console.log(`${element.id}: ${element.time}`));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}


function testCase() {
	let phoneAlarm = new AlarmClock();
	phoneAlarm.addClock('09:39', () => console.log('Пора вставать'), 1);
	
	phoneAlarm.addClock('09:40', () => {
		 console.log('Давай, вставай уже!');
		 phoneAlarm.removeClock(2)
	}, 2);
	
	phoneAlarm.addClock('09:41', () => {
		console.log('Вставай, а то проспишь!');
		 phoneAlarm.clearAlarms();
		 phoneAlarm.printAlarms();
	}, 3);
	phoneAlarm.printAlarms();
	phoneAlarm.start();
}
