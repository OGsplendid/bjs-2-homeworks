class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}


class Library {
	constructor (name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		} else {
			return false;
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			for (let prop in this.books[i]) {
				if (prop === type && this.books[i][prop] === value) {
					return this.books[i];
				} else {
					return null;
				}
			}
			return null;
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				this.books.splice(i, 1);
			}
		}
	}
}


class Student {
	constructor (name, gender, age) {
		this.name = name;
    	this.gender = gender;
    	this.age = age;
    	this.marks = {};
	}

	addMark(mark, subjectName) {
		if (mark > 5 || mark < 1) {
			console.log("Ошибка, оценка должна быть числом от 1 до 5");
		} else if (this.marks[subjectName] === undefined) {
			this.marks[subjectName] = [];
			this.marks[subjectName].push(mark);
		} else {
			this.marks[subjectName].push(mark);
		}
	}

	getAverageBySubject(subjectName) {
		let sum;
		let avg;
		if (this.marks[subjectName] !== undefined) {
			sum = this.marks[subjectName].reduce((acc, mark) => {
				acc += mark;
				return acc;
			}, 0);
			avg = sum / this.marks[subjectName].length;
			console.log(`Средний балл по предмету geometry ${avg}`);
		} else {
			console.log('Несуществующий предмет');
		}
	}

	getAverage() {
		let sum = 0;
		let count = 0;
		let max = 0;
		let avg;
		for (let subject in this.marks) {
			if (this.marks[subject].length > max) {
				max = this.marks[subject].length;
			}
			for (let i = 0; i < max; i++) {
				count++;
				sum += this.marks[subject][i];
			}
		}
		avg = sum / count;
		return avg;
	}
}
