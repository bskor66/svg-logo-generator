const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./shapes");

async function promptSVG() {
	const questions = [
		{
			type: "input",
			name: "text",
			message: "Enter up to three characters:",
			validate: (input) => (input.length <= 3 ? true : "3 characters max"),
		},
		{
			type: "input",
			name: "textColor",
			message: "Enter a color keyword or hexadecimal for text color:",
			default: "black",
		},
		{
			type: "list",
			name: "shape",
			message: "Choose a shape:",
			choices: ["circle", "triangle", "square"],
		},
		,
		{
			type: "input",
			name: "shapeColor",
			message: "Enter a color keyword or hexadecimal for shape color:",
			default: "black",
		},
	];

	try {
		const answers = await inquirer.prompt(questions);
		let shapeSvg;

		switch (shape) {
			case "circle":
				shapeSvg = new Circle(answers.shapeColor);
				break;
			case "square":
				shapeSvg = new Square(answers.shapeColor);
				break;
			case "triangle":
				shapeSvg = new Triangle(answers.shapeColor);
				break;
		}

		const svgContent = `
        <svg width="300" height="200">
          ${shapeSvg.render()}
          <text x="150" y="100" font-family="Verdana" font-size="35" fill="${
						answers.textColor
					}" text-anchor="middle">${answers.text}</text>
        </svg>
        `;

		return svgContent;
	} catch (err) {
		console.error("Error: ", err);
	}
}

module.exports = promptSVG;
