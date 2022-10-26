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
		}
	}

	giveBookByName(bookName) {
	}
}


class Student {
	constructor (name, gender, age) {
		this.name = name;
    	this.gender = gender;
    	this.age = age;
	}

	addMark(mark, subjectName) {
		let name;
		let marks = [];
		if (mark > 5 || mark < 1) {
			console.log("Ошибка, оценка должна быть числом от 1 до 5");
		} else if (this.subject === undefined) {
			this.subject = [];
			this.subject.push({name: subjectName, marks});
			this.subject[0].marks.push(mark);
		}

		for (let i = 0; i < this.subject.length; i++) {
			if (this.subject[i].name === subjectName && this.subject !== undefined) {
				this.subject[i].marks.push(mark);
			} else if (this.subject[i].name !== subjectName && this.subject !== undefined) {
				this.subject.push({name: subjectName, marks});
				this.subject[i].marks.push(mark);
			}
		}
	}

	// getAverageBySubject(subjectName) {
	// 	let sum;
	// 	for (let i = 0; i < this.subject.length; i++) {
	// 		if (this.subject[i].name === subjectName) {
	// 			sum = this.subject[i].marks.reduce((acc, mark) => {
	// 			acc += mark;
	// 			return acc;
	// 			}, 0);
	// 		} else {
	// 			return false;
	// 		}
	// 	return sum / this.subject[i].marks.length;
	// 	}
	// }

	// getAverage() {
	// 	let sum;
	// 	for (let i = 0; i < this.subject.length; i++) {
	// 		sum = this.subject[i].marks.reduce((acc, mark) => {
	// 			acc += mark;
	// 			return acc;
	// 			}, 0);
	// 	}
	// }
}
