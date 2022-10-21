function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student('Pedro', 'male', 19);
let student2 = new Student('Maria', 'female', 21);
let student3 = new Student('Jorje', 'male', 17);
let student4 = new Student('Enrique', 'male', 24);



Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
	if (this.marks === undefined) {
		this.marks = [];
		this.marks.push(mark);
	} else {
		this.marks.push(mark);
	}
}

Student.prototype.addMarks = function(...someMarks) {
	if (this.marks === undefined) {
		this.marks = [];
		this.marks.push(someMarks);
	} else {
		this.marks.push(someMarks);
	}
}

Student.prototype.getAverage = function() {
	let avg;
	let sum;
	if (this.marks === undefined) {
		return false;
	} else {
		this.marks.reduce((acc, mark) => {
			sum = acc += mark;
		}, 0);
	}
	avg = sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}
