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
		this.marks.push(...someMarks);
		// this.marks.splice(0, 0, ...someMarks);
	} else {
		this.marks.push(...someMarks);
		// this.marks.splice(0, 0, ...someMarks);
	}
}

Student.prototype.getAverage = function() {
	let sum;
	if (this.marks === undefined) {
		return false;
	} else {
		sum = this.marks.reduce((acc, mark) => {
			acc += mark;
			return acc;
		}, 0);
	}
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}
