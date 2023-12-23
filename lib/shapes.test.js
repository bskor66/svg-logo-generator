const {Triangle, Circle, Square} = require("./shapes");

describe("Triangle", () => {
	test("render() returns correct SVG string", () => {
		const shape = new Triangle();
		shape.setColor("blue");
		expect(shape.render()).toEqual(
			'<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
		);
	});
});

describe("Square", () => {
	test("render() returns correct SVG string", () => {
		const shape = new Square();
		shape.setColor("blue");
		expect(shape.render()).toEqual(
			'<rect width="100" height="100" fill="blue" />'
		);
	});
});

describe("Circle", () => {
	test("render() returns correct SVG string", () => {
		const shape = new Circle();
		shape.setColor("blue");
		expect(shape.render()).toEqual(
			'<circle cx="50" cy="50" r="40" fill="blue" />'
		);
	});
});
