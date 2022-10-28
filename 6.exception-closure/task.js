function parseCount(value) {
	let result = Number.parseInt(value);
	if (result === NaN) {
		throw new Error('Невалидное значение');
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		console.error('Невалидное значение')
	}
}


class Triangle {
	constructor (a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	
	getPerimeter() {
		return (this.a + this.b + this.c);
	}

	getArea() {
		let p = (this.a + this.b + this.c) * 0.5;
		let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return +S.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	let triangle = new Triangle(a, b, c);
	error = new Error('Ошибка! Треугольник не существует');
	try {
		return triangle;
	} catch(error) {
		console.log(error);
		return triangle.getPerimeter();
		return triangle.getArea();
	}
}
